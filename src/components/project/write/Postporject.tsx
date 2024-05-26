"use client"
import React, {useEffect, useState} from 'react';
import { FormEvent,ChangeEvent  } from 'react';
import Image from "next/image";
import { UploadButton,UploadDropzone } from "@/utils/uploadthing";
import Tiptap from "@/components/shared/editor/Tiptap";
import {SuccessToast} from "@/utils/Toaster";
import {useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

const Postproject = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        title: '',
        subtitle:'',
        image: '',
        body: '',
        technologies:'',
        client:'',
        github:'',
        live:'',
        video:'',
        category:''
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
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log(formData);
        const options = { method: "POST", body: JSON.stringify(formData) };
        //
        let res = await (await fetch(`/api/project/post`, options)).json();
        //
        if (res["status"] === "success") {
            SuccessToast("Request Success");
            // router.push('/')
        } else {
            ErrorToast("Invalid Request ! ");
        }
        // console.log(formData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Title"
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
                            // alert(`ERROR! ${error.message}`);
                            console.log(error);
                        }}
                    />
                    {
                        imageURL.length ? (<Image src={imageURL} width={500} height={200} alt=""/>) : null
                    }

                </section>
                <Textarea  type="text" name="subtitle" value={formData.subtitle} onChange={handleInputChange}
                       placeholder="Subitle"
                       className="w-full text-2xl text-center font-extrabold p-2 outline-none mb-4"/>
                <Tiptap setHtmlContent={setHtmlContent}/>
                
                {/*comma Separated Technology */}
                <Input type="text" name="technologies" value={formData.technologies} onChange={handleInputChange}
                       placeholder="Comma separated list of technologies"
                       className="w-full text-2xl mt-3 font-extrabold p-2 outline-none mb-4"/>

                <Input type="text" name="client" value={formData.client} onChange={handleInputChange} placeholder="link"
                       className="w-full border p-2 rounded-md my-4"/>
                <Input type="text" name="github" value={formData.github} onChange={handleInputChange} placeholder="github"
                       className="w-full border p-2 rounded-md my-4"/>

            <Input type="text" name="live" value={formData.live} onChange={handleInputChange} placeholder="live"
                   className="w-full border p-2 rounded-md my-4" />

                <Input type="text" name="video" value={formData.video} onChange={handleInputChange} placeholder="live"
                       className="w-full border p-2 rounded-md my-4" />
                <Input type="text" name="category" value={formData.category} onChange={handleInputChange} placeholder="Categories"
                       className="w-full border p-2 rounded-md my-4" />

                <div className="flex justify-end">
                    <Button type="submit"
                            className="px-4 py-2 rounded-md"> Post
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Postproject;

function ErrorToast(arg0: string) {
    throw new Error('Function not implemented.');
}
