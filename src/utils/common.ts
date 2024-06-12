import { phoneNumberData } from "./../data";
import { v4 as uuidv4 } from "uuid";
// On Change Action
export const onChangeNode = (setNodes: any, node: any, newData: any) => {
  setNodes((nodes: any) =>
    nodes.map((item: any) => {
      if (item.id === node.id) {
        return { ...item, data: { ...newData } };
      }
      return item;
    })
  );
};
export const onChangeEdge = (setEdge: any, id: any, newData: any) => {
  if (!newData.hasOwnProperty("value")) {
    newData.value = "";
  }
  Object.keys(newData).forEach((k) => (newData[k] = newData[k].trim()));
  setEdge((edges: any) =>
    edges.map((item: any) => {
      if (item.id === id) {
        return { ...item, data: { ...newData } };
      }
      return item;
    })
  );
};
// Duplicate Action
export const duplicateNode = (setNodes: any, node: any) => {
  const duplicatedNode = {
    id: uuidv4(),
    type: node.type,
    position: { x: node.xPos + 50, y: node.yPos + 50 },
    data: node.data,
  };

  setNodes((nodes: any) => [...nodes, duplicatedNode]);
};
//Delete Action
export const deleteNode = (setNodes: any, setEdges: any, node: any) => {
  setNodes((nodes: any) => nodes.filter((item: any) => item.id !== node.id));
  setEdges((eds: any) =>
    eds.filter(
      (item: any) => item.source !== node.id && item.target !== node.id
    )
  );
};
export const returnPhoneNumberFlow = (data: any) => {
  let nodes: any = [];
  let edges: any = [];
  let yPosition = 40;
  nodes.push({
    id: "0",
    type: "phoneNumber",
    position: { x: 120, y: yPosition },
    data: {
      phoneNumber: data.phoneNumber,
    },
  });
  try {
    let commands = data.conditionalName.split("|");
    commands = commands.filter((item: any) => item !== "");
    commands.forEach((command: any) => {
      if (isAlphanumeric(command)) {
        yPosition = yPosition + 250;
        nodes.push({
          id: nodes.length.toString(),
          type: "goToConditional",
          position: { x: 120, y: yPosition },
          data: {
            name: command,
          },
        });
        edges.push(addConnection(nodes.length - 2, nodes.length - 1));
      } else {
        let newNode = addNewNode(command, nodes);
        if (newNode != null) {
          yPosition = yPosition + 250;
          newNode.node.position.y = yPosition;
          nodes.push(newNode.node);
          edges.push(addConnection(nodes.length - 2, nodes.length - 1));
        }
      }
    });
  } catch (error) {
    return { nodes: nodes, edges: edges };
  }
  return { nodes: nodes, edges: edges };
};
export const returnMenuFlow = (data: any) => {
  let nodes: any = [];
  let edges: any = [];
  let xPosition = -330;
  let yPosition = 500;
  nodes.push({
    id: "0",
    type: "menu",
    position: { x: 120, y: 40 },
    data: {
      name: data.name,
      timeout: data.menuTimeout,
      maxDigits: data.maxDigits,
      msgFile: data.msgFile,
    },
  });
  try {
    //Handle Rule
    let rules = data.menu.split("|");
    rules = rules.filter((item: any) => item !== "");
    rules.forEach((command: any) => {
      let newNode = addNewNode(command, nodes);
      if (newNode != null) {
        xPosition = xPosition + 350;
        console.log(xPosition);
        newNode.node.position.y = yPosition;
        newNode.node.position.x = xPosition;
        nodes.push(newNode.node);
        edges.push(
          addConnection(
            0,
            nodes.length - 1,
            "menu-source",
            "menu",
            newNode.conditional
          )
        );
      }
    });
  } catch (error) {
    return { nodes: nodes, edges: edges };
  }
  return { nodes: nodes, edges: edges };
};
export const returnConditionFlow = (data: any) => {
  let nodes: any = [];
  let edges: any = [];
  let yPositionOpen = 40;
  let yPositionBusy = 40;
  let xPosition = 120;
  nodes.push({
    id: "0",
    type: "conditional",
    position: { x: xPosition, y: yPositionOpen },
    data: {
      name: data.name,
      lineLimit: data.lineLimit,
      lineGroup: data.lineGroup,
    },
  });
  try {
    //Handle Rule
    let rules = data.rules.split("|");
    rules = rules.filter((item: any) => item !== "");
    rules.forEach((command: any) => {
      let newNode = addNewNode(command, nodes);
      if (newNode != null) {
        if (yPositionOpen > 250) {
          yPositionOpen = yPositionOpen + 250;
        } else {
          yPositionOpen = yPositionOpen + 370;
        }
        newNode.node.position.y = yPositionOpen;
        newNode.node.position.x = xPosition + 300;
        nodes.push(newNode.node);

        edges.push(
          addConnection(
            nodes.length - 2,
            nodes.length - 1,
            "source",
            "conditional",
            newNode.conditional
          )
        );
      }
    });

    //Handle Busy Rule
    let busyRules = data.busyRules.split("|");
    let firstBusyNode = false;
    busyRules = busyRules.filter((item: any) => item !== "");
    busyRules.forEach((command: any) => {
      let newNode = addNewNode(command, nodes);
      if (newNode != null) {
        if (yPositionBusy > 250) {
          yPositionBusy = yPositionBusy + 250;
        } else {
          yPositionBusy = yPositionBusy + 370;
        }
        newNode.node.position.y = yPositionBusy;
        newNode.node.position.x = xPosition - 100;
        nodes.push(newNode.node);
        edges.push(
          addConnection(
            !firstBusyNode ? 0 : nodes.length - 2,
            nodes.length - 1,
            !firstBusyNode ? "busy" : "source",
            "conditional",
            newNode.conditional
          )
        );
        firstBusyNode = true;
      }
    });
  } catch (error) {
    console.log(error);
    return { nodes: nodes, edges: edges };
  }
  return { nodes: nodes, edges: edges };
};
export const returnDepartmentFlow = (data: any) => {
  let nodes: any = [];
  let edges: any = [];
  let yPositionOpen = 40;
  let yPositionClose = 40;
  let yPositionDown = 40;
  let xPosition = 120;
  nodes.push({
    id: "0",
    type: "department",
    position: { x: xPosition, y: yPositionOpen },
    data: {
      ext: data.ext,
      prefix: data.prefix,
      name: data.name,
      hours: data.hours,
      vmBox: data.vmbox,
      greeting: data.custGreeting,
      greetingAfterHours: data.custGreetAfterHours,
    },
  });
  try {
    //Handle Rule
    let rules = data.openRules.split("|");
    rules = rules.filter((item: any) => item !== "");
    rules.forEach((command: any) => {
      let newNode = addNewNode(command, nodes, "department");

      if (newNode != null) {
        if (yPositionOpen > 250) {
          yPositionOpen = yPositionOpen + 250;
        } else {
          yPositionOpen = yPositionOpen + 600;
        }
        newNode.node.position.y = yPositionOpen;
        newNode.node.position.x = xPosition + 700;
        nodes.push(newNode.node);
        edges.push(addConnection(nodes.length - 2, nodes.length - 1, "source"));
      }
    });

    //Handle Close Rule
    let closedRules = data.closedRules.split("|");
    let firstClosedNode = false;
    closedRules = closedRules.filter((item: any) => item !== "");
    closedRules.forEach((command: any) => {
      let newNode = addNewNode(command, nodes, "department");
      if (newNode != null) {
        if (yPositionClose > 250) {
          yPositionClose = yPositionClose + 250;
        } else {
          yPositionClose = yPositionClose + 600;
        }
        newNode.node.position.y = yPositionClose;
        newNode.node.position.x = xPosition + 300;
        nodes.push(newNode.node);
        edges.push(
          addConnection(
            !firstClosedNode ? 0 : nodes.length - 2,
            nodes.length - 1,
            !firstClosedNode ? "close" : "source",
            "department"
          )
        );
        firstClosedNode = true;
      }
    });

    //Handle Down Rule

    let downRules = data.downRules.split("|");
    let firstDownNode = false;
    downRules = downRules.filter((item: any) => item !== "");
    downRules.forEach((command: any) => {
      let newNode = addNewNode(command, nodes, "department");
      if (newNode != null) {
        if (yPositionDown > 250) {
          yPositionDown = yPositionDown + 250;
        } else {
          yPositionDown = yPositionDown + 600;
        }
        newNode.node.position.y = yPositionDown;
        newNode.node.position.x = xPosition - 100;
        nodes.push(newNode.node);
        edges.push(
          addConnection(
            !firstDownNode ? 0 : nodes.length - 2,
            nodes.length - 1,
            !firstDownNode ? "down" : "source",
            "department"
          )
        );
        firstDownNode = true;
      }
    });
  } catch (error) {
    console.log(error);
    return { nodes: nodes, edges: edges };
  }
  return { nodes: nodes, edges: edges };
};

