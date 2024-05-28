'use client'
import React from 'react';
// import {getServerSession} from "next-auth";
import { useSession,signOut,signIn} from "next-auth/react"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/shared/container/Container";
import MessageTable from "@/components/message/allmessage/MessageTable";
// import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const Page =  () => {

    // const data = await getServerSession(authOptions);
    const { data,status} = useSession()

    return (
        <Container>
            <div className="">
                <h1 className="text-center"> Admin Dashboard </h1>
                <main className="flex gap-5 justify-center">

                    <Button> <Link className="no-underline" href="/blog/write">  Write a blog </Link> </Button>
                    <Button> <Link className="no-underline" href="/project/write"> Post a Project  </Link> </Button>

                </main>
                {/*<p> Welcome to Chart.js! will be integreted </p>*/}


            </div>
            <MessageTable/>
        </Container>
    );
};

export default Page;