"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";

export default function RichTextEditor({
  onChange,
  content = "",
}: {
  onChange?: (html: string) => void;
  content?: string;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className=" border p-2 rounded-md min-h-[150px]">
      <Button
        type="button"
        onClick={() => {
          const result = editor.chain().focus().toggleBulletList().run();
          console.log("toggle result", result);
        }}
        className={
          editor.isActive("bulletList") ? "bg-blue-500 text-white" : ""
        }
      >
        <List />
      </Button>
      <EditorContent editor={editor} className="h-[150px] overflow-y-auto" />
    </div>
  );
}
