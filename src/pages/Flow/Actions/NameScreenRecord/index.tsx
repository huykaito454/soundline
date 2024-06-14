import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const NameScreenRecord = (props: any) => {
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
            fill="#E8403E"
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
            <g fill="#E8403E">
              <path
                fill="#E4AB00"
                d="M19.125 15.125q-.275-.275-.288-.7t.263-.775q.775-.95 1.212-2.138T20.75 9q0-1.3-.438-2.475T19.1 4.4q-.275-.35-.275-.775t.3-.725q.35-.35.838-.35t.787.35q1.05 1.275 1.65 2.825T23 9q0 1.725-.6 3.275T20.75 15.1q-.3.35-.787.363t-.838-.338ZM15.9 11.9q-.275-.275-.313-.713t.213-.862q.175-.3.263-.637T16.15 9q0-.35-.087-.688t-.263-.637q-.25-.425-.213-.862T15.9 6.1q.35-.35.85-.337t.775.387q.425.625.675 1.338T18.45 9q0 .8-.25 1.513t-.675 1.337q-.275.375-.775.388t-.85-.338ZM9 13q-1.65 0-2.825-1.175T5 9q0-1.65 1.175-2.825T9 5q1.65 0 2.825 1.175T13 9q0 1.65-1.175 2.825T9 13Zm-7 8q-.425 0-.713-.288T1 20v-1.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T9 14q1.925 0 3.525.45t2.875 1.1q.75.375 1.175 1.1T17 18.2V20q0 .425-.288.713T16 21H2Z"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Name Screen Record</div>
      </div>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <label className="label">Param</label>
          <Form.Item name="param">
            <Input className="nodrag" placeholder="Param" />
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

export default NameScreenRecord;
