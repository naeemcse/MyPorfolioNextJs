// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import {toLowerCase} from "effect/String";

const prisma = new PrismaClient()
export const GET = async(req:Request,res:NextResponse)=>{
    try{
        let {searchParams} = new URL(req.url) ;
        let keyword = toLowerCase (searchParams.get('keyword') );
        await connectToDatabase();
        console.log(keyword)
        const result = await prisma.post.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: keyword,
                            mode: 'insensitive', // Case-insensitive matching
                        }
                    },
                    {
                        body: {
                            contains: keyword,
                            mode: 'insensitive', // Case-insensitive matching
                        }
                    }
                ]
            },
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