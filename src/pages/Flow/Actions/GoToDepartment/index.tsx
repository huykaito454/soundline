import { CopyOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { AutoComplete, Button, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
import { department } from "../../../../mockData";
const GoToDepartment = (props: any) => {
  const currentPath = location.pathname;
  const [form] = Form.useForm();
  const options = department.map((item) => ({
    ...department,
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
    let data = department;
    let dataFined = data.find((x: any) => x.name == props.data.name);
    window.open("/department/" + dataFined?.id);
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
            <circle cx="24" cy="24" r="20" fill="#ffca28"></circle>
            <path
              fill="#fff"
              d="M25,31v-3.436C25,25.901,21.669,25,20,25s-5,0.901-5,2.564V31H25z"
            ></path>
            <circle cx="20" cy="20" r="3" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M33,27.56V31h-6v-3.44c0-0.93-0.36-1.69-0.92-2.3C26.78,25.09,27.47,25,28,25	C29.67,25,33,25.9,33,27.56z"
            ></path>
            <circle cx="28" cy="20" r="3" fill="#fff"></circle>
          </svg>
        </div>
        <div className="soundline-node-label">Go To Department</div>
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

export default GoToDepartment;
