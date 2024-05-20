"use client"
import React, {useState} from 'react';
import { FormEvent,ChangeEvent  } from 'react';
import  ImageUploader from "./ImageUploader"
import Image from "next/image";
import { UploadButton,UploadDropzone } from "@/utils/uploadthing";
import Tiptap from "@/components/shared/editor/Tiptap";


const WrittingField = () => {
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        body: '',
        link: '',
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
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div>
            <form>

                <input type="text" name="title" value={formData.title} onChange={handleInputChange}
                       placeholder="Title"
                       className="w-full text-2xl text-center font-extrabold p-2 outline-none mb-4"/>
                <section className="flex flex-col items-center justify-between p-24">
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
                            alert(`ERROR! ${error.message}`);
                        }}
                    />
                    {
                        imageURL.length ? (<Image src={imageURL} width={500} height={200} alt=""/>) : null
                    }


                </section>

                <Tiptap setHtmlContent={setHtmlContent}/>

                <input type="text" name="body" value={formData.body} onChange={handleInputChange} placeholder="body"
                       className="w-full border p-2 rounded-md mb-4"/>

                <input type="body" name="link" value={formData.link} onChange={handleInputChange} placeholder="link"
                       className="w-full border p-2 rounded-md mb-4"/>

                <div className="flex justify-end">
                    <button type="button" onClick={handleSubmit}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md"> Submit
                    </button>
                </div>
            </form>

            <div>
                data : {formData.image}
            </div>

        </div>
    );
};

export default WrittingField;