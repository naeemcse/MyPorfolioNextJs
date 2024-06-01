import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async(req:Request,res:NextResponse)=>{
    try{
        let {searchParams} = new URL(req.url) ;
        // @ts-ignore
        let  id :string = (searchParams.get('id')) ;
        // console.log(id)
        await connectToDatabase();
        const result = await prisma.project.findFirst({
            where:{id:id},
        });
        return NextResponse.json({
            status: "success",
            message: "Project post fetched successfully",
            data: result
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong with the project post"
        });
    }
    finally{
        await prisma.$disconnect();

    }
}