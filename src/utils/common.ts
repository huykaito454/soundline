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
            name: node[1] || "",
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
            name: node[1] || "",
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
            name: node[1] || "",
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "e" || node[0] == "eg" || node[0] == "egs") {
      let nodeData = node[1]?.split(",") || [];
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "goToQueue",
          position: { x: 120, y: 250 },
          data: {
            number: nodeData[0] || "",
            ringtoneNumber: nodeData[1] || "",
            type: node[0],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "q" || node[0] == "qr") {
      let nodeData: any = [];
      if (node[1]?.includes(",")) {
        nodeData = node[1].split(",");
      } else if (node[1]?.includes(";")) {
        nodeData = node[1].split(";");
      } else {
        nodeData = [node[1] || "", ""];
      }
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "goToQueue",
          position: { x: 120, y: 250 },
          data: {
            name: nodeData[0] || "",
            timeout: nodeData[1] || "",
            offMusic: node[0] == "qr" ? true : false,
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
            name: node[1] || "",
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "mr") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "menuRecord",
          position: { x: 120, y: 250 },
          data: {
            name: node[1] || "",
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "ns") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "nameScreenRecord",
          position: { x: 120, y: 250 },
          data: {
            param: node[1] || "",
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "h" || node[0] == "hh") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "hangup",
          position: { x: 120, y: 250 },
          data: {
            type: node[1] || "",
            isHandler: node[0] == "hh" ? true : false,
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "class") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "class",
          position: { x: 120, y: 250 },
          data: {
            name: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "lang") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "language",
          position: { x: 120, y: 250 },
          data: {
            language: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "tone") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "ringtone",
          position: { x: 120, y: 250 },
          data: {
            name: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "a") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "answer",
          position: { x: 120, y: 250 },
          data: {
            seconds: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "b") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "busy",
          position: { x: 120, y: 250 },
          data: {},
        },
        conditional: command[0],
      };
    }
    if (node[0] == "privacy") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "privacy",
          position: { x: 120, y: 250 },
          data: {},
        },
        conditional: command[0],
      };
    }
    if (node[0] == "rm") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "repeatMenu",
          position: { x: 120, y: 250 },
          data: {},
        },
        conditional: command[0],
      };
    }
    if (node[0] == "trunk") {
      let nodeData = node[1]?.split(",") || [];
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "trunk",
          position: { x: 120, y: 250 },
          data: { sip: nodeData[0] || "", number: nodeData[1] || "" },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "r") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "returnToPreviousMenu",
          position: { x: 120, y: 250 },
          data: {},
        },
        conditional: command[0],
      };
    }
    if (node[0] == "rb") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "callback",
          position: { x: 120, y: 250 },
          data: {},
        },
        conditional: command[0],
      };
    }
    if (node[0] == "zap") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "zap",
          position: { x: 120, y: 250 },
          data: {},
        },
        conditional: command[0],
      };
    }
    if (node[0] == "rgo" || node[0] == "rga" || node[0] == "rgi") {
      let listExtensions: any = [];
      let nodeData = node[1]?.split(";") || [];
      if (nodeData[0]) {
        let extensions = nodeData[0]?.split(",") || [];
        if (extensions.length > 0) {
          extensions.forEach((extension: any) => {
            let item = extension?.split(".") || [];
            if (item[0] || item[1]) {
              listExtensions.push({
                number: item[0] || "",
                ringtoneNumber: item[1] || "",
              });
            }
          });
        }
      }
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "ringGroup",
          position: { x: 120, y: 250 },
          data: {
            type: node[0],
            timeout: nodeData[1] || "",
            exitContext: nodeData[2] || "",
            extensions:
              listExtensions.length > 0
                ? listExtensions
                : [{ number: "", ringtoneNumber: "" }],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "dbfq" || node[0] == "dbfnq") {
      let nodeData = node[1]?.split(",") || [];
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "databaseForward",
          position: { x: 120, y: 250 },
          data: {
            name: nodeData[0] || "",
            callerId: nodeData[1] || "",
            isQualify: node[0] == "dbfq" ? true : false,
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "dir" || node[0] == "dirne") {
      let nodeData = node[1]?.split(",") || [];
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "directory",
          position: { x: 120, y: 250 },
          data: {
            name: nodeData[0] || "",
            dialPlanContext: nodeData[1] || "",
            isExtension: node[0] == "dirne" ? true : false,
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "seton" || node[0] == "setoff" || node[0] == "tog") {
      let nodeData = node[1]?.split(",") || [];
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "blf",
          position: { x: 120, y: 250 },
          data: {
            name: nodeData[0] || "",
            type: node[0],
            specificValue: node[0] != "tog" ? nodeData[1] || "" : "",
            onValue: node[0] == "tog" ? nodeData[1] || "" : "",
            offValue: node[0] == "tog" ? nodeData[2] || "" : "",
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "p" || node[0] == "ps") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "playback",
          position: { x: 120, y: 250 },
          data: {
            name: node[1],
            type: node[0],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "dc") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "goToDepartmentClass",
          position: { x: 120, y: 250 },
          data: {
            additional: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "link") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "link",
          position: { x: 120, y: 250 },
          data: {
            phoneNumber: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "wait") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "wait",
          position: { x: 120, y: 250 },
          data: {
            seconds: node[1],
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "cn" || node[0] == "cncell") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "setCallerIDNumber",
          position: { x: 120, y: 250 },
          data: {
            number: node[1],
            isCell: node[0] == "cncell" ? true : false,
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "fnq" || node[0] == "fq") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "forward",
          position: { x: 120, y: 250 },
          data: {
            number: node[1] || "",
            isQualify: node[0] == "fq" ? true : false,
          },
        },
        conditional: command[0],
      };
    }
    if (node[0] == "pn" || node[0] == "pncell") {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "setCallerIDPostfix",
          position: { x: 120, y: 250 },
          data: {
            number: node[1] || "",
            isCell: node[0] == "pncell" ? true : false,
          },
        },
        conditional: command[0],
      };
    }
    if (
      node[0] == "pre" ||
      node[0] == "precell" ||
      node[0] == "pren" ||
      node[0] == "prencell"
    ) {
      nodeReturn = {
        node: {
          id: nodes.length.toString(),
          type: "setCallerIDPrefix",
          position: { x: 120, y: 250 },
          data: {
            name: node[0] == "pre" || node[0] == "precell" ? node[1] : "",
            number: node[0] == "pren" || node[0] == "prencell" ? node[1] : "",
            type: node[0] == "pre" || node[0] == "precell" ? "name" : "number",
            isCell:
              node[0] == "precell" || node[0] == "prencell" ? true : false,
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
            voicemailBox: node[1] || "",
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
