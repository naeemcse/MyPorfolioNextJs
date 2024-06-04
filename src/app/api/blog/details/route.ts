
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async(req:Request,res:NextResponse)=>{
    try{
        let {searchParams} = new URL(req.url) ;
     // let id = "";
     //   let id : string = (searchParams.get('id')) ;
      //  console.log(id)
        let id: string = searchParams.get('id') ?? '';
        // await connectToDatabase();
        const result = await prisma.post.findFirst({
            // include:{comments:true} ,
            where:{id:id},
        });
        return NextResponse.json({
            status: "success",
            message: "Blog post fetched successfully",
            data: result
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "details dekha jacce na",
            error: error
        });
    }
    finally{
        await prisma.$disconnect();

    }
}