import React from 'react';
import AllPost from "@/components/blog/allpost/AllPost";
import Container from "@/components/shared/container/Container"
import SearchBar from "@/components/project/search/SearchBar";
import ResultProject from "@/components/project/search/ResultProject";
const Page = (props) => {
    let keyword=props.searchParams['keyword'];
    return (
            <Container>
               <SearchBar word={keyword}/>
                {/*<AllProject/>*/}
                <ResultProject keyword={keyword}/>

            </Container>
    );
};

export default Page;