import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const GoToExtension = (props: any) => {
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
                fill="#009688"
                d="m39.2 8.4l-1.8 1.8c-6.3 6.5-5.4 22 0 27.6l1.8 1.8c.5.5 1.3.5 1.8 0l3.6-3.7c.5-.5.5-1.3 0-1.8l-3.4-3.4h-4.8c-1.3-1.3-1.3-12.1 0-13.4h4.8l3.3-3.4c.5-.5.5-1.3 0-1.8L41 8.4c-.5-.5-1.3-.5-1.8 0zm-28 0l-1.8 1.8c-6.3 6.5-5.4 22 0 27.6l1.8 1.8c.5.5 1.3.5 1.8 0l3.6-3.7c.5-.5.5-1.3 0-1.8l-3.4-3.4H8.5c-1.3-1.3-1.3-12.1 0-13.4h4.8l3.3-3.4c.5-.5.5-1.3 0-1.8L13 8.4c-.5-.5-1.3-.5-1.8 0z"
              />
              <g fill="#2196F3">
                <path d="m25.3 18.6l5.4 5.4l-5.4 5.4z" />
                <path d="M16 22h11v4H16z" />
              </g>
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Go To Extension</div>
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
              <Radio.Button value="e">Default</Radio.Button>
              <Radio.Button value="eg">In ext.conf</Radio.Button>
              <Radio.Button value="egs">In sip-ext.conf </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Number</label>
          <Form.Item name="number">
            <Input className="nodrag" placeholder="Number" />
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Ringtone Number</label>
          <Form.Item name="ringtoneNumber">
            <Input className="nodrag" placeholder="Ringtone Number" />
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

export default GoToExtension;
