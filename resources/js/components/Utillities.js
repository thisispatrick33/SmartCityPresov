import React from "react";

export const NonLogged = () => {
    return (
        <a className={`reverse | col-xl-12 col-lg-12 | text-center | px-3 py-2`} href={`https://www.presov.sk`} target={`blank`}>Prešov.sk</a>
    );
};

export const Logged = ({user,logout = f => f}) => {
    return (
        <div className={`logged | row col-12 | justify-content-center | d-flex | my-2 px-0`}>
            <div className={`body | row col-auto | justify-content-center | align-items-center | py-3 px-0`}>
                <div className={`col-3 | justify-content-center | d-flex | pr-2 pl-0`}>
                    <svg className={`col-xl-8 col-lg-8 col-md-9 col-10 | p-0`} enableBackground="new 0 0 60 60" version="1.1" viewBox="0 0 60 60" space="preserve" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39,22c0-4.963-4.038-9-9-9s-9,4.037-9,9c0,2.814,1.306,5.438,3.523,7.138L21.848,48h16.304l-2.675-18.862   C37.694,27.438,39,24.814,39,22z M35.848,46H24.152l2.526-17.81l-0.528-0.349C24.177,26.54,23,24.356,23,22c0-3.859,3.14-7,7-7   s7,3.141,7,7c0,2.356-1.177,4.54-3.149,5.842l-0.528,0.349L35.848,46z"/>
                        <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
                    </svg>
                </div>
                <div className={`col-auto | p-0`}>
                    <h4 className={`col-12 | text-center | p-0 m-0`}> {`${user.name.split(" ")[0].charAt(0)}.${user.name.split(" ")[1]}`} </h4>
                    <button className={`logout-button | col-12 | p-0 m-0 | text-center`} onClick={logout}>odhlásiť sa</button>
                </div>
            </div>
        </div>
    );
};

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

