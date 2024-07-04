import React from 'react';
import {format, formatDistanceToNow, parseISO} from 'date-fns';

const PostDate = ({ createdAt }:{createdAt:string}) => {
    const formattedDate = format(new Date(createdAt), 'dd MMMM yyyy');
    const date = parseISO(createdAt);
    const daysAgo = formatDistanceToNow(date, { addSuffix: true });
    return (
        <>
            {/*{formattedDate}*/}
            {daysAgo}
        </>
    );
};

export default PostDate;