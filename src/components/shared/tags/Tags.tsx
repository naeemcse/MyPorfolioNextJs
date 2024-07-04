import React from 'react';

const TagComponent = ({ tagString="" }) => {
    // Split the tagString into individual words
    const tags =  tagString ?  tagString.split(','):[];

    return (
        <div>
            {tags.map((tag, index) => (
                <div className='text-card hover:text-primary bg-card-foreground  hover:bg-card cursor-pointer' key={index} style={tagStyle}>
                    {tag.trim()}
                </div>
            ))}
        </div>
    );
};

// Style for the tag div
const tagStyle = {
    display: 'inline-block',
    padding: '5px 10px',
    margin: '5px',
    borderRadius: '5px',
    textDecoration: 'none',
};

export default TagComponent;