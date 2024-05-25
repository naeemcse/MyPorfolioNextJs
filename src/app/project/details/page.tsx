import React from 'react';
import Details from "@/components/project/details/Details";

const Page = (props) => {
    let id=props.searchParams['id'];
    return (
        <div>
            <Details id={id} />
        </div>
    );
};

export default Page;