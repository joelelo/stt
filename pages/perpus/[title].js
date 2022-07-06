import React, { useEffect, useState } from 'react';
//"/api/ebook"
const Library = () => {
    const [file, setFile] = useState();
    useEffect(() => {
        const getFile = async () => {
            const res = await fetch('http://localhost:3000/api/ebook');
            const pdf = await res.blob();
            const url = window.URL.createObjectURL(pdf);
            console.log(url);

            setFile(url);
        };
        getFile();
    }, []);
    return (
        <div>
            <object data={file}></object>
            <a href={file} download="Test.pdf">
                Download
            </a>
        </div>
    );
};

export default Library;
