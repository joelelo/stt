import React from 'react';

const Library = () => {
    return (
        <div>
            <object data="/api/ebook"></object>
            <iframe
                src="https://drive.google.com/file/d/0B7SDIyL-UUAESnJYcGZha2MwMnc/preview?resourcekey=0-P-_UKqhq5DQN_JqRH8ee4g"
                width="640"
                height="480"
                allow="autoplay"></iframe>
            <a href="https://drive.google.com/uc?export=download&id=0B7SDIyL-UUAESnJYcGZha2MwMnc">Download</a>
        </div>
    );
};

export default Library;
