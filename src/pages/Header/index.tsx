import { Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import myImage from "../../assets/images/logo.png";
const Header = ({ nodes, edges }: any) => {
  const handleClick = () => {
    console.log(nodes, edges);
  };
  return (
    <div className="py-3 px-6 pl-4 flex items-center justify-between border-b shadow-sm">
      <div className="w-28 flex items-center">
        <img src={myImage} alt="" />
      </div>
      <div>
        <Button onClick={handleClick} type="primary" icon={<StarOutlined />}>
          Publish
        </Button>
      </div>
    </div>
  );
};

export default Header;
