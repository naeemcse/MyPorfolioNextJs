import React from 'react';
import MassageForm from "@/components/contact/MassageForm";
import Address from "@/components/contact/Address";
import GoogleMap from "@/components/contact/GoogleMap";

const Page = () => {
    return (
        <div>
        <MassageForm/>
            <GoogleMap/>
            <Address/>
        </div>
    );
};

export default Page;