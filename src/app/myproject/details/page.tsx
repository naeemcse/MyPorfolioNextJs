import React from 'react';
import Container from "@/components/shared/container/Container";
import Image from "next/image";
import Tags from "@/components/shared/tags/Tags";
import Date from "@/components/blog/allpost/DaysAgo";
import VideoPlayer from "@/components/shared/video/VideoPlayer";
import {projects , projectsType} from "@/asset/user_data/projectsDataBase";

type propsType ={
    searchParams: any ;
}
const Page = (props:propsType) => {
    let id:number = parseInt(props.searchParams['id']);

const project:projectsType = projects[id-1];
    return (
        <Container>
            <h1 className="text-center m-10 text-xl md:text-3xl"> {project.title} </h1>
            {
                project.image ? (
                    <Image className="w-full h-max-[150px] mx-auto hover:scale-105 ease-in-out duration-150 rounded-md"
                           src={project.image} width={400} height={150} alt=""/>) : null
            }

            <div className="flex flex-col md:flex-row justify-center md:justify-between mt-5">
                <div>
                    <Tags tagString={project.category}/>
                </div>
                <div>
                    <Tags tagString={project.technologies}/>
                </div>
            </div>
            <div className={"text-justify"}>
                {project.body}
            </div>
            <div>
                {project.listItem && (<>
                    <h3> Features :</h3>
                    <ul>
                        {project.listItem.map((item, index) => (
                            <li key={index}> {item} </li>
                        ))}
                    </ul>
                </>)

                }
            </div>


            <div className="flex m-2">
                {project.video && (<>
                    <VideoPlayer videoUrl={project.video}/>

                </>)}
            </div>
            <div>
                <span> Created At : <Date createdAt={project.createdAt}/> </span>
            </div>

            {project.github && <div className="flex m-2">
                <span className="w-1/2">  github :</span> <a className="no-underline" href={project.github || ""}
                                                             target="_blank"
                                                             rel="noopener noreferrer">Link</a>
            </div>}
            {
                project.liveLink && <div className="flex m-2">
                    <span className="w-1/2"> Reference :</span> <a className="no-underline" href={project.liveLink || ""}
                                                                   target="_blank"
                                                                   rel="noopener noreferrer">Link</a>
                </div>
            }
            <div>
                <p> {project.lastLine} </p>
            </div>

        </Container>
    );
};

export default Page;