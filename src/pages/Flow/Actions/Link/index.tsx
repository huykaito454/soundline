import { CopyOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { AutoComplete, Button, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
import { customerNumbers } from "../../../../mockData";
const Link = (props: any) => {
  const currentPath = location.pathname;
  const [form] = Form.useForm();
  const { setNodes, setEdges } = useReactFlow();
  const options = customerNumbers.map((number) => ({
    ...customerNumbers,
    value: number.phoneNumber?.toString(),
  }));
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
  const handleEdit = () => {
    let data = customerNumbers;
    let dataFined = data.find(
      (x: any) => x.phoneNumber == props.data.phoneNumber
    );
    window.open("/phone-number/" + dataFined?.id);
  };
  return (
    <div className="soundline-node">
      <div className="soundline-node-name">
        <div className="logo">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="#1C2033"
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
            <g fill="#1C2033">
              <path
                fill="none"
                stroke="#1C2033"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h8m-1-4h2a4 4 0 0 1 0 8h-2M9 8H7a4 4 0 1 0 0 8h2"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">DID-Link</div>
      </div>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <label className="label">Phone Number</label>
          <div className="flex gap-2 w-full">
            <Form.Item name="phoneNumber" className="flex-1">
              <AutoComplete
                className="nodrag"
                options={options}
                placeholder="Phone Number"
                filterOption={(inputValue: any, option: any) =>
                  option!.value
                    .toUpperCase()
                    .indexOf(inputValue?.toUpperCase()) !== -1
                }
              />
            </Form.Item>
            <Form.Item>
              <Button
                icon={<EditOutlined />}
                title="Edit"
                disabled={!props.data.phoneNumber}
                onClick={handleEdit}
              ></Button>
            </Form.Item>
          </div>
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

export default Link;
