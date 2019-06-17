import React from "react";

import { Posts } from './Posts';

export const Main = (props) => {
    return (
        <div className={"row"}>
            <div className={props.location.pathname.length > 1 ? "col-2 p-0" : ""}>
                { props.location.pathname.length > 1 ? <Posts /> : "" }
            </div>
            <div className={"col-10"}>
                { props.children }
            </div>
        </div>
    );
};

