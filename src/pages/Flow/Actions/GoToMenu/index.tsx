import { CopyOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { AutoComplete, Button, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
import { menu } from "../../../../mockData";
const GoToMenu = (props: any) => {
  const currentPath = location.pathname;
  const [form] = Form.useForm();
  const options = menu.map((item) => ({
    ...menu,
    value: item.name?.toString(),
  }));
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
  const handleEdit = () => {
    let data = menu;
    let dataFined = data.find((x: any) => x.name == props.data.name);
    window.open("/menu/" + dataFined?.id);
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
            <circle cx="24" cy="24" r="20" fill="#669df6"></circle>
            <path
              fill="#317be4"
              d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33	C37.97,18,42,22.03,42,27z"
            ></path>
            <rect width="1" height="2" x="29" y="15" fill="#fff"></rect>
            <path
              fill="#fff"
              d="M34,17v14c0,1.1-0.9,2-2,2l-1-1l-1,1h-3c-1.1,0-2-0.9-2-2V17c0-1.1,0.9-2,2-2v3c0,0.55,0.45,1,1,1h2	v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-6C33.1,15,34,15.9,34,17z"
            ></path>
            <path
              fill="#fff"
              d="M21,33h-5c-1.105,0-2-0.895-2-2V17c0-1.105,0.895-2,2-2h5c1.105,0,2,0.895,2,2v14	C23,32.105,22.105,33,21,33z"
            ></path>
            <path
              fill="#317be4"
              d="M20,29h-3c-0.552,0-1-0.447-1-1v-4c0-0.553,0.448-1,1-1h2v-2h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h3	c0.552,0,1,0.447,1,1v4c0,0.553-0.448,1-1,1h-2v2h2c0.552,0,1,0.447,1,1S20.552,29,20,29z"
            ></path>
            <path
              fill="#317be4"
              d="M32,30v3h-2v-2h-2c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1s-0.45,1-1,1h-2v2h2	C31.55,29,32,29.45,32,30z"
            ></path>
          </svg>
        </div>
        <div className="soundline-node-label">Go To Menu</div>
      </div>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <label className="label">Name</label>
          <div className="flex gap-2 w-full">
            <Form.Item name="name" className="flex-1">
              <AutoComplete
                className="nodrag"
                options={options}
                placeholder="Name"
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
                disabled={!props.data.name}
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

export default GoToMenu;
