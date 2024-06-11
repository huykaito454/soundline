import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const GoToExtension = (props: any) => {
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
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 48 48"
          >
            <circle cx="24" cy="24" r="20" fill="#2979ff"></circle>
            <circle cx="24" cy="19" r="4" fill="#2962ff"></circle>
            <path
              fill="#2962ff"
              d="M24,26c0,0-9,0-9,5.727C15,35,16.636,35,24,35s9,0,9-3.273C33,26,24,26,24,26z"
            ></path>
            <circle cx="24" cy="18" r="4" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M24,25c0,0-9,0-9,5.727C15,34,16.636,34,24,34s9,0,9-3.273C33,25,24,25,24,25z"
            ></path>
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
      <Handle
        className="soundline-handle"
        type="source"
        position={Position.Bottom}
        id="source"
        isConnectable={props.isConnectable}
      />
    </div>
  );
};

export default GoToExtension;
