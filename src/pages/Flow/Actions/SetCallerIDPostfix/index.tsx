import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const SetCallerIDPostfix = (props: any) => {
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
            fill="#26AF74"
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
            <g fill="#26AF74">
              <path
                fill="#26AF74"
                d="m9.367 3.312l.86 2.027c.375.883.167 1.922-.514 2.568L7.82 9.705c.117 1.076.478 2.135 1.084 3.178a8.678 8.678 0 0 0 2.271 2.594l2.276-.759c.862-.287 1.801.043 2.33.82l1.232 1.81c.616.904.505 2.15-.258 2.917l-.818.82c-.814.818-1.976 1.114-3.052.779c-2.539-.792-4.873-3.144-7.003-7.054c-2.133-3.916-2.885-7.239-2.258-9.968c.264-1.148 1.082-2.063 2.15-2.404l1.076-.344c1.008-.322 2.086.199 2.518 1.218Zm7.782-1.31l.102-.006a.75.75 0 0 1 .743.648l.007.102V6h3.251a.75.75 0 0 1 .744.649l.006.102a.75.75 0 0 1-.648.743l-.102.007H18v3.248a.75.75 0 0 1-.648.743l-.101.007a.75.75 0 0 1-.744-.648l-.006-.102V7.5h-3.252a.75.75 0 0 1-.743-.647l-.007-.102a.75.75 0 0 1 .648-.743L13.249 6H16.5V2.745a.75.75 0 0 1 .649-.743l.102-.007l-.102.007Z"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Set Caller ID Postfix</div>
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

export default SetCallerIDPostfix;
