import React from 'react';

const Address = () => {
    return (
        <div className="container">
            <h1>Request a quote for work</h1>
            <div className="grid-12">
                <div className="col-span-12 md:col-span-3">
                    <p className="text-muted">Call for help</p>
                    <span className="block">+88 018672 10 892 </span>
                    <span className="block">+88 018 650 780 90 </span>
                </div>
                <div className="col-span-12 md:col-span-3">
                    <p className="text-muted">Home Address</p>
                    <span className="block">Nakla(3150), Sherpur  </span>
                    <span className="block">Mymensingh,Bangladesh </span>
                </div>
                <div className="col-span-12 md:col-span-3">
                    <p className="text-muted"> Present Adress </p>
                    <span className="block"> Comilla University </span>
                    <span className="block"> Cumilla (3500),Bangladesh </span>
                </div>
                <div className="col-span-12 md:col-span-3 md:-ml-10">
                    <p className="text-muted"> Email  </p>
                    <span className="block"> csenajmulislamnaeem@gmail.com </span>
                    {/*<span className="block">+88 018 650 780 90 </span>*/}
                </div>
            </div>

        </div>
    );
};

export default Address;