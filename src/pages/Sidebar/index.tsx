import { Collapse, CollapseProps } from "antd";
import { menu, menuSet, subFlowMenu } from "./menu-action";
const Sidebar = () => {
  const menuSubFlow = subFlowMenu;
  const menuAction = menu;
  const menuSetAction = menuSet;
  menuAction.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  const onDragStart = (event: any, nodeType: any, data: any) => {
    event.dataTransfer.setData("type", nodeType);
    event.dataTransfer.setData("dataNode", JSON.stringify(data));
    event.dataTransfer.effectAllowed = "move";
  };
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "SUB FLOW",
      children: (
        <div className="overflow-y-auto bg-white flex flex-col gap-2 w-full">
          {menuSubFlow.map((action, index) => (
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
          {menuSetAction.map((action, index) => (
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
          {menuAction.map((action, index) => (
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
      <div className=" overflow-y-auto bg-white flex flex-col gap-2 w-full">
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
