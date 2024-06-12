import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const Playback = (props: any) => {
  const currentPath = location.pathname;
  const [form] = Form.useForm();
  const { setNodes, setEdges } = useReactFlow();
  const onChange = (evt: any) => {
    const allFields = form.getFieldsValue();
    onChangeNode(setNodes, props, allFields);
  };
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
            viewBox="0 0 32 32"
            fill="currentColor"
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
            <g fill="currentColor">
              <path
                fill="#00007f"
                d="M17.229 4a.9.9 0 0 0-.569.232l-7.6 6.32a1.158 1.158 0 0 1-.955.328H3.208A1.2 1.2 0 0 0 2 12.088v7.826a1.2 1.2 0 0 0 1.208 1.206H8.1a1.158 1.158 0 0 1 .955.328l7.6 6.32c.521.433 1.081.224 1.081-.289V4.522A.494.494 0 0 0 17.229 4ZM27 6.3l-1.791 1.793a14.708 14.708 0 0 1 0 15.844l1.785 1.776A17.19 17.19 0 0 0 27 6.3Zm-4.333 4.323L20.905 12.4a6.035 6.035 0 0 1 0 7.237l1.756 1.756a8.554 8.554 0 0 0 .01-10.769Z"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Playback</div>
      </div>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <label className="label">Name</label>
          <Form.Item name="name">
            <Input className="nodrag" placeholder="Name" />
          </Form.Item>
        </div>
      </Form>
      <NodeToolbar
        isVisible={props.data.toolbarVisible}
        position={props.data.toolbarPosition}
        align="end"
        className="flex gap-1 "
      >
        <Button
          size="small"
          title="Duplicate"
          icon={<CopyOutlined />}
          onClick={handleDuplicate}
        ></Button>
        <Button
          size="small"
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

export default Playback;
