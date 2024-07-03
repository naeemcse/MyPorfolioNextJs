import * as React from "react"
import { Button } from "@/components/ui/button"
import { FiMenu } from "react-icons/fi";
import {useTheme} from "next-themes";
import { FiChevronsLeft } from "react-icons/fi";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";
import Image from "next/image";
import TypeWriterText from "@/components/shared/animation/TypeWriterText";
import {usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";

export default function DrawerDemo({isLoggedIn}: {isLoggedIn: boolean}) {
    const router = usePathname ();
    // Define a helper function to determine if a route is active
    const isActive = (path: string) => router === path;
    const {theme} = useTheme();
    const animationText:string[] = ['Hire me ', 'Message Me' ]
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About me', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: <div className="w-[105px] text-primary">  <TypeWriterText  cursor={true} words={animationText}/></div>, path: '/contact'  },
        { name: 'Dashboard', path: '/dashboard', auth: true }, // Optional: requires authentication
    ];
    return (
        <div>
        <Drawer direction="left" >
            <DrawerTrigger asChild>
                <Button variant="outline" className="font-bold text-lg text-card-foreground hover:bg-primary border-none"><FiMenu /></Button>
            </DrawerTrigger>
            <DrawerContent className="w-[250px] h-full">
                    {/*<DrawerHeader>*/}
                    {/*    <DrawerTitle>Move Goal</DrawerTitle>*/}
                    {/*    <DrawerDescription>Set your daily activity goal.</DrawerDescription>*/}
                    {/*</DrawerHeader>*/}
                    <div className="ml-4 flex flex-col items-left space-x-4">
                        <div className="flex gap-2">
                            <Link href="/" className="text-foreground">
                                <Image className="p-2 rounded-md" src={ theme === "dark" ?"/logo.png":"/logo.png"} width={150} height={90} loading='lazy' alt="Logo" title="Skill Map"/>
                            </Link>
                            <DrawerClose asChild>
                                <Button variant="outline" className="font-bold text-lg text-card-foreground border-none p-2 mt-2">
                                    <FiChevronsLeft  />
                                </Button>
                            </DrawerClose>
                        </div>
                        {navItems.map((item) => {
                            if (item.auth && status !== "authenticated") return null;
                            return (
                                    <Link key={item.path} href={item.path}
                                          className={`${isActive(item.path) ? 'text-primary' : 'text-muted'} p-2 hover:text-secondary-foreground hover:bg-secondary no-underline rounded ease-in duration-200 transition-all `}
                                    >
                                        {item.name}
                                    </Link>

                            );
                        })}
                        <ModeToggle/>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>

            </DrawerContent>
        </Drawer>
        </div>
    )
}
