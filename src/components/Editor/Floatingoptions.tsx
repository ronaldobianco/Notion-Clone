import { Editor } from "@tiptap/react";
import { FunctionComponent } from "react";
import BaseButton from "../Button/Button";
import { RxText, RxLetterCaseUppercase } from "react-icons/rx";
interface FloatingOptionProps {
  editor: Editor;
}

const FloatingOption: FunctionComponent<FloatingOptionProps> = ({ editor }) => {
  return (
    <>
      <BaseButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
        children={
          <div className="flex items-center gap-2 hover:bg-zinc-600">
            <RxText color="white" size={30} />
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium text-zinc-200">Text</span>
              <span className="text-xs text-zinc-400">
                Format text with Markdown
              </span>
            </div>
          </div>
        }
      />
      <BaseButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
        children={
          <div className="flex items-center gap-2 hover:bg-zinc-600">
            <RxLetterCaseUppercase color="white" size={30} />
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium text-zinc-200">
                heading 1
              </span>
              <span className="text-xs text-zinc-400">Big section headinh</span>
            </div>
          </div>
        }
      />
    </>
  );
};

export default FloatingOption;
