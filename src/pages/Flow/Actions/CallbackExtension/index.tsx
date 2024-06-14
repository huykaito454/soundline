import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import { deleteNode, duplicateNode } from "../../../../utils/common";
const CallbackExtension = (props: any) => {
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
            viewBox="0 0 48 48"
            fill="#3A76F5"
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
            <g fill="#3A76F5">
              <path
                fill="#2196F3"
                d="M26.4 33.9s4-2.6 4.8-3c.8-.4 1.7-.6 2.2-.2c.8.5 7.5 4.9 8.1 5.3c.6.4.8 1.5.1 2.6c-.8 1.1-4.3 5.5-5.8 5.4c-1.5 0-8.4.4-20.3-11.4C3.6 20.7 4 13.8 4 12.3s4.3-5.1 5.4-5.8c1.1-.8 2.2-.5 2.6.1c.4.6 4.8 7.3 5.3 8.1c.3.5.2 1.4-.2 2.2c-.4.8-3 4.8-3 4.8s.7 2.8 5 7.2c4.4 4.3 7.3 5 7.3 5z"
              />
              <g fill="#3F51B5">
                <path d="M35 9H25v4h10c1.1 0 2 .9 2 2v10h4V15c0-3.3-2.7-6-6-6z" />
                <path d="m28 16l-6.7-5L28 6z" />
              </g>
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Callback Extension</div>
      </div>
      <div className="soundline-description">
        Ring back to the extension that transferred the call. 
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

export default CallbackExtension;
