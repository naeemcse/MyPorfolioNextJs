// @ts-nocheck
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const GET = async(req:Request,res:NextResponse)=>{
    try{
        let {searchParams} = new URL(req.url) ;
        let keyword = searchParams.get('keyword') ;
        await connectToDatabase();
        const result = await prisma.project.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: keyword,
                            mode: 'insensitive',
                        }
                    },
                    {
                        body: {
                            contains: keyword,
                            mode: 'insensitive',
                        }
                    }, {
                        subtitle: {
                            contains: keyword,
                            mode: 'insensitive',
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
            message: "Project post fetched successfully",
            data: result
        });

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong with the Project post"
        });
    }
    finally{
        await prisma.$disconnect();

    }
}