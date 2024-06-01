import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Details = () => {
    return (
        <>
        <div className="container flex flex-col md:flex-row  justify-between">
            <div className="w-full md:w-1/3 ">
                <Image src="/naeem_1.png" className="mx-auto" width={300} height={350} alt='Naeem' title='Naeem' />
            </div>
            <div className="w-full  md:w-2/3 flex flex-col">
                <h1 className="text-secondary-foreground mt-10"> About Me <span className="text-primary">!</span> </h1>
                <p className="text-justify text-muted"> My favorite in this programming sector is to fix ‍any Errors. Because in every error there is hope to learn something new. I won &apos t quit until I can fix the error. In this programming life, I have tried to solve all kinds of problems and have succeeded. My policy is to stick with it until the problem is solved. Contact us today, and let us bring your vision to life with the power of Full stack development. </p>
                <div className="flex justify-between items-center">
                    <h1 className=" text-primary">20+</h1>
                    <p className="text-muted -ml-12">Projects Completed</p>
                    <h1 className=" text-primary"> 10+</h1>
                    <p className="text-justify -ml-12 text-muted">Satisfied Clients</p>
                </div>
            </div>

        </div>
            <div className="">
                <div className="grid-12">
                    <div className="container col-span-12 md:col-span-6">
                        <h2>Experience</h2>
                        <div className="mt-10">
                            <span className="text-muted block">2022-present</span>
                            <span className="block">Assistant developer with <Link
                                href=""> Muhibur Rahman  </Link> </span>
                        </div>
                        <div className="mt-10">
                            <span className="text-muted block">2022-present</span>
                            <span className="block">  Full stack Web Developer (MERN) </span>

                        </div>

                    </div>
                    <div className="container col-span-12 md:col-span-6">
                        <h2>Education</h2>
                        <div className="mt-10">
                            <span className="text-muted block">2020-present</span>
                            <span className="block">Research on Software & Web Application </span>
                            <span className="block text-muted
                            "> Ostad || Learn with Summit || Programming Hero  </span>

                        </div>
                        <div className="mt-10">
                            <span className="text-muted block">2020-2024</span>
                            <span className="block">  BSc in CSE at Comilla University </span>

                        </div>

                    </div>
                </div>
            </div>
        </>);
};

export default Details;