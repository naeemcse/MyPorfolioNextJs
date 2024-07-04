import React from 'react';
import Date from "@/components/blog/allpost/DaysAgo";
import Link from "next/link";
import Image from "next/image";
import {projects,projectsType} from "@/asset/user_data/projectsDataBase";
const AllProject = () => {
    return (
    <section>
            <div className="m-2 flex flex-wrap bg-card text-card-foreground">
                {
                    projects.map(item => (
                            <div key={item.id} className="p-4 md:w-1/2 hover:scale-105 transition duration-300 ease-in-out">
                                <div className="border-2 border-gray-200 rounded-lg">
                                    <Image
                                        height={250}
                                        width={500}
                                        className="object-cover object-center w-full h-[250px]"
                                        src={item.image || "/asset/images/web_app_cover.png"}
                                        alt={item.title}
                                        title={item.title}
                                    />
                                    <div className="p-6">
                                        <div className="flex justify-between ">   <span
                                            className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-indigo-800 bg-indigo-200 rounded">
                                {item.category}
                                        </span>
                                            <Date createdAt={item.createdAt}/>
                                        </div>
                                        <h1 className="mb-2 text-lg font-medium text-primary">{item.title} </h1>
                                        <div className="flex items-center ">
                                            <Link className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0"
                                               href={`/myproject/details/?id=${item.id}`} rel="noopener noreferrer">
                                                Read More
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5 mt-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }

            </div>
        </section>
    );
};

export default AllProject;