// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async(req:Request,res)=>{
    try{
        let {searchParams} = new URL(req.url) ;
        let id = searchParams.get('id') ;
        const reqBody = await req.json();
        await connectToDatabase();
        const result = await prisma.project.update({
            where: {
            id: id
            },
            data: reqBody
        });
        return NextResponse.json({
            status: "success",
            message: "Project updated successfully",
            data: result
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong with the Project update",
            error: error
        });
    }
    finally{
        await prisma.$disconnect();

    }

}