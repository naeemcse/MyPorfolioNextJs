import React from 'react';
import AllPost from "@/components/blog/allpost/AllPost";
import Container from "@/components/shared/container/Container"
import SearchBar from "@/components/blog/allpost/search/SearchBar";
const Page = () => {
    return (
        <div>
            <Container>
                <SearchBar/>
                <AllPost/>
            </Container>

        </div>
    );
};

export default Page;