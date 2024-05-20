'use client'
// @ts-ignore

// import { Color } from "@tiptap/extension-color";

import React from 'react'
import {common, createLowlight} from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import ListItem from "@tiptap/extension-list-item";
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list'
import Document from '@tiptap/extension-document' ;
import Paragraph from '@tiptap/extension-paragraph' ;
import Text from '@tiptap/extension-text';
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextStyle from "@tiptap/extension-text-style"
import Placeholder from '@tiptap/extension-placeholder'
import Code from '@tiptap/extension-code'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from "@tiptap/extension-text-align";
// import Image from '@tiptap/extension-image'
import {  useEditor, EditorContent } from '@tiptap/react'
import MenuBar from "./MenuBar";
const lowlight = createLowlight(common)

const Tiptap = ({setHtmlContent}) => {

    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ["heading", "paragraph"],
                defaultAlignment: "left",
            }),
            // Color.configure({ types: [TextStyle, ListItem.name] }),
            TextStyle,Document, Paragraph,Text,
            BulletList.configure({
                HTMLAttributes: {
                    class: 'list-disc'
                }
            }), ListItem,OrderedList.configure({
                HTMLAttributes: {
                    class: "list-decimal",
                    type: '1',
                }, ordered: true,
            }),Subscript,Superscript,
            Placeholder.configure({
                // Use a placeholder:
                placeholder: 'Write something …',

            }),Code.configure({
                HTMLAttributes: {
                    class: 'bg-secondary text-secondary-foreground',
                },
            }), CodeBlockLowlight.configure({
                lowlight,
            }),
        ],
    })
    if (!editor) {
        return null
    }

    const handleEditorChanges = () => {
        const html = editor?.getHTML();
        setHtmlContent(html) ;
        // const json = editor?.getJSON();
        // const text = editor?.getText();
        // console.log("Html ====>", html);
        // console.log("JSON ====>", json);
        // console.log("Text ====>", text);
    };

    if (!editor) {
        return null
    }

    return (
        <div>
            <div className="text-black border-2 border-white rounded-xl bg-background">

                <MenuBar editor={editor}/>
                <EditorContent className="border-t " editor={editor}/>
            </div>
            <button
                type="button"
                onClick={handleEditorChanges}
                className="w-auto p-2.5 text-center mx-auto bg-primary text-foreground border border-white rounded-md "
            >
                Save
            </button>

        </div>
    )
}

export default Tiptap