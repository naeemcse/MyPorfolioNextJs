import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const SideBar = () => {
  return (
    <div className="mx-5">
      <div className="mx-auto flex justify-center">
        <Image
          src="/naeem_1.png"
          width={300}
          height={500}
          alt="Engineer Naeem"
          title="Naeem"
        />
      </div>
      <div className="my-[30px]">
        <div className="text-center">
          <h3 className="uppercase ">
            <span className="text-secondary-foreground"> Hy! I'm </span>
            <span className="text-primary"> Najmul Islam</span>
          </h3>
          <span> Software Engineer </span>
          <p>
            {" "}
            csenajmulislamnaeem@gmail.com <br />
            018 672 10 892
          </p>
          <div className="flex justify-center gap-2 mt-5">
            <a
              href="https://www.facebook.com/naeem.cse.cou/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-2 bg-muted border rounded-sm ">
                <Facebook className="text-blue-600 hover:text-primary" />
              </button>
            </a>
            <a
              href="https://github.com/naeemcse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-2 bg-muted border rounded-sm ">
                <Github className="text-black hover:text-primary" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/najmul-islam-naeem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-2 bg-muted border rounded-sm ">
                <Linkedin className="text-blue-600 hover:text-primary" />
              </button>
            </a>
            <a
              href="https://twitter.com/N_I_Naeem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-2 bg-muted border rounded-sm ">
                <Twitter className="text-black hover:text-primary" />
              </button>
            </a>
          </div>
        <Button className="w-full my-5 hover:bg-background"> Hire Me  </Button>
        <Button className="w-full bg-background"> Download CV  </Button>

        </div>
      </div>
    </div>
  );
};

export default SideBar;
