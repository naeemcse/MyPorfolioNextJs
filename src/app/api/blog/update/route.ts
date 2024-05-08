// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async(req:Request,res)=>{
    try{
        const reqBody = await req.json();
        await connectToDatabase();
        const result = await prisma.post.update({
            where: {
            id: reqBody.id
            },
            data:
            {
                title: reqBody.title,
                image: reqBody.image,
                body: reqBody.body,
                link: reqBody.link
                }
        });
        return NextResponse.json({
            status: "success",
            message: "Blog post Update  successfully",
            data: result
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong with the blog post update",
            error: error
        });
    }
    finally{
        await prisma.$disconnect();

    }

}