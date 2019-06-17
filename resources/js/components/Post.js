import React from "react";

export const Post = ( {id,title, description, image, date, author, index} ) => {
    return (
        <a className={"row post"}>
            <div className={`col-12 row p-0 mt-4`}>
                <h3 className={"col-12"}>{title}</h3>
                <p className={"col-12 mb-0"}>{description.substring(0,100)}</p>
                <p className={"col-12"}><a href="">Read more</a></p>
                <p className={"col-12 mb-0"}>{author}</p>
                <p className={"col-12"}>{new Date(date).toDateString()}</p>
            </div>
            <div className={`${index % 2 === 1 ?  "offset-1" : ""} col-11 px-0`}>
                <div className={`${index % 2 === 1 ?  "offset-6" : ""} col-6 px-0 mt-2`}>
                    <hr className={"m-0 mt-2"}/>
                </div>
            </div>
        </a>

    );
};

