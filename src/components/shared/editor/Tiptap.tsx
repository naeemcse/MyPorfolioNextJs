'use client'
// @ts-ignore

import React,{useeffect} from 'react'
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
import {Color} from "@tiptap/extension-color";

// import Image from '@tiptap/extension-image'

import {  useEditor, EditorContent } from '@tiptap/react'
import MenuBar from "./MenuBar";
const lowlight = createLowlight(common)

const Tiptap = ({setHtmlContent}) => {

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                // make them false for not duplicating as i installed already
                bulletList: false,
                listItem: false,
                orderedList: false,
                codeBlock: false,
                paragraph:false,
                text:false,
                document:false,
                code:false
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
                defaultAlignment: "left",
            }),
            Color,
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
        onUpdate: ({ editor }) => {
            // Update HTML content on every change
            setHtmlContent(editor.getHTML());
        },
    })
    if (!editor) {
        return null
    }
    if (!editor) {
        return null
    }
    return (
        <div>
            <div className="text-black border-2 border-white rounded-xl bg-background">
                <MenuBar editor={editor}/>
                <EditorContent className="border-t " editor={editor}/>
            </div>

        </div>
    )
}

export default Tiptap