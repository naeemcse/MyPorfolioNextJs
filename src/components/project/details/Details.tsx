"use client"
import React, {useEffect, useState} from 'react';
import BlogDetails from "@/components/blog/allpost/BlogDetails";
import Container from '@/components/shared/container/Container';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useSession} from "next-auth/react";
import Image from "next/image";
import Tags from "@/components/shared/tags/Tags";
import {EyeIcon} from "lucide-react";

const Details = ({id}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/project/details/?id=${id}`);
                if (response.ok) {
                    const result = await response.json();
                    console.log('Fetched data:', result); // Debugging line to log the API response
                    if (result && result.data) {
                        setPosts(result.data);
                    } else {
                        console.error('Data format is incorrect:', result);
                    }
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []);
    const { data,status} = useSession()

    return (
        <Container>
            <div className="flex justify-between">
                <h2>{posts.title}</h2>
                {
                    status==="authenticated" && ( <Link href={`/project/update?id=${id}`} > <Button> Update </Button></Link>)
                }
            </div>
            {
                posts.image ? (<Image className="w-full h-max-[200px] mx-auto " src={ posts.image} width={500} height={200} alt=""/>) : null
            }
            <h3> {posts.subtitle} </h3>
            <BlogDetails body={posts.body} />
            <Tags tagString={posts.technologies}/>

            <Tags tagString={posts.category}/>
                <div className="flex m-2">
                    <span className="w-1/2"> Reference :</span> <a className="no-underline" href={posts.link || ""}
                                                                   target="_blank"
                                                                   rel="noopener noreferrer">Link</a>
                </div>
                <div className="flex m-2">
                    <span className="w-1/2">  github :</span> <a className="no-underline" href={posts.github || ""}
                                                                 target="_blank"
                                                                 rel="noopener noreferrer">Link</a>
                </div>
                <div className="flex m-2">
                    <span className="w-1/2"> live :</span> <a className="no-underline" href={posts.live || ""}
                                                              target="_blank"
                                                              rel="noopener noreferrer">Link</a>
                </div>
                <div className="flex m-2">
                    { posts.video && (<> <span className="w-1/2"> live :</span> <a className="no-underline" href={posts.video || ""}
                                                              target="_blank"
                                                              rel="noopener noreferrer">Demo </a> </> )}
                </div>
                <div>
                    <span className="w-1/2"> <EyeIcon className="inline text-primary"/> {posts.totalviews} </span>
                </div>

        </Container>
    );
};

export default Details;