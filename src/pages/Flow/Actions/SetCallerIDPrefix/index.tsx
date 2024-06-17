import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const SetCallerIDPrefix = (props: any) => {
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
            viewBox="0 0 1024 1024"
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
                d="m938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM699 387c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Set Caller ID Prefix</div>
      </div>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <label className="label">Type</label>
          <Form.Item name="type">
            <Radio.Group buttonStyle="solid" className="nodrag">
              <Radio.Button value="number">Number</Radio.Button>
              <Radio.Button value="name">Name</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </div>
        <div
          className={`soundline-node-item ${
            props.data.type == "name" ? "hidden" : ""
          }`}
        >
          <label className="label">Number</label>
          <Form.Item name="number">
            <Input type="number" className="nodrag" placeholder="Number" />
          </Form.Item>
        </div>
        <div
          className={`soundline-node-item ${
            props.data.type == "number" ? "hidden" : ""
          }`}
        >
          <label className="label">Name</label>
          <Form.Item name="name">
            <Input className="nodrag" placeholder="Name" />
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

export default SetCallerIDPrefix;
