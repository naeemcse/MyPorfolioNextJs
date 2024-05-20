// @ts-nocheck

"use client";
import React, {useState} from 'react'
import Image from "next/image";
import { UploadButton,UploadDropzone } from "@/utils/uploadthing";

export default function Home() {
    const [imageURL,setImageURL]  = useState("") ;
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    alert("Upload Completed");
                    setImageURL(res[0].url);
                    onImageChange(imageURL, "image");

                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
            {
                imageURL.length ? (<Image src={imageURL} width={500} height={200} alt=""/>) : null
            }

        </main>
    );
}