// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async(req:Request,res)=>{
    try{
        const reqBody = await req.json();
        await connectToDatabase();
        const result = await prisma.massage.create({
          data: reqBody 
        });
        return NextResponse.json({
            status: "success",
            message: "Massage is sent successfully",
            data: result
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Failed to send the massage",
            error: error
        });
    }
    finally{
        await prisma.$disconnect();

    }
}
export const GET = async(req:Request,res)=>{
    try{
        await connectToDatabase();
        const result = await prisma.massage.findMany({
     orderBy:[
         {
             createdAt: "desc"
         }
     ]  });
        return NextResponse.json({
            status: "success",
            message: "Massage fetched successfully",
            data: result
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch the massage",
            error: error
        });
    }
    finally{
        await prisma.$disconnect();

    }

}