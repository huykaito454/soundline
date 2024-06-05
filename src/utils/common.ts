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
