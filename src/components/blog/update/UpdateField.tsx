//@ts-nocheck
"use client"
import React, {useEffect, useState} from 'react';
import { FormEvent,ChangeEvent  } from 'react';
import Image from "next/image";
import { UploadButton,UploadDropzone } from "@/utils/uploadthing";
import Tiptap from "@/components/shared/editor/Tiptap";
import {SuccessToast} from "@/utils/Toaster";

const WrittingField = ({post=""}) => {
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        body: "",
        link: "",
    });
    const [imageURL,setImageURL]  = useState("") ;
    const [htmlContent,setHtmlContent] = useState("")
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    useEffect(() => {
        setFormData({
            ...formData,
            ['body']: htmlContent
        });

    }, [htmlContent]);
    useEffect(() => {
        setFormData({
            ...formData,
            title: post.title,
            image: post.image,
            body: post.body,
            link: post.link,
        });
        setImageURL(post.image);
    }, []);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        const options = { method: "POST", body: JSON.stringify(formData) };

        let res = await (await fetch(`/api/blog/update?id=${post.id}`, options)).json();

        if (res["status"] === "success") {
            SuccessToast("Your Blog is Updated");

            //   router.push("/user/verifyOTP");
        } else {
            ErrorToast("Update failed");
        }
        // console.log(formData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange}
                       placeholder="Title"
                       className="w-full text-2xl text-center font-extrabold p-2 outline-none mb-4"/>
                <section className="flex flex-col items-center justify-between p-24">
                    {/*<Image src={imageURL} width={500} height={200} alt=""/>*/}
                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            // Do something with the response
                            // console.log("Files: ", res);
                            // alert("Upload Completed");
                            setFormData({
                                ...formData,
                                ["image"]: res[0].url
                            });
                            setImageURL(res[0].url);
                        }}
                        onUploadError={(error: Error) => {
                            // Do something with the error.
                            // alert(`ERROR! ${error.message}`);
                            console.log(error);
                        }}
                    />
                    {
                        imageURL.length ? (<Image src={imageURL} width={500} height={200} alt=""/>) : null
                    }

                </section>

                <Tiptap setHtmlContent={setHtmlContent} content={post.body} />

                <input type="body" name="link" value={formData.link} onChange={handleInputChange} placeholder="link"
                       className="w-full border p-2 rounded-md my-4"/>

                <div className="flex justify-end">
                    <button type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md"> Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default WrittingField;

function ErrorToast(arg0: string) {
    throw new Error('Function not implemented.');
}
