import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const ForwardNumber = (props: any) => {
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
            viewBox="0 0 16 16"
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
                d="m6.7 1.173l-.754-.138a2.266 2.266 0 0 0-2.063.71C2.623 3.117 1.996 5.26 2 8.174c.004 2.91.636 4.988 1.895 6.234c.533.528 1.324.72 2.075.505l.754-.216c.704-.202 1.175-.883 1.1-1.594l-.149-1.424A1.35 1.35 0 0 0 6.55 10.48l-1.604-.274A5.49 5.49 0 0 1 4.43 8.01c-.024-.787.103-1.508.382-2.162l1.714-.442a1.532 1.532 0 0 0 1.14-1.315l.144-1.432A1.354 1.354 0 0 0 6.7 1.173Zm5.154 2.973a.5.5 0 0 0-.708.708L13.293 7H8.5a.5.5 0 0 0 0 1h4.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3Z"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Forward Number</div>
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
          <Form.Item name="isQualify" valuePropName="checked">
            <Checkbox className="nodrag">Qualify</Checkbox>
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

export default ForwardNumber;
