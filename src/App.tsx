import Editor from "./components/Editor/Editor";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-white w-[1000px] mx-auto rounded-xl min-h-[700px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <SideBar />
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}

export default App;
