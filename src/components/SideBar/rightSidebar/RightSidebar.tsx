"use client"
import React,{ useRef } from 'react';
// import Image from "next/image";
import { motion, sync, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
const variants = {
    open: { opacity: 1, x: 0 ,
    transition: {
    delay: 1
    }
    },
    closed: { opacity: 0, x: "-100%" },
}

const RightSidebar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    return (
        <>
            <div className="h-auto w-full mt-[60px]">
                <MenuToggle toggle={() => toggleOpen()}/>
            </div>
            <motion.nav
                className="absolute w-[400px] bg-red-200"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                <Navigation/>
            </motion.nav>


        </>
    );
};

export default RightSidebar;

{/*     <div className="w-full h-screen ml-0 mt-0">
            <div className="w-[300px] h-screen pt-10 mx-5 z-[999] bg-card">
                <div className="logo">
                    <Image
                        src="/logo.png"
                        height={100}
                        width={200}
                        alt="Logo"
                        title="Naeem"
                    />
                </div>
            </div>
        </div>*/}