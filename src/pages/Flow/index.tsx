import { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  MiniMap,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import PhoneNumber from "./Actions/PhoneNumber";
import Conditionals from "./Actions/Conditionals";
import Header from "../Header";
import Departments from "./Actions/Departments";
import { v4 as uuidv4 } from "uuid";
const Flow = () => {
  const nodeTypes = useMemo(
    () => ({
      phoneNumber: PhoneNumber,
      conditionals: Conditionals,
      departments: Departments,
    }),
    []
  );
  const [nodes, setNodes] = useState<any>([
    {
      id: uuidv4(),
      type: "phoneNumber",
      position: { x: 30, y: 30 },
      data: {
        phoneNumber: "4259475220",
      },
    },
    {
      id: uuidv4(),
      type: "conditionals",
      position: { x: 230, y: 230 },
      data: { name: "auto" },
    },
    {
      id: uuidv4(),
      type: "departments",
      position: { x: 630, y: 230 },
      data: { name: "auto" },
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
    <div>
      <Header nodes={nodes} edges={edges}></Header>
      <ReactFlowProvider>
        <div style={{ height: "calc(100vh - 60px)" }}>
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
            <MiniMap nodeStrokeWidth={3} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Flow;
