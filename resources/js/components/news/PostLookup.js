import React from "react";
import { Link } from "@reach/router";

export const PostLookup = ({ id, title, description, date, author, index }) => {
    const written = new Date(date.replace(' ', 'T'));
    return (
        <div className={"row post col-xl-11 col-lg-11 col-12 px-0"}>
            <div className={`row p-0 mt-4 px-3 content`}>
                <h3 className={"col-12"}>{title}</h3>
                <p className={"col-12 mb-0 description"}>{description.substring(0,window.innerWidth > 991 ? 100 : 50)} <Link className={"read_more"} to={`/posts/${id}`} state={{ subpage : null }}>Zisti viac...</Link></p>
                <div className="detail_info col-12 row mt-3">
                    <p className={"col-6 text-left p-0"}>{author.name.split(" ")[0].substring(0,1)+ " . "+author.name.split(" ")[1].substring(0,1)+" . "}</p>
                    <p className={"col-6 text-right"}>{String(written.getDay()) + `/` + (written.getMonth()+1) + `/` + written.getFullYear() }</p>
                </div>
            </div>
            <div className={`${index % 2 === 1 ?  "offset-1" : ""} col-11 px-0`}>
                <div className={`${index % 2 === 1 ?  "offset-6" : ""} col-6 px-0 mt-2`}>
                    <hr className={"m-0 mt-2"}/>
                </div>
            </div>
        </div>

    );
};

