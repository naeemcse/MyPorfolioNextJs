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
            <h4> Message Details  </h4>
            {
                JSON.stringify(message)
            }
        </div>
    );
};

export default MessageDetails;