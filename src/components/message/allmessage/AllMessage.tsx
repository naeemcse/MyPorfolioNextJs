"use client"
import React, {useEffect,useState} from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import  MessageTable from "./MessageTable"
const AllMessage = () => {
const [messages, setMessages] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/message');
                if (response.ok) {
                    const result = await response.json();
                    if (result && result.data) {
                        setMessages(result.data);
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
            {/*{JSON.stringify(messages)}*/}
<MessageTable/>
        </div>
    );
};

export default AllMessage;