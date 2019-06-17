import React, { useState, useEffect } from "react";
import { Link } from "@reach/router"
export const Navigation = () => {
    const [subpages, setSubpage] = useState([]);
    useEffect(() => {
        fetch("/api")
            .then(response => response.json())
            .then(subpages => {
                setSubpage(subpages);
            });
    }, [subpages]);
    return (
        <>
            <nav className={"row justify-content-around align-items-center"}>
                <div className={"nav_item row d-flex justify-content-start "}>
                    <Link className={"col-12 p-0"} to={`/`}>
                        <img src="../img/logo.png" className={"col-12 p-2"} alt="Smartcity Logo" style={{width : 100,height : 100}}/>
                    </Link>
                    <hr className={"col-5 m-0 mt-2"} />
                </div>
                {
                    subpages.map(({ title, title_link}) => {
                        return (
                            <div className={"nav_item row d-flex justify-content-start"} key={title}>
                                <Link className={"col-12 px-0"} to={`/${title_link}`}>{title}</Link>
                                <hr className={"col-5 m-0 mt-2"}/>
                            </div>
                        );
                    })
                }
                <div className={"nav_item row d-flex justify-content-start"}>
                    <Link className={"col-12 px-0"} to={`/`}>Presov</Link>
                    <hr className={"col-5 m-0 mt-2"}/>
                </div>
            </nav>
        </>
    );
};
