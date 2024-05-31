import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"
import BlogSkeleton from "@/components/shared/skeleton/BlogSkeleton";

const Page = () => {
    return (
        <div className="container">
            <BlogSkeleton/>
        </div>
    );
};

export default Page;