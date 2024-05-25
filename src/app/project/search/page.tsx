import React from 'react';
import AllPost from "@/components/blog/allpost/AllPost";
import Container from "@/components/shared/container/Container"
import SearchBar from "@/components/blog/allpost/search/SearchBar";
import ResultBlogs from "@/components/blog/allpost/search/ResultBlogs";
const Page = (props) => {
    let keyword=props.searchParams['keyword'];
    return (
        <div>
            <Container>
                <SearchBar/>
                {/*<AllProject/>*/}
                <ResultBlogs keyword={keyword}/>
            </Container>

        </div>
    );
};

export default Page;