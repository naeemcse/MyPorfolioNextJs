import React from 'react';
import Image from "next/image";

const RightSidebar = () => {
    return (
        <div className="w-full h-screen ml-0 mt-0">
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
        </div>
    );
};

export default RightSidebar;