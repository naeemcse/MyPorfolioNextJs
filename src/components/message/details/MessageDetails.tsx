"use client"
import React, {useEffect, useState} from 'react';

const MessageDetails = ({id}) => {
    const [message, setMessage] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/message/details/?id=${id}`);
                if (response.ok) {
                    const result = await response.json();
                    console.log('Fetched data:', result); // Debugging line to log the API response
                    if (result && result.data) {
                        setMessage(result.data);
                    } else {
                        console.error('Data format is incorrect:', result);
                    }
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []);
    return (
        <div>
            <div className="max-w-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Message Details</h1>
                <div className="text-left space-y-2">
                    <p><strong>ID:</strong> {message.id}</p>
                    <p><strong>Name:</strong> {message.name}</p>
                    <p><strong>Email:</strong> {message.email}</p>
                    <p><strong>Subject:</strong> {message.subject}</p>
                    <p><strong>Message:</strong> {message.message}</p>
                    <p><strong>Created At:</strong> {new Date(message.createdAt).toLocaleString()}</p>
                    {/*<p><strong>Updated At:</strong> {new Date(message.updatedAt).toLocaleString()}</p>*/}
                </div>
            </div>
        </div>
    );
};

export default MessageDetails;