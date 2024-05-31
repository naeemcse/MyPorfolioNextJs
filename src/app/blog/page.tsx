import React, {Suspense} from 'react';
// import AllPost from "@/components/blog/allpost/AllPost";
import Container from "@/components/shared/container/Container"
import SearchBar from "@/components/blog/allpost/search/SearchBar";
import BlogSkeleton from "@/components/shared/skeleton/BlogSkeleton";
import dynamic from 'next/dynamic'
const AllPost = dynamic(() => import('@/components/blog/allpost/AllPost'), {
    ssr: false,
    loading: () => <BlogSkeleton/> ,
});

const Page = () => {
    return (
        <div>
            <Container>
                <SearchBar/>
                <Suspense fallback={<p className="text-primary">Loading...</p>}>
                    <AllPost/>
                </Suspense>
            </Container>

        </div>
    );
};

export default Page;