import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const SetLanguage = (props: any) => {
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
            viewBox="0 0 36 36"
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
                d="m11 16.5l-1 3.1h2l-1-3.1z"
                className="clr-i-solid clr-i-solid-path-1"
              />
              <path
                fill="#3A76F5"
                d="M30.3 3h-16v5h4v2h-13c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h1v5.1l6.3-5.1h6.7v-7h11c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM13.1 22.9l-.5-1.6H9.5l-.6 1.6H6.5L9.8 14h2.4l3.3 8.9h-2.4zM28.3 15v2c-1.3 0-2.7-.4-3.9-1c-1.2.6-2.6.9-4 1l-.1-2c.7 0 1.4-.1 2.1-.3c-.9-.9-1.5-2-1.8-3.2h2.1c.3.9.9 1.6 1.6 2.2c1.1-.9 1.8-2.2 1.9-3.7h-6V8h3V6h2v2h3.3l.1 1c.1 2.1-.7 4.2-2.2 5.7c.7.2 1.3.3 1.9.3z"
                className="clr-i-solid clr-i-solid-path-2"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Set Language</div>
      </div>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <label className="label">Language</label>
          <Form.Item name="language">
            <Input className="nodrag" placeholder="Language" />
          </Form.Item>
        </div>
      </Form>
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

export default SetLanguage;
