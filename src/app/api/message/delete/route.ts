// @ts-nocheck
import {NextResponse} from "next/server";
import {connectToDatabase} from "@/helper/server-helper";

export const DELETE = async(req:Request,res)=>{
    try{
        let {searchParams} = new URL(req.url) ;
        let id = (searchParams.get('id')) ;
        if (!id) {
            return NextResponse.json({
                status: "error",
                message: "ID is required"
            }, { status: 400 });
        }
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