import { CopyOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio, Space } from "antd";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";
import {
  deleteNode,
  duplicateNode,
  onChangeNode,
} from "../../../../utils/common";
const RingGroup = (props: any) => {
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
            viewBox="0 0 48 48"
            fill="#6b3ce2"
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
            <g fill="#6b3ce2">
              <mask id="ipSCircularConnection0">
                <g fill="none" stroke="#fff" strokeWidth="4">
                  <path d="M13.5 39.37A16.927 16.927 0 0 0 24 43c3.963 0 7.61-1.356 10.5-3.63M19 9.747C12.051 11.882 7 18.351 7 26c0 1.925.32 3.775.91 5.5M29 9.747C35.949 11.882 41 18.351 41 26c0 1.925-.32 3.775-.91 5.5" />
                  <path
                    fill="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M43 36c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 43 36Zm-28 0c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 15 36ZM29 9c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 29 9Z"
                  />
                </g>
              </mask>
              <path
                fill="#6b3ce2"
                d="M0 0h48v48H0z"
                mask="url(#ipSCircularConnection0)"
              />
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Ring Group</div>
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
              <Radio.Button value="rgo">Only</Radio.Button>
              <Radio.Button value="rgi">Skip In Use</Radio.Button>
              <Radio.Button value="rga">Add</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Extensions</label>
          <Form.List name="extensions">
            {(fields: any, { add, remove }) => (
              <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-col gap-3 nodrag">
                  {fields.map((field: any) => (
                    <div key={field.key} className="gap-1 flex">
                      <Form.Item name={[field.name, "number"]}>
                        <Input
                          placeholder="Number"
                          prefix="Ext:"
                          className="flex-1"
                        />
                      </Form.Item>
                      <Form.Item
                        name={[field.name, "ringtoneNumber"]}
                        className="w-[37%]"
                      >
                        <Input placeholder="Ringtone Number" />
                      </Form.Item>
                      <Button
                        icon={<DeleteOutlined />}
                        title="Delete"
                        onClick={() => remove(field.name)}
                        disabled={fields.length === 1}
                      />
                    </div>
                  ))}
                </div>
                <Button
                  icon={<PlusOutlined />}
                  shape="circle"
                  title="More Extension"
                  onClick={() => add()}
                />
              </div>
            )}
          </Form.List>
        </div>
      </Form>
      <Form
        form={form}
        className="soundline-node-content"
        onValuesChange={onChange}
        initialValues={props.data}
      >
        <div className="soundline-node-item">
          <label className="label">Timeout (s)</label>
          <Form.Item name="timeout">
            <Input type="number" className="nodrag" placeholder="Timeout (s)" />
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Exit Context</label>
          <Form.Item name="exitContext">
            <Input className="nodrag" placeholder="Exit Context" />
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

export default RingGroup;
