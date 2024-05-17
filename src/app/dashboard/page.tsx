'use client'
import React from 'react';
// import {getServerSession} from "next-auth";
import { useSession,signOut,signIn} from "next-auth/react"
// import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const Page =  () => {

    // const data = await getServerSession(authOptions);
    const { data,status} = useSession()
    const logoutHandeler =()=>{
        signOut({ callbackUrl: 'http://localhost:3000/' })
    }
    const logintHandeler =()=>{
        signIn( undefined,{ callbackUrl: 'http://localhost:3000/' })
    }

    return (
        <div>
            <h1> Dash Board </h1>
            <main> {JSON.stringify(data)} </main>
            {
               status==="authenticated" && (<button onClick={logoutHandeler}> Log Out</button>) }
            {
                status==="unauthenticated" &&
                (   <button onClick={logintHandeler}> Log In </button>)}

        </div>
    );
};

export default Page;