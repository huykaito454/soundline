import { Button, notification } from "antd";
import { StarOutlined } from "@ant-design/icons";
import myImage from "../../assets/images/logo.png";
import { getDataFlow } from "../../utils/exportFinalData";

const Header = ({ nodes, edges }: any) => {
  const currentPath = location.pathname;
  const handleClick = () => {
    notification["success"]({
      message: "Notification",
      description: "",
      placement: "bottomRight",
    });

    console.log(getDataFlow(nodes, edges, currentPath));
  };

  return (
    <div className="py-3 px-4 pl-4 flex items-center justify-between border-b shadow-sm">
      <div className="w-28 flex items-center gap-16">
        <img src={myImage} alt="" />
      </div>
      <div className="flex gap-2">
        <Button onClick={handleClick} type="primary" icon={<StarOutlined />}>
          Publish
        </Button>
      </div>
    </div>
  );
};

export default Header;
