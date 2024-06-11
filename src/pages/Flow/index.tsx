import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import { useLocation, useParams } from "react-router-dom";
import {
  conditionalData,
  departmentData,
  menuData,
  phoneNumberData,
} from "../../data";
import StartRecord from "./Actions/StartRecord";
import VoiceMail from "./Actions/VoiceMail";
import Playback from "./Actions/Playback";
import GoToExtension from "./Actions/GotoExtension";
import {
  returnConditionFlow,
  returnDepartmentFlow,
  returnMenuFlow,
  returnPhoneNumberFlow,
} from "../../utils/common";
import { conditional, customerNumbers, department, menu } from "../../mockData";

const nodeTypes = {
  phoneNumber: PhoneNumber,
  goToConditional: GoToConditional,
  goToDepartment: GoToDepartment,
  conditional: Conditional,
  department: Department,
  menu: Menu,
  goToMenu: GoToMenu,
  startRecord: StartRecord,
  voiceMail: VoiceMail,
  playback: Playback,
  goToExtension: GoToExtension,
};
const edgeTypes = {
  custom: CustomEdge,
  menu: MenuEdge,
};
const Flow = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentPath = location.pathname;
  const [edges, setEdges] = useState<any>([]);
  const reactFlowWrapper = useRef<any>(null);
  const ref = useRef<any>(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const [nodes, setNodes] = useState<any>([]);

  useEffect(() => {
    if (ref.current) {
      let flow: any = [];
      if (currentPath.includes("/phone-number/")) {
        let data = customerNumbers;
        let dataFined = data.find((x: any) => x.id == id);
        flow = returnPhoneNumberFlow(dataFined);
      }
      if (currentPath.includes("/conditional/")) {
        let data = conditional;
        let dataFined = data.find((x: any) => x.id == id);
        flow = returnConditionFlow(dataFined);
      }
      if (currentPath.includes("/department/")) {
        let data = department;
        let dataFined = data.find((x: any) => x.id == id);
        flow = returnDepartmentFlow(dataFined);
      }
      if (currentPath.includes("/menu/")) {
        let data = menu;
        let dataFined = data.find((x: any) => x.id == id);
        flow = returnMenuFlow(dataFined);
      }
      setNodes(flow.nodes);
      setEdges(flow.edges);
    }
  }, []);
  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback((params: any) => {
    if (
      !currentPath.includes("/department/") &&
      !currentPath.includes("/phone-number/")
    ) {
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
    }
    if (params.sourceHandle == "menu-source") {
      setEdges((eds: any) => addEdge(params, eds));
    } else {
      setEdges((eds: any) => {
        const existed = eds.filter(
          (x: any) =>
            (x.source === params.source &&
              x.sourceHandle === params.sourceHandle) ||
            x.target === params.target
        );
        if (existed.length === 0) {
          return addEdge(params, eds);
        }
        return eds;
      });
    }
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
    <div className="w-full h-[100vh]" ref={ref}>
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
              defaultViewport={{ x: 0, y: 0, zoom: 0.9 }}
              fitView
            >
              <Background />
              <Controls />
              <MiniMap nodeStrokeWidth={3} pannable={true} zoomable={true} />
            </ReactFlow>
          </div>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Flow;
