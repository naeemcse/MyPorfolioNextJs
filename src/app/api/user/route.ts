// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// User Create when post method will be called with name email,password
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

// User will find wheb GET method is called

export const GET = async(req:Request,res)=>{
    try{

        await connectToDatabase();
        const user = await prisma.user.findMany();

        return NextResponse.json({
            data: user,
            status: "success"
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Server Error"
        });
    }
    finally{
        await prisma.$disconnect();

    }

}