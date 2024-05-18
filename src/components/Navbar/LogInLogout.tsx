'use client'
import React from 'react';
import {signIn, signOut, useSession} from "next-auth/react";

const LogInLogout = () => {
    const { data,status} = useSession()
    const logoutHandeler =()=>{
        signOut({ callbackUrl: 'http://localhost:3000/' })
    }
    const logintHandeler =()=>{
        signIn( undefined,{ callbackUrl: 'http://localhost:3000/dashboard' })
    }

    return (
        <>
            {
                status==="authenticated" && (<button onClick={logoutHandeler}> Log Out</button>) }
            {
                status==="unauthenticated" &&
                (   <button onClick={logintHandeler}> Admin </button>)}
            
        </>
    );
};

export default LogInLogout;