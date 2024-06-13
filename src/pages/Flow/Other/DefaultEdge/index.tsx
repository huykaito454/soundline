import { Button } from "antd";
import { useState } from "react";

import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  MarkerType,
  getMarkerEnd,
  getSmoothStepPath,
  useReactFlow,
} from "reactflow";

const DefaultEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) => {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const { setEdges } = useReactFlow();

  const handleDelete = () => {
    setEdges((edges: any) => edges.filter((item: any) => item.id !== id));
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const customStyle = {
    ...style,
    stroke: "#1677ff",
  };

  return (
    <g onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={customStyle} />
      <EdgeLabelRenderer>
        {isHovered && (
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              fontSize: 12,
              pointerEvents: "all",
            }}
            className="nodrag nopan"
          >
            <Button
              className="button-delete border-1"
              shape="circle"
              title="Delete"
              onClick={handleDelete}
            >
              x
            </Button>
          </div>
        )}
      </EdgeLabelRenderer>
    </g>
  );
};
export default DefaultEdge;
