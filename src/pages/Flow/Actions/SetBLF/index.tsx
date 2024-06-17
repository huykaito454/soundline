import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const SetBLF = (props: any) => {
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
            viewBox="0 0 36 36"
            fill="#f2c540"
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
            <g fill="#f2c540">
              <path
                fill="#f2c540"
                d="M23.86 29.15H12.11a.8.8 0 1 0 0 1.6h11.75a.8.8 0 0 0 0-1.6Z"
                className="clr-i-solid--badged clr-i-solid-path-1--badged"
              />
              <path
                fill="#f2c540"
                d="M22 32.15h-8a.8.8 0 1 0 0 1.6h8a.8.8 0 1 0 0-1.6Z"
                className="clr-i-solid--badged clr-i-solid-path-2--badged"
              />
              <path
                fill="#f2c540"
                d="M22.5 6a7.47 7.47 0 0 1 .5-2.56a11 11 0 0 0-16 9.8a10.68 10.68 0 0 0 1 4.63a16.36 16.36 0 0 0 1.12 1.78a17 17 0 0 1 2 3.47a16.19 16.19 0 0 1 .59 4h5.69v-5.51l-2.86-3.13l3-3a.8.8 0 0 1 1.13 1.13l-1.89 1.89L19 21v6.17h5.3a16.19 16.19 0 0 1 .59-4a17 17 0 0 1 2-3.47A16.31 16.31 0 0 0 28 17.86a10.63 10.63 0 0 0 1-4.43A7.5 7.5 0 0 1 22.5 6Zm-4 6l-2.73 2.73a.8.8 0 1 1-1.13-1.13l2.73-2.73A.8.8 0 1 1 18.45 12Z"
                className="clr-i-solid--badged clr-i-solid-path-3--badged"
              />
              <circle
                cx="30"
                cy="6"
                r="5"
                fill="#f2c540"
                className="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Set BLF</div>
      </div>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <label className="label">Type</label>
          <Form.Item name="type">
            <Radio.Group buttonStyle="solid" className="nodrag">
              <Radio.Button value="seton">On</Radio.Button>
              <Radio.Button value="setoff">Off</Radio.Button>
              <Radio.Button value="tog">Toogle</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Name</label>
          <Form.Item name="name">
            <Input className="nodrag" placeholder="Name" />
          </Form.Item>
        </div>
        <div
          className={`soundline-node-item ${
            props.data.type == "tog" ? "hidden" : ""
          }`}
        >
          <label className="label">Specific Value</label>
          <Form.Item name="specificValue">
            <Input className="nodrag" placeholder="Specific Value" />
          </Form.Item>
        </div>
        <div
          className={`soundline-node-item ${
            props.data.type != "tog" ? "hidden" : ""
          }`}
        >
          <label className="label">Value When On</label>
          <Form.Item name="onValue">
            <Input className="nodrag" placeholder="Value When On" />
          </Form.Item>
        </div>
        <div
          className={`soundline-node-item ${
            props.data.type != "tog" ? "hidden" : ""
          }`}
        >
          <label className="label">Value When Off</label>
          <Form.Item name="offValue">
            <Input className="nodrag" placeholder="Value When Off" />
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

export default SetBLF;
