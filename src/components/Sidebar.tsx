import { FunctionComponent } from "react";
import BaseButton from "./Button/Button";

interface SideBarProps {}

const SideBar: FunctionComponent<SideBarProps> = () => {
  return <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
    <div className="flex gap-2 group">
        <BaseButton  classname={"group-hover:bg-red-400 w-3 h-3 rounded-full bg-zinc-300"} />
        <BaseButton classname={"group-hover:bg-yellow-400 w-3 h-3 rounded-full bg-zinc-300"} />
        <BaseButton classname={"group-hover:bg-green-400 w-3 h-3 rounded-full bg-zinc-300"} />
    </div>
  </aside>;
};

export default SideBar;
