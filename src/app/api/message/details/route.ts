// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async(req:Request,res)=>{
    try{
        let {searchParams} = new URL(req.url) ;
        let id = (searchParams.get('id')) ;
        await connectToDatabase();
        const result = await prisma.massage.findFirst({
            where:{id:id}
        });
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

export const DELETE = async(req:Request,res)=>{
    try{
        let {searchParams} = new URL(req.url) ;
        let id = (searchParams.get('id')) ;
        await connectToDatabase();
        const result = await prisma.massage.delete({
            where:{id:id}
        });
        return NextResponse.json({
            status: "success",
            message: "Massage delete successfully",
            data: result
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Failed to delete the massage",
            error: error
        });
    }
    finally{
        await prisma.$disconnect();
    }
}