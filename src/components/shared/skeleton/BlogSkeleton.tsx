import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const BlogSkeleton = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[150px] w-auto rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-auto"/>
                            <Skeleton className="h-4 w-w-auto"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[150px] w-auto rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-auto"/>
                            <Skeleton className="h-4 w-w-auto"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[150px] w-auto rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-auto"/>
                            <Skeleton className="h-4 w-w-auto"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[150px] w-auto rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-auto"/>
                            <Skeleton className="h-4 w-w-auto"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[150px] w-auto rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-auto"/>
                            <Skeleton className="h-4 w-w-auto"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[150px] w-auto rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-auto"/>
                            <Skeleton className="h-4 w-w-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSkeleton;