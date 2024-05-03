import Image from "next/image";
import React from "react";

const MainGrid = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 md:col-span-5 ">
          <div className="container">
            <Image
              src="/logo.png"
              width={200}
              height={150}
              alt="logo"
              title="Naeem"
            />
            <p className="text-muted"> Want To Know More </p>
            <a
              href="/about"
              className="no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="uppercase text-secondary-foreground">
                    About Me
              </h1>
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
            <div className="container">
               <div className="flex justify-center gap-5">
                <div className="overflow-hidden rounded-lg">
                    <img className="photo w-auto h-[100px]" src="/asset/images/web_app_cover.png" alt="" />

                </div>
                <div className="overflow-hidden rounded-lg">
                    <img className="photo w-auto h-[100px]" src="/asset/images/web_app_cover2.png" alt="" />

                </div>

               </div>
               <div className="mt-[30px]">
                <p className="text-sm text-muted"> Show Case View </p>
                <a
              href="/project"
              className="no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="uppercase text-secondary-foreground">
                    Projcect
              </h1>
            </a>
               </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default MainGrid;
