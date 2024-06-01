import Flow from "./pages/Flow";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <div className="w-full h-[100vh] flex">
      <div className="w-[220px] shadow">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 h-[100vh]">
        <Flow></Flow>
      </div>
    </div>
  );
}

export default App;
