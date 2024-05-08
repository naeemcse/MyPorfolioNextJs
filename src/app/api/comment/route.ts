// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async(req:Request,res)=>{
    try{
        let {searchParams} = new URL(req.url) ;
        let postId = searchParams.get('postId') ;
        const reqBody = await req.json();
        reqBody.postId = postId;
        await connectToDatabase();
        const result = await prisma.comment.create({
          data: reqBody 
        });
        return NextResponse.json({
            status: "success",
            message: "Comment is done",
            data: result
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Failed to comment",
            error: error
        });
    }
    finally{
        await prisma.$disconnect();

    }

}