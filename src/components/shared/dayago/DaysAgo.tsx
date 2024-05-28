import React from 'react';
import {format, formatDistanceToNow, parseISO} from 'date-fns';

const PostDate = ({ createdAt }) => {
    const formattedDate = format(new Date(createdAt), 'dd MMMM yyyy');
    const date = parseISO(createdAt);
    const daysAgo = formatDistanceToNow(date, { addSuffix: true });
    return (
        <div>
            {/*{formattedDate}*/}
            {daysAgo}
        </div>
    );
};

export default PostDate;