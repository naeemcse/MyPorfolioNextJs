'use client'
import React from 'react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {useState} from "react";
import {Button} from "@/components/ui/button";


const MassageForm = () => {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        subject:"",
        massage:""
    })
const handleInputChange = (e)=>{
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div className="container flex flex-col gap-[30px]">
            <div>
                <h1> Let’s Chat  <span className="text-primary"> !</span></h1>
                <p className="text-muted">Feel free to contact us through Twitter or Facebook if you prefer!</p>
            </div>


            <div className="flex flex-col md:flex-row gap-[30px] ">

                <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name" />

                <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email" />

        </div>
            <Textarea
                name="massage"
                value={formData.massage}
                onChange={handleInputChange}
                placeholder="Massage" />
            <Button className="max-w-60 mx-auto" onClick={handleSubmit}>Submit</Button>
        </div>
    );
};

export default MassageForm;