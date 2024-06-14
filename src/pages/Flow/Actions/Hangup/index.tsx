import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const Hangup = (props: any) => {
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
            viewBox="0 0 48 48"
            fill="#000000"
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
            <g fill="black">
              <path
                fill="#47528b"
                d="m43.5 16.8l-2.3-2.3c-8.1-7.9-27.5-6.8-34.5 0l-2.3 2.3c-.6.6-.6 1.6 0 2.3L9 23.6c.6.6 1.7.6 2.3 0l5.1-4.9l-.4-5.3c1.6-1.6 14.4-1.6 16 0l-.3 5.5l4.9 4.7c.6.6 1.7.6 2.3 0l4.6-4.5c.7-.7.7-1.7 0-2.3z"
              />
              <g fill="#47528b">
                <path d="M24 40.5L16 31h16z" />
                <path d="M21 24h6v7.5h-6z" />
              </g>
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Hangup</div>
      </div>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <Form.Item name="isHandler" valuePropName="checked">
            <Checkbox className="nodrag">Handler</Checkbox>
          </Form.Item>
        </div>
        {props.data.isHandler && (
          <div className="soundline-node-item">
            <label className="label">Type</label>
            <Form.Item name="type">
              <Input className="nodrag" placeholder="Type" />
            </Form.Item>
          </div>
        )}
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

export default Hangup;
