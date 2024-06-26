import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import { deleteNode, duplicateNode } from "../../../../utils/common";
const Zapateller = (props: any) => {
  const currentPath = location.pathname;
  const { setNodes, setEdges } = useReactFlow();
  const handleDuplicate = () => {
    duplicateNode(setNodes, props);
  };
  const handleDelete = () => {
    deleteNode(setNodes, setEdges, props);
  };
  return (
    <div className="soundline-node w-[300px]">
      <div className="soundline-node-name">
        <div className="logo">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="#e25113"
            x="128"
            y="128"
            role="img"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              padding: "2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#e25113">
              <path
                fill="#e25113"
                d="M21.78 2.22a.75.75 0 0 1 0 1.06L18.56 6.5l3.22 3.22a.75.75 0 1 1-1.06 1.06L17.5 7.56l-3.22 3.22a.75.75 0 0 1-1.06-1.06l3.22-3.22l-3.22-3.22a.75.75 0 1 1 1.06-1.06l3.22 3.22l3.22-3.22a.75.75 0 0 1 1.06 0ZM9.368 3.312l.86 2.028c.375.883.167 1.922-.514 2.568L7.82 9.706c.117 1.076.478 2.135 1.084 3.177a8.678 8.678 0 0 0 2.271 2.595l2.276-.76c.862-.287 1.801.044 2.33.821l1.232 1.81c.616.904.505 2.15-.258 2.916l-.818.821c-.814.817-1.976 1.114-3.052.778c-2.539-.792-4.873-3.143-7.003-7.053c-2.133-3.916-2.885-7.24-2.258-9.968c.264-1.148 1.082-2.063 2.15-2.404l1.076-.344c1.008-.322 2.086.199 2.518 1.217Z"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Zapateller</div>
      </div>
      <div className="soundline-description">
        For signaling telemarketers that you don't want their call.
      </div>
      <NodeToolbar
        isVisible={props.data.toolbarVisible}
        position={props.data.toolbarPosition}
        align="end"
        className="soundline-tool"
      >
        <Button
          size="small"
          type="text"
          title="Duplicate"
          icon={<CopyOutlined />}
          onClick={handleDuplicate}
        ></Button>
        <Button
          size="small"
          type="text"
          title="Delete"
          icon={<DeleteOutlined />}
          onClick={handleDelete}
        ></Button>
      </NodeToolbar>
      <Handle
        className="soundline-handle"
        type="target"
        position={Position.Top}
        id="target"
        isConnectable={props.isConnectable}
      />
      {!currentPath.includes("/menu/") && (
        <Handle
          className="soundline-handle"
          type="source"
          position={Position.Bottom}
          id="source"
          isConnectable={props.isConnectable}
        />
      )}
    </div>
  );
};

export default Zapateller;
