import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const VoiceMail = (props: any) => {
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
            viewBox="0 0 256 256"
            fill="#7CC504"
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
            <g fill="#7CC504">
              <path
                fill="#7CC504"
                d="M196 68a60 60 0 0 0-48 96h-40a60 60 0 1 0-48 24h136a60 60 0 0 0 0-120ZM24 128a36 36 0 1 1 36 36a36 36 0 0 1-36-36Zm172 36a36 36 0 1 1 36-36a36 36 0 0 1-36 36Z"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">VoiceMail</div>
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

export default VoiceMail;
