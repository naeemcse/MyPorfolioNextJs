// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async(req:Request,res)=>{
    try{
        const reqBody = await req.json();
        await connectToDatabase();
        const result = await prisma.post.create({
            data:reqBody
        });
        return NextResponse.json({
            status: "success",
            message: "Blog post Done  successfully",
            data: result
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong with the blog post"
        });
    }
    finally{
        await prisma.$disconnect();

    }

}
export const DELETE = async(req:Request,res)=>{ 
    try{
        let {searchParams} = new URL(req.url) ;
        let id = searchParams.get('id') ;
      
        await connectToDatabase();
        const result = await prisma.post.delete({
            where: {
                id: id
            }
        });
        return NextResponse.json({
            status: "success",
            message: "Blog post deleted successfully",
        });
    }
    catch(error){
        console.log(error);
                return NextResponse.json({
            message: "Something went wrong with the blog post delete"
        });
    }
    finally{
        await prisma.$disconnect();

    }
}
