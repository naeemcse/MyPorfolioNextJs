'use client'
import Image from "next/image";
import { useSession,signOut,signIn} from "next-auth/react"
import { ModeToggle } from "@/components/ModeToggle";
import React from "react";
import Link from "next/link";
import LogInLogout from "@/components/Navbar/LogInLogout";
import {usePathname } from "next/navigation";
import TypeWriterText from "@/components/shared/animation/TypeWriterText";
import LeftSideBar from "@/components/Navbar/sidebar/LeftSideBar";

const Navbar = () => {
  const router = usePathname ();
  // Define a helper function to determine if a route is active
  const isActive = (path: string) => router === path;

  const { data,status} = useSession()
  const logoutHandeler =()=>{
    signOut({ callbackUrl: 'http://localhost:3000/' })
  }
  const logintHandeler =()=>{
    signIn( undefined,{ callbackUrl: 'http://localhost:3000/' })
  }
  const animationText:string[] = ['Hire me ', 'Message Me' ]
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About me', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: <div className="w-[105px] text-primary">  <TypeWriterText  cursor={true} words={animationText} /></div>, path: '/contact'  },
    { name: 'Dashboard', path: '/dashboard', auth: true }, // Optional: requires authentication
  ];
  return (
    <div>
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
            {/*}   <li>
              <Link
                  className={`hover:text-secondary-foreground nav-link ${router.pathname ==="/" ? 'text-primary' : 'text-muted'}`}
                  href="/"
              >
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <a className={`nav-link ${isActive('/about') ? 'text-primary ' : 'text-muted'} hover:text-secondary-foreground ease-in duration-200 transition-all`}
                 href="/about">
                About me
              </a>
              <a className={`nav-link ${isActive('/about') ? 'text-primary bg-blue-500' : 'text-gray-300'}`}>
                About
              </a>
            </li>
            <li>
              <a
                  className="text-muted  active:text-primary  hover:text-secondary-foreground ease-in duration-200 transition-all"
                  href="/blog"
              >
                Blog
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
            {
                status === "authenticated" && (<li>
                  <a
                      className="text-muted  active:text-primary  hover:text-secondary-foreground ease-in duration-200 transition-all"
                      href="/dashboard"
                  >
                    Dashboard
                  </a>
                </li>)}
            */}

          {navItems.map((item) => {
            if (item.auth && status !== "authenticated") return null;
            return (
                <li key={item.path}>
                    <Link href={item.path}
                        className={`${isActive(item.path) ? 'text-primary' : 'text-muted'} hover:text-secondary-foreground ease-in duration-200 transition-all`}
                    >
                      {item.name}
                    </Link>

                </li>
            );
          })}</ul>
        </menu>
        <div className="flex items-center">
          <div className="mx-2 text-muted"><LogInLogout/></div>
          <div>
            <ModeToggle/>
          </div>
          <div className="ml-2" >
          <LeftSideBar isLoggedIn={true}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
