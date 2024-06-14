import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import { deleteNode, duplicateNode } from "../../../../utils/common";
const Privacy = (props: any) => {
  const currentPath = location.pathname;
  const { setNodes, setEdges } = useReactFlow();
  const handleDuplicate = () => {
    duplicateNode(setNodes, props);
  };
  const handleDelete = () => {
    deleteNode(setNodes, setEdges, props);
  };
  return (
    <div className="soundline-node">
      <div className="soundline-node-name">
        <div className="logo">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 20 20"
            fill="#d12323"
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
            <g fill="#d12323">
              <path
                fill="#d12323"
                d="M10 9.6c-.6 0-1 .4-1 1c0 .4.3.7.6.8l-.3 1.4h1.3l-.3-1.4c.4-.1.6-.4.6-.8c.1-.6-.3-1-.9-1zm.1-4.3c-.7 0-1.4.5-1.4 1.2V8h2.7V6.5c-.1-.7-.6-1.2-1.3-1.2zM10 2L3 5v3c.1 4.4 2.9 8.3 7 9.9c4.1-1.6 6.9-5.5 7-9.9V5l-7-3zm4 11c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h.3V6.5C7.4 5.1 8.6 4 10 4c1.4 0 2.6 1.1 2.7 2.5V8h.3c.6 0 1 .4 1 1v4z"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Privacy</div>
      </div>
      <div className="soundline-description">Anonymous call block.</div>
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

export default Privacy;
