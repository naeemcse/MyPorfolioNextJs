//@ts-nocheck
// @ts-ignore
import NextAuth from "next-auth"
import { connectToDatabase } from "@/helper/server-helper";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
const prisma = new PrismaClient()

export const authOptions:NextAuthOptions ={
 providers: [
     CredentialsProvider({
         name: "Email and password",
         credentials: {
             email: {label:"Email",placeholder:"Email address"},
             password: {label:"Password",placeholder:"Password"}
         },
         async authorize(credentials){
         if(!credentials || !credentials.email || !credentials.password){
             return null ;
           }
             try{
                 await connectToDatabase();
                 const user = await prisma.user.findFirst({
                     where:{email:credentials.email}
                 });
                 if(user?.password === credentials.password){
                     return  user;
                 }
             }catch(error){
                 console.log(error);
                 return NextResponse.json({
                     message: "Server Error"
                 });
             }
             finally{
                 await prisma.$disconnect();
             }
         return null;
         }
         })
     ],
    secret :process.env.NEXT_AUTH_SECRET,

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }