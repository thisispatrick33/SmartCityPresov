import React from "react";

export const Loader = () => {
    return (
        <div className="loader d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className={"col-12"}>
                    <img src="../img/loader-logo.png" alt="logo" style={{width : '150px', height : '150px'}}/>
                </div>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

