import { useCallback, useMemo, useRef, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  MiniMap,
  ReactFlowProvider,
  ReactFlowInstance,
} from "reactflow";
import "reactflow/dist/style.css";
import PhoneNumber from "./Actions/PhoneNumber";
import Conditionals from "./Actions/Conditionals";
import Header from "../Header";
import Departments from "./Actions/Departments";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "../Sidebar";
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
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
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
  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("type");
      const data = event.dataTransfer.getData("dataNode");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance?.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: uuidv4(),
        type,
        position,
        data: JSON.parse(data),
      };

      setNodes((nds: any) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );
  return (
    <div className="w-full h-[100vh]">
      <ReactFlowProvider>
        <Header nodes={nodes} edges={edges}></Header>
        <div
          className="flex h-[100vh]"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <div className="w-[220px] shadow">
            <Sidebar></Sidebar>
          </div>
          <div className="flex-1 h-full" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodeTypes={nodeTypes}
            >
              <Background />
              <Controls />
              <MiniMap nodeStrokeWidth={3} />
            </ReactFlow>
          </div>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Flow;
