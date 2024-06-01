import Flow from "./pages/Flow";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Header></Header>
      </div>
      <div className="w-full h-full flex">
        <div className="w-[220px] shadow">
          <Sidebar></Sidebar>
        </div>
        <div className="flex-1 h-[calc(100vh-60px)]">
          <Flow></Flow>
        </div>
      </div>
    </div>
  );
}

export default App;
