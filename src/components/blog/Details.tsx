"use client"
import React, {useEffect, useState} from 'react';
import BlogDetails from "@/components/blog/allpost/BlogDetails";
import Container from '@/components/shared/container/Container';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useSession} from "next-auth/react";

const Details = ({id}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/blog/details/?id=${id}`);
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
                        status==="authenticated" && ( <Link href={`/blog/update?id=${id}`} > <Button> Update </Button></Link>)
                    }
            </div>
                <BlogDetails body={posts.body} />
                <div className="flex m-2">
                    <span> Reference :</span> <a className="no-underline" href={posts.link || ""} target="_blank"
                                                 rel="noopener noreferrer">Link</a>
                </div>

            </Container>
    );
};

export default Details;