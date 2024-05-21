'use client'
import React, {useEffect, useState} from 'react';
import BlogDetails from "@/components/blog/allpost/BlogDetails";

const AllPost = () => {
    const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/blog');
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

    return (
        <>
            {
                posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        {/*{parse(post.body)}  */}
                        <BlogDetails body={post.body} />
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )
            }


        </>
    );
};

export default AllPost;