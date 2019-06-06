import React, { useState, useEffect } from "react";


export const Subpage = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`/api/${props.id}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);
    if(!data.data){
        return <div>loading</div>
    }
    return (
        <>
            <h1>{data.data.title}</h1>
            <p>{data.data.description}</p>
        </>
    );
};

