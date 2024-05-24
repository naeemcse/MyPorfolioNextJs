import React from 'react';
import Details from "@/components/blog/Details";

const Page = (props) => {
    let id=props.searchParams['id'];
    return (
        <div>
            <Details id={id}/>
        </div>
    );
};

export default Page;