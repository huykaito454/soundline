import { Button, Form, Modal, notification } from "antd";
import { useState } from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getSmoothStepPath,
  useReactFlow,
} from "reactflow";
import ConditionTypeModal from "../ConditionTypeModal";
import { onChangeEdge } from "../../../../utils/common";

const MenuEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}: EdgeProps) => {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setEdges } = useReactFlow();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields({ validateOnly: true })
      .then(() => {
        setIsModalOpen(false);
        onChangeEdge(setEdges, id, form.getFieldsValue());
        const allFields = form.getFieldsValue();
        Object.keys(allFields).forEach(
          (k) => (allFields[k] = allFields[k].trim())
        );
        form.setFieldsValue(allFields);
      })
      .catch(() => {
        notification["error"]({
          message: "Notification",
          description: "Please input your value!",
          placement: "bottomRight",
        });
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.setFieldsValue(data);
  };
  const handleDelete = () => {
    setIsModalOpen(false);
    setEdges((edges: any) => edges.filter((item: any) => item.id !== id));
  };
  const customStyle = {
    ...style,
    stroke: "#1677ff",
  };
  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={customStyle} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,

            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <div className="edge-label" onClick={showModal}>
            {data?.value?.trim() ? (
              <span>Press: {data?.value}</span>
            ) : (
              <span>None</span>
            )}
          </div>
        </div>
      </EdgeLabelRenderer>
      <Modal
        title="Choose Condition"
        centered
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="1" danger onClick={handleDelete}>
            Delete
          </Button>,
          <Button onClick={handleOk} key="2" type="primary">
            Confirm
          </Button>,
        ]}
      >
        <ConditionTypeModal
          data={data}
          form={form}
          type="menu"
        ></ConditionTypeModal>
      </Modal>
    </>
  );
};
export default MenuEdge;
