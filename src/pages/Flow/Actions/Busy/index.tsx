import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import { deleteNode, duplicateNode } from "../../../../utils/common";
const Busy = (props: any) => {
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
            viewBox="0 0 24 24"
            fill="#E25113"
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
            <g fill="#E25113">
              <g id="evaPhoneMissedFill0">
                <g id="evaPhoneMissedFill1">
                  <path
                    id="evaPhoneMissedFill2"
                    fill="#E25113"
                    d="M21.94 16.64a4.34 4.34 0 0 0-.19-.73a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10 10 0 0 1-4.88-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72a3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2A4.6 4.6 0 0 0 2 6.6A15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6a4.77 4.77 0 0 0-.06-.76ZM15.8 8.7a1.05 1.05 0 0 0 1.47 0L18 8l.73.73a1 1 0 0 0 1.47-1.5l-.73-.73l.73-.73a1 1 0 0 0-1.47-1.47L18 5l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73l-.73.73a1.05 1.05 0 0 0 0 1.47Z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Busy</div>
      </div>
      <div className="soundline-description">This plays a busy tone.</div>
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

export default Busy;