const addNewNode = (data: any, nodes: any, type: any = null) => {
  let command = data.split("/");
  if (command.length == 2 || (command.length == 1 && type == "department")) {
    if (type == "department") {
      command[1] = command[0];
    }

    let nodeReturn: any = null;
    let node = command[1].split(":");
    if (node[0] == "c") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "goToConditional",
          position: { x: 120, y: 250 },
          data: {
            name: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "d") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "goToDepartment",
          position: { x: 120, y: 250 },
          data: {
            name: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "m") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "goToMenu",
          position: { x: 120, y: 250 },
          data: {
            name: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "e") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "goToExtension",
          position: { x: 120, y: 250 },
          data: {
            number: node[1].split(".")[0],
            ringtoneNumber: node[1].split(".")[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "rec") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "startRecord",
          position: { x: 120, y: 250 },
          data: {
            name: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "p") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "playback",
          position: { x: 120, y: 250 },
          data: {
            name: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (
      node[0] == "v" ||
      node[0] == "vu" ||
      node[0] == "va" ||
      node[0] == "vb" ||
      node[0] == "vs"
    ) {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "voiceMail",
          position: { x: 120, y: 250 },
          data: {
            voicemailBox: node[1],
            type: node[0],
          },
        },
        conditional: command[0],
      };
    }
    return nodeReturn;
  } else {
    return null;
  }
};

