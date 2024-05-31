// @ts-ignore

import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import TypeWriterText from "@/components/shared/animation/TypeWriterText";
import Link from "next/link";
// import {navItems} from "@/Owner/navItems";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const variantsItem = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const Navigation = () => {
// @ts-ignore
    const navItems = [
        {name: 'Home', path: '/'},
        {name: 'About me', path: '/about'},
        {name: 'Blog', path: '/blog'},
        {name:"Contact me ", path: '/contact'}
    ] ;
    return(
<motion.ul variants={variants} className="ml-60">
    {navItems.map((item) => {
        return (
            <motion.li
                variants={variantsItem}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} key={item.path}>
                <Link href={item.path}
                      className={`text-muted hover:text-secondary-foreground ease-in duration-200 transition-all`}
                >
                    {item.name}
                </Link>

            </motion.li>
        );
    })}
</motion.ul>
) ;
}
const itemIds = [0, 1, 2, 3, 4];
