import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const Trunk = (props: any) => {
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
            fill="#2b3a82"
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
            <g fill="#2b3a82">
              <path
                fill="#2b3a82"
                d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3ZM12.5 8q-.2 0-.35-.15T12 7.5q0-.2.15-.35T12.5 7H14V6h-1.5q-.2 0-.35-.15T12 5.5v-2q0-.2.15-.35T12.5 3h2q.2 0 .35.15t.15.35q0 .2-.15.35T14.5 4H13v1h1.5q.2 0 .35.15t.15.35v2q0 .2-.15.35T14.5 8h-2Zm4 0q-.2 0-.35-.15T16 7.5v-4q0-.2.15-.35T16.5 3q.2 0 .35.15t.15.35v4q0 .2-.15.35T16.5 8Zm2 0q-.2 0-.35-.15T18 7.5v-4q0-.2.15-.35T18.5 3h2q.2 0 .35.15t.15.35v2q0 .2-.15.35T20.5 6H19v1.5q0 .2-.15.35T18.5 8Zm.5-3h1V4h-1v1Z"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">SIP Trunk</div>
      </div>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <label className="label">SIP Account</label>
          <Form.Item name="sip">
            <Input className="nodrag" placeholder="SIP Account" />
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Called Number</label>
          <Form.Item name="number">
            <Input className="nodrag" placeholder="Called Number" />
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

export default Trunk;
