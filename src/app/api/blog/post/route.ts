// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async(req:Request,res)=>{
    try{
        const reqBody = await req.json();
        await connectToDatabase();
        const user = await prisma.post.create({
            data:reqBody
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