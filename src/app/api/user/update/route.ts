// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async(req:Request,res)=>{
    try{
        const reqBody = await req.json();
        if(!name || !email || !password){
            return NextResponse.json({
                message: "Please fill all fields"
            });
        }
        await connectToDatabase();
        const user = await prisma.user.update({
            data:reqBody
        });
        return NextResponse.json({
            message: "User updated successfully",
            data: user
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Faid to update user"
        });
    }
    finally{
        await prisma.$disconnect();

    }

}