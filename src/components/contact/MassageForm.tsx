// @ts-nocheck
'use client'
import React from 'react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {useState} from "react";
import {Button} from "@/components/ui/button";
// import {ErrorToast, SuccessToast} from "@/utils/Toaster";
import {useRouter} from "next/navigation";
import {ErrorToast, IsEmail, IsEmpty, SuccessToast} from "@/utils/FormHelper";

const MassageForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        if(IsEmpty(formData.name)) {
            ErrorToast("Name is required");
        }
        else if(IsEmail(formData.email) ){
            ErrorToast("Email is required");
        }
        else if(IsEmpty(formData.subject)) {
            ErrorToast("Subject is required");
        }
        else if(IsEmpty(formData.message)) {
            ErrorToast("Message is required");
        }
        else {
            const options = {method: "POST", body: JSON.stringify(formData)};
            //  console.log(mailres);
            let res = await (await fetch(`/api/message`, options)).json();
            if (res["status"] === "success") {
                SuccessToast("Request Success");
                let mailSend = await (await fetch(`/api/sendmail`, options)).json();
                alert("Message sent!");
                router.push('/')
            } else {
                ErrorToast("Invalid Request ! ");
            }
        }
    }
        return (
            <div className="container flex flex-col gap-[30px]">
                <div>
                    <h1> Let’s Chat <span className="text-primary"> !</span></h1>
                    <p className="text-muted">Feel free to contact us through Twitter or Facebook if you prefer!</p>
                </div>


                <div className="flex flex-col md:flex-row gap-[30px] ">

                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"/>

                    <Input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"/>
                </div>
                <Textarea
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"/>
                <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"/>
                <Button className="max-w-60 mx-auto" onClick={handleSubmit}>Send Message</Button>
            </div>
        );
    };

export default MassageForm;