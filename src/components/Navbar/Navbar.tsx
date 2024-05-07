import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";

import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="logo">
          <Image
            src="/logo.png"
            height={100}
            width={200}
            alt="Logo"
            title="Naeem"
          />
        </div>
        <menu className="hidden md:block">
          <ul className="list-none flex gap-4 ">
            <li>
              <a
                className="text-muted hover:text-secondary-foreground active:text-primary "
                href="/"
              >
                {" "}
                Home{" "}
              </a>
            </li>
            <li>
              <a
                className="text-muted  active:text-primary  hover:text-secondary-foreground ease-in duration-200 transition-all"
                href="/about"
              >
                {" "}
                About me{" "}
              </a>
            </li>
            <li>
              <a
                className="text-muted  active:text-primary  hover:text-secondary-foreground ease-in duration-200 transition-all"
                href="/contact"
              >
                {" "}
                Hire me{" "}
              </a>
            </li>
          </ul>
        </menu>
        <div className="flex items-center">
          <div>
            <ModeToggle />
          </div>

          <button className="rounded-full border border-[#919295] p-[10px] text-[20px] ml-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              height="1em"
              width="1em"
              className="text-muted"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
