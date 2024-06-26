'use client'
import React, {useEffect, useState} from 'react';
import BlogBox from "@/components/blog/allpost/BlogBox";
import Projectdiv from "@/components/project/projectdiv/Projectdiv";

const ResultProject = ({keyword}:{keyword:String}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/project/search?keyword=${keyword}`);
                if (response.ok) {
                    const result = await response.json();
                    //  console.log('Fetched data:', result); // Debugging line to log the API response
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
            {/*<BlogBox blogs={posts}/>*/}
            <Projectdiv blogs={posts} />
        </>
    );
};

export default ResultProject;