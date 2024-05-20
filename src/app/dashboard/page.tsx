'use client'
import React from 'react';
// import {getServerSession} from "next-auth";
import { useSession,signOut,signIn} from "next-auth/react"
import {Button} from "@/components/ui/button";
import Link from "next/link";
// import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const Page =  () => {

    // const data = await getServerSession(authOptions);
    const { data,status} = useSession()

    return (
        <div>
            <h1> Dash Board </h1>
            <main>
               <Button> <Link href=""> Post a Project </Link> </Button>
                <Button> <Link href=""> Write a blog  </Link> </Button>



            </main>

        </div>
    );
};

export default Page;