import { ExpandOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useLayoutEffect } from "react";
import { Panel, useReactFlow, useViewport } from "reactflow";

const MAX_ZOOM = 2;
const MIN_ZOOM = 0.5;

export const CustomControls = () => {
  const { x, y, zoom } = useViewport();
  const { setViewport } = useReactFlow();

  const zoomPercent = Math.round((zoom - 1) * 100);

  const handleZoomIn = () => {
    setViewport({
      zoom: zoom >= MAX_ZOOM ? MAX_ZOOM : zoom + 0.25,
      x,
      y,
    });
  };

  const handleZoomOut = () => {
    setViewport({
      zoom: zoom <= MIN_ZOOM ? MIN_ZOOM : zoom - 0.25,
      x,
      y,
    });
  };

  const handleFitView = () => {
    setViewport({
      zoom: 0.75,
      x: 0,
      y: 0,
    });
  };

  useLayoutEffect(() => {
    setViewport({
      zoom: 0.75,
      x: 0,
      y: 0,
    });
  }, [setViewport]);

  return (
    <Panel position="bottom-left">
      <div className="flex gap-3 bg-white rounded-lg p-2 shadow border">
        <Button
          type="text"
          icon={<PlusOutlined />}
          onClick={handleZoomIn}
        ></Button>
        <span className="flex w-9 items-center justify-center">
          {zoomPercent > 100 ? "100%" : `${zoomPercent}%`}
        </span>
        <Button
          type="text"
          icon={<MinusOutlined />}
          onClick={handleZoomOut}
        ></Button>
        <Button
          type="text"
          icon={<ExpandOutlined />}
          onClick={handleFitView}
        ></Button>
      </div>
    </Panel>
  );
};
