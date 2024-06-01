import { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import PhoneNumber from "./Actions/PhoneNumber";

const Flow = () => {
  const nodeTypes = useMemo(() => ({ phoneNumber: PhoneNumber }), []);
  const [nodes, setNodes] = useState<any>([
    {
      id: "1",
      type: "phoneNumber",
      position: { x: 30, y: 30 },
      data: { name: "Phone Number", phoneNumber: "4259475220" },
    },
  ]);
  const [edges, setEdges] = useState<any>([]);
  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params: any) => setEdges((eds: any) => addEdge(params, eds)),
    []
  );
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
