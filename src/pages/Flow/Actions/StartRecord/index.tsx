import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const StartRecord = (props: any) => {
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
            viewBox="0 0 32 32"
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
              <g fill="none">
                <circle cx="16" cy="16" r="16" fill="#E8403E" />
                <path
                  fill="#fff"
                  d="M25.696 15.732c.72 0 1.304.57 1.304 1.275s-.584 1.275-1.304 1.275c-.55 0-1.021-.334-1.212-.805h-3.72l-1.372 2.44c-.226.402-.845.283-.899-.172l-.308-2.607l-1.14 8.454c-.076.562-.917.536-.956-.03l-.935-13.667l-.99 9.054c-.06.54-.853.568-.95.033l-1.048-5.756l-.484 1.895a.479.479 0 0 1-.466.356H6.48c-.265 0-.48-.21-.48-.47s.215-.47.48-.47h4.36l.939-3.671c.126-.492.848-.467.94.032l.849 4.669L14.787 6.42c.063-.571.918-.555.957.018l.981 14.34l1.014-7.524c.074-.549.889-.543.954.007l.582 4.915l.784-1.396a.482.482 0 0 1 .421-.243h4.004a1.304 1.304 0 0 1 1.212-.805z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Start Record</div>
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

export default StartRecord;
