import { Button, Space, notification } from "antd";
import { StarOutlined } from "@ant-design/icons";
import myImage from "../../assets/images/logo.png";
import Input from "antd/es/input/Input";
import { useState } from "react";
const Header = ({ nodes, edges, onClick }: any) => {
  const [rules, setRules] = useState<any>();
  const currentPath = location.pathname;
  const handleClick = () => {
    notification["success"]({
      message: "Notification",
      description: "Publish the flow successfully!",
      placement: "bottomRight",
    });
    console.log(nodes, edges);
  };
  const handleTest = () => {
    onClick(rules);
  };
  const handleChange = (e: any) => {
    setRules(e?.target.value);
  };
  const handleKey = (e: any) => {
    if (e?.key == "Enter") {
      onClick(rules);
    }
  };

  return (
    <div className="py-3 px-6 pl-4 flex items-center justify-between border-b shadow-sm">
      <div className="w-28 flex items-center">
        <img src={myImage} alt="" />
      </div>
      <div className="flex gap-2">
        {currentPath.includes("/phone-number/") && (
          <Space.Compact style={{ width: "100%" }}>
            <Input
              onChange={(e: any) => {
                handleChange(e);
              }}
              onKeyPress={(e: any) => {
                handleKey(e);
              }}
              placeholder="Rules"
            />
            <Button type="primary" onClick={handleTest}>
              Test
            </Button>
          </Space.Compact>
        )}

        <Button onClick={handleClick} type="primary" icon={<StarOutlined />}>
          Publish
        </Button>
      </div>
    </div>
  );
};

export default Header;
