import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const GET = async(req:Request,res:NextResponse)=>{
    try{
        await connectToDatabase();
        const result = await prisma.post.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json({
            status: "success",
            message: "Blog post fetched successfully",
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