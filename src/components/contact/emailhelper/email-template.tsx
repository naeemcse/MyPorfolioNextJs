/* import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    subject:string ;
    emailAddress:string ;
    message:string ;
}
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (
    {name,subject,emailAddress,message}) => (
    <div>
        <h1> Assalamualaikum, I am {name}!</h1>
        <p> Email Sender: {emailAddress} </p>
        <p> <span> Subject:  </span> {subject} </p>
        <p> {message} </p>
    </div>
);
*/

import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    subject: string;
    emailAddress: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (
    { name, subject, emailAddress, message }
) => (
    <div style={styles.container}>
        <h1 style={styles.header}><strong>Email Sender Name :</strong>{name}!</h1>
        <p style={styles.paragraph}><strong>Email Sender Email:</strong> {emailAddress}</p>
        <p style={styles.paragraph}><strong>Subject:</strong> {subject}</p>
        <p style={styles.message}>{message}</p>
    </div>
);

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        maxWidth: '600px',
        margin: 'auto'
    },
    header: {
        fontSize: '24px',
        color: '#333',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
    },
    paragraph: {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '10px'
    },
    message: {
        fontSize: '16px',
        lineHeight: '1.5',
        marginTop: '20px'
    }
};
