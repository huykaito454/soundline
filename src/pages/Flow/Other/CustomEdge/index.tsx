import { Button, Form, Modal } from "antd";
import { useState } from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
} from "reactflow";
import ConditionTypeModal from "../ConditionTypeModal";
import { conditionsData } from "../../../../utils/constant";
import { onChangeEdge } from "../../../../utils/common";

const CustomEdge = ({
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
  const condition = conditionsData.find((item) => item.type === data.condition);
  const [edgePath, labelX, labelY] = getBezierPath({
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
    setIsModalOpen(false);
    const allFields = form.getFieldsValue();
    onChangeEdge(setEdges, id, allFields);
    form.setFieldsValue(data);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.setFieldsValue(data);
  };
  const handleDelete = () => {
    setIsModalOpen(false);
    setEdges((edges: any) => edges.filter((item: any) => item.id !== id));
  };
  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
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
            {condition?.type == "1" ? (
              <span>{condition?.display}</span>
            ) : (
              <span>
                {condition?.display} : {data?.value}
              </span>
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
          type="condition"
        ></ConditionTypeModal>
      </Modal>
    </>
  );
};
export default CustomEdge;