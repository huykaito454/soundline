import { Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import myImage from "../../assets/images/logo.png";
const Header = () => {
  return (
    <div className="py-3 px-6 flex items-center justify-between border shadow-sm">
      <div className="w-20 h-5 flex items-center">
        <img src={myImage} alt="" />
      </div>
      <div>
        <Button type="primary" icon={<StarOutlined />}>
          Publish
        </Button>
      </div>
    </div>
  );
};

export default Header;
