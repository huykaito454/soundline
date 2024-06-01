import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import { v4 as uuidv4 } from "uuid";
const Departments = (props: any) => {
  const { setNodes } = useReactFlow();
  const onChange = (evt: any) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === props.id) {
          node.data = { ...evt };
          return node;
        }
        return node;
      })
    );
  };
  const handleDuplicate = () => {
    const duplicatedNode = {
      id: uuidv4(),
      type: props.type,
      position: { x: props.xPos * 3, y: props.yPos },
      data: props.data,
    };

    setNodes((nodes) => [...nodes, duplicatedNode]);
  };
  const handleDelete = () => {
    setNodes((nodes) => nodes.filter((node) => node.id !== props.id));
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
        <div className="soundline-node-label">Departments</div>
      </div>
      <Form
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
        className="soundline-handle-right"
        type="source"
        position={Position.Right}
        id="next"
        isConnectable={props.isConnectable}
      />
      <Handle
        className="soundline-handle-left"
        type="target"
        position={Position.Left}
        id="source"
        isConnectable={props.isConnectable}
      />
    </div>
  );
};

export default Departments;
