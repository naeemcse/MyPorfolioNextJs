import React from 'react';

const GoogleMap = () => {
    return (
        <div className="container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7554.825887019382!2d91.18666069350088!3d23.451292593314374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1715019376180!5m2!1sen!2sbd"
                width="600" height="450"
                className="mx-auto w-full "
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default GoogleMap;