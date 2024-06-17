import { Input } from "antd";
import { Panel } from "reactflow";

export const CustomReviewRules = ({ rules }: any) => {
  const currentPath = location.pathname;
  return (
    <Panel position="top-right">
      <div className="flex flex-col bg-white rounded-lg p-2 px-4 shadow border gap-1 w-[400px]">
        <div className="flex gap-3 flex-col">
          {(currentPath.includes("/phone-number/") ||
            currentPath.includes("/conditional/")) && (
            <div className="flex flex-col gap-1 w-full">
              <label className="label text-gray-600">Rules</label>
              <Input placeholder="Rules" readOnly value={rules.source}></Input>
            </div>
          )}
          {currentPath.includes("/conditional/") && (
            <div className="flex flex-col gap-1 w-full">
              <label className="label text-gray-600">Busy Rules</label>
              <Input placeholder="Rules" readOnly value={rules.busy}></Input>
            </div>
          )}
          {currentPath.includes("/department/") && (
            <>
              {" "}
              <div className="flex flex-col gap-1 w-full">
                <label className="label text-gray-600">Open Rules</label>
                <Input
                  placeholder="Rules"
                  readOnly
                  value={rules.source}
                ></Input>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label className="label text-gray-600">Close Rules</label>
                <Input placeholder="Rules" readOnly value={rules.close}></Input>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label className="label text-gray-600">Down Rules</label>
                <Input placeholder="Rules" readOnly value={rules.down}></Input>
              </div>
            </>
          )}
          {currentPath.includes("/menu/") && (
            <div className="flex flex-col gap-1 w-full">
              <label className="label text-gray-600">Menu Rules</label>
              <Input
                placeholder="Rules"
                readOnly
                value={rules["menu-source"]}
              ></Input>
            </div>
          )}
        </div>
      </div>
    </Panel>
  );
};
