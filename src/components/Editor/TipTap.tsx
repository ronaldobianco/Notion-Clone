import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "../../assets/initialContent";
import { lowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/atom-one-dark.css";
import BubbleOptions from './BubbleOptions'
import FloatingOption from "./Floatingoptions";
lowlight.registerLanguage("html", html);

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent editor={editor} />
      {editor && (<FloatingMenu className="flex flex-col bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden px-1 py-2" editor={editor} children={<FloatingOption editor={editor} />} shouldShow={
        ({state}) => {
          const { $from } = state.selection;
          const currentLineText = $from.nodeBefore?.textContent;
          return currentLineText === '/'
        }
      } />)}
      {editor && (<BubbleMenu className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden" editor={editor} children={<BubbleOptions editor={editor}  />} />)}
    </>
  );
};

export default Tiptap;
