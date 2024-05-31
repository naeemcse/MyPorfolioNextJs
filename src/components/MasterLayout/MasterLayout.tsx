import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/SideBar/SideBar";
import RightSidebar from "@/components/MasterLayout/RightSidebar";
import MassageForm from "@/components/contact/MassageForm";
import Container from "@/components/shared/container/Container";

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        {/*<RightSidebar/>*/}
      <header className='mt-0'>
        <div className="mx-auto mt-10 px-8 w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] bg-card rounded-lg">
         <Navbar />
         </div>
      </header>
      <div className="grid grid-cols-12 mx-auto w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
        <div className="col-span-12 lg:col-span-3 bg-card border-2 rounded-lg mt-[30px] h-fit">
          <SideBar/>
            {/*<Container> <div className="min-h-full">abc </div>  </Container>*/}
        </div>
          <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
              <main>{children}</main>

              <footer className="mx-auto w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
                  <MassageForm/>
              </footer>
          </div>
      </div>

    </>
  );
};

export default MasterLayout;
