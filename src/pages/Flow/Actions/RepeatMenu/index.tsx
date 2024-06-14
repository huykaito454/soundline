import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import { deleteNode, duplicateNode } from "../../../../utils/common";
const RepeatMenu = (props: any) => {
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
                fill="#3A76F5"
                d="M17 17v-3q0-.425.288-.713T18 13q.425 0 .713.275t.287.7V18q0 .425-.288.713T18 19H6.85l.825.825q.3.3.313.725t-.288.725q-.3.3-.713.3T6.3 21.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7l2.575-2.575q.3-.3.713-.3t.712.3q.3.3.3.713t-.3.712l-.85.85H17ZM7 7v3q0 .425-.288.713T6 11q-.425 0-.713-.275t-.287-.7V6q0-.425.288-.713T6 5h11.15l-.825-.825q-.3-.3-.313-.725t.288-.725q.3-.3.713-.3t.687.275l2.6 2.6q.275.275.275.7t-.275.7l-2.575 2.575q-.3.3-.713.3t-.712-.3q-.3-.3-.3-.713t.3-.712l.85-.85H7Z"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Repeat Menu</div>
      </div>
      <div className="soundline-description">
        This allows the caller to repeat the current menu to listen to it again.
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

export default RepeatMenu;
