import React, { useState, useEffect } from "react";
import { Loader } from './Loader';

export const Subpage = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`/api/${props.id}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, [data]);
    if(!data.subpage || !data.posts){
        return <Loader/>;
    }
    return (
        <div className={"subpage row"}>
            <h1 className={"col-12"}>{data.subpage.title}</h1>
            <h3 className={"col-12"}>{data.subpage.description}</h3>
            <div className="articles row col-12">
                {
                    data.subpage.posts.map( article => {
                        console.log(article)
                        return <div className={"col-3 article"}>
                            {article.title}
                            {article.description}

                        </div>;
                    })
                }
            </div>
        </div>
    );
};

