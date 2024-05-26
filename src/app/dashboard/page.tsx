'use client'
import React from 'react';
// import {getServerSession} from "next-auth";
import { useSession,signOut,signIn} from "next-auth/react"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/shared/container/Container";
// import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const Page =  () => {

    // const data = await getServerSession(authOptions);
    const { data,status} = useSession()

    return (
        <Container>
            <div>
                <h1> Dash Board </h1>
                <main className="flex gap-5">

                    <Button> <Link className="no-underline" href="/blog/write">  Write a blog </Link> </Button>
                    <Button> <Link className="no-underline" href="/project/write"> Post a Project  </Link> </Button>

                </main>
                <p> Welcome to Chart.js! will be integreted </p>


            </div>
        </Container>
    );
};

export default Page;