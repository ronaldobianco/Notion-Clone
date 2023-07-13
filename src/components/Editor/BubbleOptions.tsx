import { FunctionComponent } from "react";
import BaseButton from "../Button/Button";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";
import { Editor } from "@tiptap/react";
interface BubbleOptionsProps {
  editor: Editor;
}

const BubbleOptions: FunctionComponent<BubbleOptionsProps> = ({ editor }) => {
  const bubleBtnStyle =
    "p-2 text-zinc-200 text-sm flex items-center font-medium leading-none hover:text-zinc50 hover:bg-zinc-600 data-[active=true]:text-violet-400";
  return (
    <div className="flex divide-x divide-zinc-600">
      <BaseButton
        classname={bubleBtnStyle}
        children={
          <>
            text
            <RxChevronDown className="pl-1" />
          </>
        }
      />
      <BaseButton
        classname={bubleBtnStyle}
        children={
          <>
            <RxChatBubble className="pr-1" />
            Comment
          </>
        }
      />
      <div className="flex items-center">
        <BaseButton
          classname={bubleBtnStyle}
          onClick={() => editor.chain().focus().toggleBold().run()}
          data-active={editor.isActive("bold")}
          children={<RxFontBold />}
        />
        <BaseButton
          classname={bubleBtnStyle}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          data-active={editor.isActive("italic")}
          children={<RxFontItalic />}
        />
        <BaseButton
          classname={bubleBtnStyle}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          data-active={editor.isActive("strike")}
          children={<RxStrikethrough />}
        />
        <BaseButton
          classname={bubleBtnStyle}
          onClick={() => editor.chain().focus().toggleCode().run()}
          data-active={editor.isActive("code")}
          children={<RxCode />}
        />
      </div>
    </div>
  );
};

export default BubbleOptions;
