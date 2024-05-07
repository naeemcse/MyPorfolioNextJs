// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async(req:Request,res)=>{
    try{
        const {name, email, password} = await req.json();
        if(!name || !email || !password){
            return NextResponse.json({
                message: "Please fill all fields"
            });
        }
        await connectToDatabase();
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        });
        return NextResponse.json({
            message: "User created successfully",
            data: user
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        });
    }
    finally{
        await prisma.$disconnect();

    }

}