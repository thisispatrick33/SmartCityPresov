import React from "react";

export const Article = ( {id,title, description, image, date, author} ) => {
    return (
        <a href="/api/post/1">
            <div className={"post row"}>
                <h3 className={"col-12"}>{title}</h3>
                <p className={"col-12 mb-0"}>{description.substring(0,100)}</p>
                <p className={"col-12"}><a href="">Read more</a></p>
                <p className={"col-12 mb-0"}>{new Date(date).toDateString()}</p>
                <p className={"col-12"}>{author}</p>
            </div>
        </a>

    );
};

