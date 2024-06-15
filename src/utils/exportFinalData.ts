export const getDataFlow = (nodes: any, edges: any) => {
  let finalData = "";
  try {
    let firstNote = edges.find((x: any) => x.source == "0");
    if (firstNote) {
      let allEdgesValid = getEdgesValid(firstNote, [firstNote], edges);
      finalData = getCommand(allEdgesValid, nodes);
    }
    console.log(finalData);

    return finalData;
  } catch (error) {
    return finalData;
  }
};
const getCommand = (edges: any, nodes: any) => {
  let finalData = "";
  try {
    edges.forEach((edge: any) => {
      const node = getNodeById(nodes, edge.target);
      if (node) {
        if (node.type == "link") {
          finalData = finalData + getLink(node.data, edge.data);
        }
      }
    });
    return finalData;
  } catch (error) {
    return finalData;
  }
};
const getNodeById = (nodes: any, id: any) => {
  try {
    const node = nodes.find((x: any) => x.id == id);
    return node;
  } catch (error) {
    return null;
  }
};
const getEdgesValid: any = (edge: any, allEdges: any, edges: any) => {
  if (edge == null) {
    return allEdges;
  } else {
    let edgeValid = edges.find((x: any) => {
      return x.source == edge.target;
    });
    if (edgeValid) {
      allEdges.push(edgeValid);
    }
    return getEdgesValid(edgeValid, allEdges, edges);
  }
};

const getLink = (data: any, conditional: any) => {
  let command = "";
  try {
    if (data && data?.phoneNumber) {
      command = "link:" + data?.phoneNumber?.trim();
      if (conditional && conditional.condition) {
        command =
          conditional.condition + "!" + conditional.value + "/" + command;
      }
      command = command + "|";
    }
    return command;
  } catch (error) {
    return command;
  }
};
