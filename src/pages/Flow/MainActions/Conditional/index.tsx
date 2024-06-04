import { Form, Input } from "antd";
import { Handle, Position, useReactFlow } from "reactflow";
import { onChangeNode } from "../../../../utils/common";

const Conditional = (props: any) => {
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
            <circle cx="24" cy="24" r="20" fill="#03a9f4"></circle>
            <path
              fill="#fff"
              d="M18.684,26.139c0.083,0.084,0.109,0.141,0.022,0.281c-0.331,0.314-1.878,3.146-5.317,3.271 c-0.845,0.031-1.101-0.423-1.085-0.845c0.04-1.065,0.511-1.804,1.754-5.242l0.8-2.226c0.177-0.487,0.271-0.715,0.346-1.02 c0.037-0.153,0.045-0.215,0.047-0.328c0.004-0.197-0.227-0.226-0.422-0.078c-0.391,0.297-1.247,1.034-1.594,1.484 c-0.114,0.113-0.228,0.113-0.31,0.028l-0.281-0.285c-0.083-0.084-0.137-0.197-0.08-0.253c0.09-0.105,0.958-1.362,2.265-2.365 c0.8-0.615,1.717-1.186,2.862-1.186c0.873,0,1.231,0.451,1.222,1.015c-0.012,0.62-0.364,1.466-0.956,3.101l-1.698,4.285 c-0.192,0.521-0.311,0.881-0.383,1.145c-0.071,0.264-0.11,0.484,0.172,0.484c0.563,0,1.811-1.387,1.984-1.641 c0.058-0.084,0.171-0.084,0.226-0.028L18.684,26.139z M20.57,13.141C20.556,14.014,19.74,15,18.812,15 c-0.977,0-1.595-0.648-1.578-1.719c0.014-0.874,0.729-1.72,1.581-1.72C20.019,11.562,20.583,12.267,20.57,13.141z"
            ></path>
            <path
              fill="#fff"
              d="M23.578,17.76c0.453-1.4,0.655-3.299,2.953-5.807c0.689-0.762,2.318-1.931,4.094-1.931 c2.424,0,3.425,0.886,3.406,1.899c-0.012,0.705-0.683,1.566-1.5,1.566c-1.184,0-1.141-0.832-1.297-1.52 c-0.052-0.282-0.359-0.791-1.008-0.791c-1.859,0-2.927,3.573-3.711,6.588h2.245c0.169,0,0.224,0.084,0.192,0.254L28.8,18.724 c-0.031,0.197-0.09,0.282-0.315,0.282h-2.217c-0.66,2.311-1.607,7.586-2.674,10.544c-1.927,5.138-4.059,7.905-7.524,7.905 c-1.691,0-2.775-0.759-2.757-1.83c0.014-0.788,0.543-1.604,1.417-1.604c0.901,0,1.521,0.542,1.596,1.687 c0.022,0.282,0.217,0.479,0.612,0.479c1.381,0,2.489-2.044,3.762-7.115L23.25,19h-1.641c-0.142,0-0.224-0.113-0.192-0.254 l0.183-0.761c0.03-0.142,0.088-0.226,0.313-0.226H23.578z"
            ></path>
            <path
              fill="#fff"
              d="M30.299,27.891c-0.014,0.873-0.809,1.859-1.714,1.859c-0.953,0-1.554-0.648-1.538-1.719 c0.014-0.874,0.877-1.692,1.708-1.692C29.929,26.339,30.312,27.017,30.299,27.891z"
            ></path>
            <path
              fill="#fff"
              d="M35.127,27.891c-0.014,0.873-0.809,1.859-1.714,1.859c-0.953,0-1.554-0.648-1.538-1.719 c0.014-0.874,0.877-1.692,1.708-1.692C34.756,26.339,35.139,27.017,35.127,27.891z"
            ></path>
            <g>
              <path
                fill="#fff"
                d="M39.954,27.891c-0.014,0.873-0.809,1.859-1.714,1.859c-0.953,0-1.554-0.648-1.538-1.719 c0.014-0.874,0.877-1.692,1.708-1.692C39.584,26.339,39.967,27.017,39.954,27.891z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="soundline-node-label">Conditional</div>
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
        <div className="soundline-node-item">
          <label className="label">Line Limit</label>
          <Form.Item name="lineLimit">
            <Input className="nodrag" placeholder="Line Limit" />
          </Form.Item>
        </div>
        <div className="soundline-node-item">
          <label className="label">Line Group</label>
          <Form.Item name="lineGroup">
            <Input className="nodrag" placeholder="Line Group" />
          </Form.Item>
        </div>
      </Form>
      <div className="soundline-handle-wrapper">
        <div className="soundline-handle-item">
          Busy
          <Handle
            className="soundline-handle"
            type="source"
            position={Position.Bottom}
            id="busy"
            isConnectable={props.isConnectable}
          />
        </div>
        <div className="soundline-handle-item">
          Next
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

export default Conditional;
