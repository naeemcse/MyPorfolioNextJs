import Image from "next/image";
import React from "react";

const MainGrid = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 md:col-span-5 ">
          <div className="container text-center">
            <Image
                className="mx-auto"
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
              rel="noopener noreferrer"
            >
              <h1 className="uppercase text-secondary-foreground">
                    About Me
              </h1>
            </a>
          </div>
            <div className="container text-center">
                <div className="flex gap-5 justify-center items-center ">
                    <div className="p-2 bg-muted rounded-full photo ">
                        <Image className="rounded-full cursor-pointer" src="/asset/images/react_icon.png" alt="React "
                               title="React" width={50} height={50}/>
                    </div>
                    <div className="p-2 bg-muted rounded-full photo">
                        <Image className="cursor-pointer" src="/asset/images/nextjs_icon.png" alt="React " title="React"
                               width={50} height={50}/>
                    </div>
                    <div className="p-2 bg-muted rounded-full photo cursor-pointer">
                        <Image className="rounded-full " src="/asset/images/javascript_icon.png" alt="React "
                               title="React" width={50} height={50}/>
                    </div>
                </div>
                <p className="text-secondary-foreground">Specialization </p>
                <a
                    href="/service"
                    className="no-underline"
                    rel="noopener noreferrer"
                >
                    <h1 className="uppercase text-secondary-foreground">
                        Services
                    </h1>
                </a>
            </div>
            <div className="container text-center">
                <div className="grid-12">
                    <div className="col-span-6">
                        <h1 className='text-primary'> 4+ </h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className="col-span-6">
                        <h1 className='text-primary'> 20+ </h1>
                        <p>Project Completed </p>

                    </div>
                </div>

            </div>

        </div>
          <div className="col-span-12 md:col-span-7">
              <div className="container text-center">
                  <div className="flex justify-center gap-5">
                      <div className="overflow-hidden rounded-lg">
                          <Image className="photo w-auto h-[100px]" src="/asset/images/web_app_cover.png" alt="" width={100} height={100}/>
                      </div>
                      <div className="overflow-hidden rounded-lg">
                          <Image className="photo w-auto h-[100px]" src="/asset/images/web_app_cover2.png" alt="" width={100} height={100}/>
                      </div>

                  </div>
                  <div className="mt-[30px]">
                      <p className=""> Show Case View </p>
                      <a
                          href="/project"
                          className="no-underline"
                          rel="noopener noreferrer"
                      >
                          <h1 className="uppercase text-secondary-foreground">
                              Projcect
                          </h1>
                      </a>
                  </div>

              </div>
                  <div className="grid-12">
                      <div className="col-span-6 bg-primary container text-center">
                          <p className="text-sm "> Visit My Blog  </p>
                          <a
                              href="/blog"
                              className="no-underline"
                              rel="noopener noreferrer"
                          >
                              <h1 className="uppercase text-secondary-foreground">
                                  Blog
                              </h1>
                          </a>
                      </div>
                      <div className="col-span-6 container text-center">

                          <p className="text-sm "> Let&#39;s Work  </p>
                          <a
                              href="/contact"
                              className="no-underline"
                              rel="noopener noreferrer"
                          >
                              <h1 className="uppercase text-secondary-foreground text-2xl">
                                  Contact
                              </h1>
                          </a>
                      </div>
                  </div>
              <div className="container bg-[url('/asset/images/rivew.jpg')]  bg-no-repeat  h-1/3 bg-center bg-opacity-600 mb-40" >
<div className="flex gap-5 text-center">
    <div>
        <p className=""> What Client Says?</p>
        <a
            href="/testimonial"
            className="no-underline"
            rel="noopener noreferrer"
        >
            <h1 className="uppercase text-secondary-foreground">
             Testimonial
            </h1>
        </a>

    </div>
</div>
              </div>

          </div>
      </div>
    </div>
  );
};

export default MainGrid;
