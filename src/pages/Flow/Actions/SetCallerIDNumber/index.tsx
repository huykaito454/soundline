import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const SetCallerIDNumber = (props: any) => {
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
            viewBox="0 0 24 24"
            fill="#28AE9B"
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
            <g fill="#28AE9B">
              <path
                fill="#28AE9B"
                d="M22 3H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M8 6a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1m3.85-4h1.65l1.5 2l-2 2c-1.3-1-2.27-2.39-2.72-4c-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3 2.72-4l2 2l-1.5 2h-1.65c-.22.63-.35 1.3-.35 2s.13 1.37.35 2Z"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Set Caller ID Number</div>
      </div>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <label className="label">Number</label>
          <Form.Item name="number">
            <Input className="nodrag" placeholder="Number" />
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <Form.Item name="isCell" valuePropName="checked">
            <Checkbox className="nodrag">For cell phone forwarding</Checkbox>
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

export default SetCallerIDNumber;
