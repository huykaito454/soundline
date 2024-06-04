import { menu } from "./menu-action";
const Sidebar = () => {
  const menuAction = menu;
  const onDragStart = (event: any, nodeType: any, data: any) => {
    event.dataTransfer.setData("type", nodeType);
    event.dataTransfer.setData("dataNode", JSON.stringify(data));
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="flex flex-col gap-2 items-center p-4">
      <div className=" overflow-y-auto bg-white flex flex-col gap-2 w-full">
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
    </div>
  );
};

export default Sidebar;
