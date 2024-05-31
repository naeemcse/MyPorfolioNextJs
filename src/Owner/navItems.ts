import TypeWriterText from "@/components/shared/animation/TypeWriterText";
import React from "react";

export const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About me', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: <div className="w-[105px] text-primary">  <TypeWriterText  cursor={true} words={animationText}/></div>, path: '/contact'  },
{ name: 'Dashboard', path: '/dashboard', auth: true }, // Optional: requires authentication
];