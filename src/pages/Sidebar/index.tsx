import { Collapse, CollapseProps, Input } from "antd";
import { menu, menuSet, subFlowMenu } from "./menu-action";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const menuSubFlow = subFlowMenu;
  const menuAction = menu;
  const menuSetAction = menuSet;
  const onDragStart = (event: any, nodeType: any, data: any) => {
    event.dataTransfer.setData("type", nodeType);
    event.dataTransfer.setData("dataNode", JSON.stringify(data));
    event.dataTransfer.effectAllowed = "move";
  };
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const searchByKey = (term: any, array: any, key: any) => {
    const lowerCaseTerm = term?.trim()?.toLowerCase();
    return array.filter((item: any) => {
      if (item[key] && typeof item[key] === "string") {
        return item[key].toLowerCase().includes(lowerCaseTerm);
      }
      return false;
    });
  };
  const filteredMenuSubFlow = searchByKey(searchTerm, menuSubFlow, "name");
  const filteredMenuAction = searchByKey(searchTerm, menuAction, "name");
  const filteredMenuSetAction = searchByKey(searchTerm, menuSetAction, "name");
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "SUB FLOW",
      children: (
        <div className="overflow-y-auto bg-white flex flex-col gap-2 w-full">
          {filteredMenuSubFlow.map((action: any, index: any) => (
            <div
              key={index}
              className="menu-item dndnode"
              onDragStart={(event) =>
                onDragStart(event, action.type, action.data)
              }
              draggable
            >
              <div dangerouslySetInnerHTML={{ __html: action.icon }} />
              <span>{action.name}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: "SET",
      children: (
        <div className="overflow-y-auto bg-white flex flex-col gap-2 w-full">
          {filteredMenuSetAction.map((action: any, index: any) => (
            <div
              key={index}
              className="menu-item dndnode"
              onDragStart={(event) =>
                onDragStart(event, action.type, action.data)
              }
              draggable
            >
              <div dangerouslySetInnerHTML={{ __html: action.icon }} />
              <span>{action.name}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "3",
      label: "ACTIONS",
      children: (
        <div className="overflow-y-auto bg-white flex flex-col gap-2 w-full">
          {filteredMenuAction.map((action: any, index: any) => (
            <div
              key={index}
              className="menu-item dndnode"
              onDragStart={(event) =>
                onDragStart(event, action.type, action.data)
              }
              draggable
            >
              <div dangerouslySetInnerHTML={{ __html: action.icon }} />
              <span>{action.name}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className=" overflow-y-auto bg-white flex flex-col w-full">
        <div>
          <Input
            size="large"
            className="hidden-outline"
            placeholder="Search"
            onChange={handleSearchChange}
            prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </div>
        <Collapse
          items={items}
          defaultActiveKey={["1"]}
          expandIconPosition={"end"}
        />
      </div>
    </div>
  );
};

export default Sidebar;
