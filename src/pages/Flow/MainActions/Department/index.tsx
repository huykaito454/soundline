import { Form, Input } from "antd";
import { Handle, Position, useReactFlow } from "reactflow";
import { onChangeNode } from "../../../../utils/common";
const Department = (props: any) => {
  const [form] = Form.useForm();
  const { setNodes } = useReactFlow();
  const onChange = (evt: any) => {
    const allFields = form.getFieldsValue();
    onChangeNode(setNodes, props, allFields);
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
        <div className="soundline-node-label">Department</div>
      </div>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <label className="label">Ext</label>
          <Form.Item name="ext">
            <Input className="nodrag" placeholder="Ext" />
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Prefix</label>
          <Form.Item name="prefix">
            <Input className="nodrag" placeholder="Prefix" />
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Name</label>
          <Form.Item name="name">
            <Input className="nodrag" placeholder="Name" />
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Hours</label>
          <Form.Item name="hours">
            <Input className="nodrag" placeholder="Hours" />
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">VoiceMail Box</label>
          <Form.Item name="vmBox">
            <Input className="nodrag" placeholder="VoiceMail Box" />
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Greeting</label>
          <Form.Item name="greeting">
            <Input className="nodrag" placeholder="Greeting" />
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Greeting After Hours</label>
          <Form.Item name="greetingAfterHours">
            <Input className="nodrag" placeholder="Greeting After Hours" />
          </Form.Item>
        </div>
      </Form>
      <div className="soundline-handle-wrapper">
        <div className="soundline-handle-item">
          Down
          <Handle
            className="soundline-handle"
            type="source"
            position={Position.Bottom}
            id="down"
            isConnectable={props.isConnectable}
          />
        </div>
        <div className="soundline-handle-item">
          Close
          <Handle
            className="soundline-handle"
            type="source"
            position={Position.Bottom}
            id="close"
            isConnectable={props.isConnectable}
          />
        </div>
        <div className="soundline-handle-item">
          Open
          <Handle
            className="soundline-handle"
            type="source"
            position={Position.Bottom}
            id="source"
            isConnectable={props.isConnectable}
          />
        </div>
      </div>
    </div>
  );
};

export default Department;
