import { FunctionComponent } from "react";
import Tiptap from "./TipTap";

interface EditorProps {}

const Editor: FunctionComponent<EditorProps> = () => {
  return (
    <div className="max-w-[700px] mx-auto pt-16 prose prose-violet">
      <Tiptap />
    </div>
  );
};

export default Editor;
