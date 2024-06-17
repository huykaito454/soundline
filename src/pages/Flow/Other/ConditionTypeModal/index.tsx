import { Form, Input, Select } from "antd";
import { conditionsData } from "../../../../utils/constant";
import { useState } from "react";

const ConditionTypeModal = (props: any) => {
  const [data, setData] = useState<any>(props.data);
  const conditions = conditionsData;
  const onChange = (evt: any) => {
    const allFields = props.form.getFieldsValue();
    setData(allFields);
  };
  return (
    <>
      {props.type == "menu" ? (
        <div className="py-4">
          <Form
            onValuesChange={onChange}
            initialValues={data}
            form={props.form}
          >
            <div className="soundline-node-item">
              <label className="label-modal">Key Press</label>
              <Form.Item
                name="value"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "Please input your value!",
                  },
                ]}
                validateTrigger={["onBlur", "onChange"]}
              >
                <Input placeholder="Key Press" />
              </Form.Item>
            </div>
          </Form>
        </div>
      ) : (
        <div className="py-4">
          <Form
            onValuesChange={onChange}
            initialValues={data}
            form={props.form}
          >
            <div className="soundline-node-item mb-2">
              <label className="label-modal">Name</label>
              <Form.Item name="condition">
                <Select>
                  {conditions &&
                    conditions.map((item, index) => (
                      <Select.Option value={item.type} key={index}>
                        {item.display}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </div>
            {data.condition != "1" && (
              <div className="soundline-node-item">
                <label className="label-modal">Value</label>
                <Form.Item
                  name="value"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input your value!",
                    },
                  ]}
                  validateTrigger={["onBlur", "onChange"]}
                >
                  <Input placeholder="Value" />
                </Form.Item>
              </div>
            )}
          </Form>
        </div>
      )}
    </>
  );
};
export default ConditionTypeModal;