const isAlphanumeric = (str: any) => {
  return /^[a-zA-Z0-9]+$/.test(str);
};

const addConnection = (
  source: any,
  target: any,
  sourceHandle: any = "source",
  type: any = "phoneNumber",
  conditionalData: any = null
) => {
  let sourceNode = source.toString();
  let targetNode = target.toString();
  if (type == "phoneNumber") {
    return addConnectionEdges(sourceNode, targetNode);
  }
  if (type == "department") {
    return addConnectionEdges(sourceNode, targetNode, sourceHandle);
  }
  if (type == "conditional") {
    return addConnectionEdges(
      sourceNode,
      targetNode,
      sourceHandle,
      "custom",
      conditionalData
    );
  }
  if (type == "menu") {
    return addConnectionEdges(
      sourceNode,
      targetNode,
      sourceHandle,
      "menu",
      conditionalData
    );
  }
};
const addConnectionEdges = (
  sourceId: any,
  targetId: any,
  sourceHandle: any = "source",
  type: any = "",
  conditionalData: any = null
) => {
  let connection: any = {
    id: uuidv4(),
    source: sourceId,
    target: targetId,
    sourceHandle: sourceHandle,
    targetHandle: "target",
  };

  if (type == "custom") {
    connection["type"] = type;
    connection["data"] = handleConditionData(conditionalData);
  }
  if (type == "menu") {
    connection["type"] = type;
    connection["data"] = handleMenuData(conditionalData);
  }
  return connection;
};
const handleMenuData = (conditionalData: any) => {
  let data = {
    value: "1",
  };
  try {
    if (conditionalData) {
      data.value = conditionalData;
    }
  } catch (error) {
    console.log(error);
  }
  return data;
};
const handleConditionData = (conditionalData: any) => {
  let data = {
    condition: "1",
    value: "",
  };
  try {
    let conditional = conditionalData.split("!");

    if (conditional.length >= 2) {
      data.condition = conditional[0];
      data.value = conditional[1];
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  return data;
};
