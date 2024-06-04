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
import PhoneNumber from "./MainActions/PhoneNumber";

import Header from "../Header";

import { v4 as uuidv4 } from "uuid";
import Sidebar from "../Sidebar";
import GoToConditional from "./Actions/GoToConditional";
import GoToDepartment from "./Actions/GoToDepartment";
import Conditional from "./MainActions/Conditional";
import Department from "./MainActions/Department";
import CustomEdge from "./Other/CustomEdge";
import Menu from "./MainActions/Menu";
import MenuEdge from "./Other/MenuEdge";
import GoToMenu from "./Actions/GoToMenu";

const nodeTypes = {
  phoneNumber: PhoneNumber,
  goToConditional: GoToConditional,
  goToDepartment: GoToDepartment,
  conditional: Conditional,
  department: Department,
  menu: Menu,
  goToMenu: GoToMenu,
};
const edgeTypes = {
  custom: CustomEdge,
  menu: MenuEdge,
};
const Flow = () => {
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
      type: "conditional",
      position: { x: 30, y: 230 },
      data: {
        name: "auto",
        lineLimit: "0",
        lineGroup: "0",
      },
    },
    {
      id: uuidv4(),
      type: "department",
      position: { x: 30, y: 530 },
      data: {
        name: "auto",
      },
    },
    {
      id: uuidv4(),
      type: "menu",
      position: { x: 430, y: 30 },
      data: {
        name: "auto",
        timeout: "3",
        maxDigits: "3",
        msgFile: "greeting",
      },
    },
    {
      id: uuidv4(),
      type: "goToConditional",
      position: { x: 800, y: 230 },
      data: { name: "auto" },
    },
    {
      id: uuidv4(),
      type: "goToDepartment",
      position: { x: 800, y: 430 },
      data: { name: "auto" },
    },
  ]);
  const [edges, setEdges] = useState<any>([]);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback((params: any) => {
    if (params.sourceHandle == "menu-source") {
      params.type = "menu";
      params.data = {
        value: "1",
      };
    } else {
      params.type = "custom";
      params.data = {
        condition: "1",
        value: "",
      };
    }

    setEdges((eds: any) => addEdge(params, eds));
  }, []);
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
              edgeTypes={edgeTypes}
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
