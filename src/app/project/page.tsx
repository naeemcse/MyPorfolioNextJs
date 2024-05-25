import React from 'react';
import Container from "@/components/shared/container/Container"
import SearchBar from "@/components/blog/allpost/search/SearchBar";
import AllProject from "@/components/project/allproject/AllProject";
const Page = () => {
    return (
        <div>
            <Container>
                <SearchBar/>
               <AllProject/>
            </Container>

        </div>
    );
};

export default Page;