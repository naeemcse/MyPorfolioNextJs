import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"
import BlogSkeleton from "@/components/shared/skeleton/BlogSkeleton";
import RightSidebar from "@/components/SideBar/rightSidebar/RightSidebar";

const Page = () => {
    return (
        <div className="container">
       <RightSidebar/>
        </div>
    );
};

export default Page;