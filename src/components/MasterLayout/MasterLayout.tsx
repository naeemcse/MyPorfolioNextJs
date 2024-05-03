import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/SideBar/SideBar";

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <div className="mx-auto mt-10 px-8 w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] bg-card rounded-lg"> 
         <Navbar /> 
         </div>
      </header>
      <div className="grid grid-cols-12 mx-auto w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
        <div className="col-span-12 lg:col-span-3 bg-card border-2 rounded-lg mt-[30px] ">
          <SideBar/>
        </div>
        <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
        <main>{children}</main>
        </div>

      </div>
   
      
      
    </>
  );
};

export default MasterLayout;
