import IntroCard from "@/components/home/IntroCard";
// import MainGrid from "@/components/home/MainGrid";
import dynamic from 'next/dynamic'
import BlogSkeleton from "@/components/shared/skeleton/BlogSkeleton";
import React, {Suspense} from "react";
const MainGrid = dynamic(() => import('@/components/home/MainGrid'), {
    ssr: false,
    loading: () => <p className="text-primary">Loading Project...</p>,
});
export default function Home() {

    return (
    <>
   <IntroCard/>
        <Suspense fallback={<p className="text-primary">Loading...</p>}>

   <MainGrid/>
        </Suspense>
    </>
  );
}
