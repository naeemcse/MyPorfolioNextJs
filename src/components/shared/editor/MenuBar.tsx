//@ts-ignore
import {
    FaBold,
    FaItalic,
    FaStrikethrough,
    FaArrowRotateLeft,
    FaTextSlash,
    FaListUl,
    FaListOl,
    FaQuoteLeft,
    FaWindowMinimize,
    FaTurnDown,
    FaBackward,
    FaForward,
    FaRegImage,
    FaAlignLeft,
    FaAlignRight,
    FaAlignCenter,
    FaAlignJustify,
    FaCode
} from "react-icons/fa6";
import {
    LuHeading1,
    LuHeading2,
    LuHeading3,
    LuHeading4,
    LuHeading5,
    LuHeading6,
    LuSubscript,
    LuSuperscript
} from "react-icons/lu";
import EditorButtons from "./EditorButtons";
import React, { useCallback } from "react";

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }
    const addImage = () => {
        const url = window.prompt("URL");

        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };
    if (!editor) {
        return null;
    }

    return (
        <>
            <div className="m-2  flex flex-wrap justify-center text-center gap-2">

                {/*    For color */}
                <input
                    type="color"
                    onInput={event => editor.chain().focus().setColor(event.target.value).run()}
                    value={editor.getAttributes('textStyle').color}
                    data-testid="setColor"
                    className="cursor-pointer"
                />
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#958DF1'}) ? 'is-active bg-[#958DF1] text-white' : 'text-[#958DF1] '} `}
                    data-testid="setPurple"
                >
                    purple
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setColor('#F98181').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#F98181'}) ? 'is-active bg-[#F98181] text-white' : 'text-[#F98181] '} `}
                    data-testid="setRed"
                >
                    red
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setColor('#FBBC88').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#FBBC88'}) ? 'is-active bg-[#FBBC88] text-white' : 'text-[#FBBC88] '} `}
                    data-testid="setOrange"
                >
                    orange
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setColor('#FAF594').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#FAF594'}) ? 'is-active bg-[#FAF594] text-white' : 'text-[#FAF594] '} `}
                    data-testid="setYellow"
                >
                    yellow
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setColor('#70CFF8').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#70CFF8'}) ? 'is-active bg-[#70CFF8] text-white' : 'text-[#70CFF8] '} `}
                    data-testid="setBlue"
                >
                    blue
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setColor('#94FADB').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#94FADB'}) ? 'is-active bg-[#94FADB] text-white' : 'text-[#94FADB] '} `}
                    data-testid="setTeal"
                >
                    teal
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setColor('#B9F18D').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#B9F18D'}) ? 'is-active bg-[#B9F18D] text-white' : 'text-[#B9F18D] '} `}
                    data-testid="setGreen"
                >
                    green
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().unsetColor().run()}
                    data-testid="unsetColor"
                    className="text-secondary-foreground"
                >
                    Remove Color
                </button>
            </div>
            <div className="flex justify-center flex-wrap py-4 px-2 bg-gray-600 rounded-t-lg gap-2">
                <EditorButtons
                    title="Bold It"
                    editor={editor}
                    handleClick={() => editor.chain().focus().toggleBold().run()}
                    toggleName="bold"
                >
                    <FaBold className={`${editor.isActive("bold") && "text-amber-500"}`}/>
                </EditorButtons>

                <EditorButtons
                    title="Italic"
                    editor={editor}
                    handleClick={() => editor.chain().focus().toggleItalic().run()}
                    toggleName="italic"
                >
                    <FaItalic
                        className={`${editor.isActive("italic") && "text-amber-500"}`}
                    />
                </EditorButtons>

                <EditorButtons
                    title="OverLine"
                    editor={editor}
                    handleClick={() => editor.chain().focus().toggleStrike().run()}
                    toggleName="strike"
                >
                    <FaStrikethrough
                        className={`${editor.isActive("strike") && "text-amber-500"}`}
                    />
                </EditorButtons>
                <EditorButtons
                    title="Code"
                    editor={editor}
                    handleClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    toggleName="code"
                >
                    <FaCode
                        className={`${editor.isActive("strike") && "text-amber-500"}`}
                    />
                </EditorButtons>

                <button
                    title="Reset Text Changes"
                    type="button"
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                    className="py-2.5 px-[15px] text-white border border-white rounded-lg"
                >
                    <FaArrowRotateLeft/>
                </button>

                <EditorButtons
                    title="Align Right"
                    editor={editor}
                    handleClick={() => editor.chain().focus().setTextAlign("right").run()}
                    toggleName={{textAlign: "right"}}
                >
                    <FaAlignRight
                        className={`${
                            editor.isActive({textAlign: "right"}) && "text-amber-500"
                        }`}
                    />
                </EditorButtons>

                <EditorButtons
                    title="Align Center"
                    editor={editor}
                    handleClick={() => editor.chain().focus().setTextAlign("center").run()}
                    toggleName={{textAlign: "center"}}
                >
                    <FaAlignCenter
                        className={`${
                            editor.isActive({textAlign: "center"}) && "text-amber-500"
                        }`}
                    />
                </EditorButtons>

                <EditorButtons
                    title="Align Left"
                    editor={editor}
                    handleClick={() => editor.chain().focus().setTextAlign("left").run()}
                    toggleName={{textAlign: "left"}}
                >
                    <FaAlignLeft
                        className={`${
                            editor.isActive({textAlign: "left"}) && "text-amber-500"
                        }`}
                    />
                </EditorButtons>

                <EditorButtons
                    title="Justify"
                    editor={editor}
                    handleClick={() => editor.chain().focus().setTextAlign("justify").run()}
                    toggleName={{textAlign: "justify"}}
                >
                    <FaAlignJustify
                        className={`${
                            editor.isActive({textAlign: "justify"}) && "text-amber-500"
                        }`}
                    />
                </EditorButtons>

                <button
                    title="Reset Tag Changes"
                    type="button"
                    onClick={() => editor.chain().focus().clearNodes().run()}
                    className="py-2.5 px-[15px] text-white border border-white rounded-lg"
                >
                    <FaTextSlash/>
                </button>

                <EditorButtons
                    title="Heading H1"
                    className="px-[12px] py-2"
                    editor={editor}
                    handleClick={() =>
                        editor.chain().focus().toggleHeading({level: 1}).run()
                    }
                    toggleName="heading"
                    level={1}
                >
                    <LuHeading1
                        className={`${
                            editor.isActive("heading", {level: 1})
                                ? "text-amber-500 border-red-500"
                                : "text-white border-white"
                        }`}
                        size={22}
                    />
                </EditorButtons>

                <EditorButtons
                    title="Heading H2"
                    className="px-[12px] py-2"
                    editor={editor}
                    handleClick={() =>
                        editor.chain().focus().toggleHeading({level: 2}).run()
                    }
                    toggleName="heading"
                    level={2}
                >
                    <LuHeading2
                        className={`${
                            editor.isActive("heading", {level: 2})
                                ? "text-amber-500 border-red-500"
                                : "text-white border-white"
                        }`}
                        size={22}
                    />
                </EditorButtons>

                <EditorButtons
                    title="Heading H3"
                    className="px-[12px] py-2"
                    editor={editor}
                    handleClick={() =>
                        editor.chain().focus().toggleHeading({level: 3}).run()
                    }
                    toggleName="heading"
                    level={3}
                >
                    <LuHeading3
                        className={`${
                            editor.isActive("heading", {level: 3})
                                ? "text-amber-500 border-red-500"
                                : "text-white border-white"
                        }`}
                        size={22}
                    />
                </EditorButtons>

                <EditorButtons
                    title="Heading H4"
                    className="px-[12px] py-2"
                    editor={editor}
                    handleClick={() =>
                        editor.chain().focus().toggleHeading({level: 4}).run()
                    }
                    toggleName="heading"
                    level={4}
                >
                    <LuHeading4
                        className={`${
                            editor.isActive("heading", {level: 4})
                                ? "text-amber-500 border-red-500"
                                : "text-white border-white"
                        }`}
                        size={22}
                    />
                </EditorButtons>

                <EditorButtons
                    title="Heading H5"
                    className="px-[12px] py-2"
                    editor={editor}
                    handleClick={() =>
                        editor.chain().focus().toggleHeading({level: 5}).run()
                    }
                    toggleName="heading"
                    level={5}
                >
                    <LuHeading5
                        className={`${
                            editor.isActive("heading", {level: 5})
                                ? "text-amber-500 border-red-500"
                                : "text-white border-white"
                        }`}
                        size={22}
                    />
                </EditorButtons>

                <EditorButtons
                    title="Heading H6"
                    className="px-[12px] py-2"
                    editor={editor}
                    handleClick={() =>
                        editor.chain().focus().toggleHeading({level: 6}).run()
                    }
                    toggleName="heading"
                    level={6}
                >
                    <LuHeading6
                        className={`${
                            editor.isActive("heading", {level: 6})
                                ? "text-amber-500 border-red-500"
                                : "text-white border-white"
                        }`}
                        size={22}
                    />
                </EditorButtons>

                <EditorButtons
                    title="Bullet List"
                    editor={editor}
                    handleClick={() => editor.chain().focus().toggleBulletList().run()}
                    toggleName="bulletList"
                >
                    <FaListUl
                        className={`${editor.isActive("bulletList") && "text-amber-500"}`}
                    />
                </EditorButtons>

                <EditorButtons
                    title="Ordered List"
                    editor={editor}
                    handleClick={() => editor.chain().focus().toggleOrderedList().run()}
                    toggleName="orderedList"
                >
                    <FaListOl
                        className={`${editor.isActive("orderedList") && "text-amber-500"}`}
                    />
                </EditorButtons>

                {/* <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock")
          ? "is-active"
          : "" + `text-white border border-white rounded-xl px-2 py-1`
        }
        >
        code block
      </button> */}

                <EditorButtons
                    title="Blockquote"
                    editor={editor}
                    handleClick={() => editor.chain().focus().toggleBlockquote().run()}
                    toggleName="blockquote"
                >
                    <FaQuoteLeft
                        className={`${editor.isActive("blockquote") && "text-amber-500"}`}
                    />
                </EditorButtons>

                <button
                    title="Horizontal Rule"
                    type="button"
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    className="py-2.5 px-[15px] text-white border border-white rounded-lg"
                >
                    <FaWindowMinimize/>
                </button>

                <button
                    title="Hard Break"
                    type="button"
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                    className="py-2.5 px-[15px] text-white border border-white rounded-lg"
                >
                    <FaTurnDown/>
                </button>

                {/*<button*/}
                {/*    title="Add Image"*/}
                {/*    type="button"*/}
                {/*    onClick={addImage}*/}
                {/*    className="py-2.5 px-[15px] text-white border border-white rounded-lg"*/}
                {/*>*/}
                {/*    <FaRegImage />*/}
                {/*</button>*/}

                <button
                    title="Undo"
                    type="button"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                    className="py-2.5 px-[15px] text-white border border-white rounded-lg"
                >
                    <FaForward/>
                </button>

                <button
                    title="Redo"
                    type="button"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                    className="py-2.5 px-[15px] text-white border border-white rounded-lg cursor-pointer"
                >
                    <FaBackward/>
                </button>

                {/* For SuperScript and SubScript */}

                <button
                    type="button"
                    title="Subscript"
                    onClick={() => editor.chain().focus().toggleSubscript().run()}
                    className={`py-2.5 px-[15px] border border-white rounded-lg cursor-pointer ${editor.isActive('subscript') ? 'is-active text-amber-500' : 'text-white'} `}
                >
                    <LuSubscript/>

                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleSuperscript().run()}
                    className={`py-2.5 px-[15px]  border border-white rounded-lg cursor-pointer ${editor.isActive('superscript') ? 'is-active text-amber-500' : 'text-white'} `}

                >
                    <LuSuperscript/>

                </button>

                {/* <EditorButtons
        editor={editor}
        handleClick={() => editor.chain().focus().setColor("#958DF1").run()}
        toggleName="textStyle"
      >
        <Fa6
          className={
            editor.isActive("textStyle", { color: "#958DF1" })
              ? "is-active"
              : "" + `text-white border border-white rounded-xl px-2 py-1`
          }
        />
      </EditorButtons> */}

                {/* <button
        type="button"
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        disabled={!editor.can().chain().focus().setColor("#000").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" })
            ? "is-active"
            : "" + `text-white border border-white rounded-xl px-2 py-1`
        }
      >
        Purple
      </button> */}
            </div>
        </>);
};

export default MenuBar;
