import React, {useEffect,useRef} from "react";
import $ from 'jquery';
export const Project = ({data,user}) => {
    useEffect(() => {
        $('.project-details-frame .project-content').animate({
            marginTop: '10vh',
            easing: 'easeInOutCirc'
        },1000);
    }, []);
    const del = () => {
        console.log("close")
        $('.project-details-frame .project-content').animate({
            marginTop: '100vh',
            easing: 'easeInOutCirc'
        },1000);
        $('.project-details-frame').fadeToggle();
    }
    return (
        <div onClick={del} className={"project-details-frame row p-0 justify-content-center"}>
            <div className="project-content col-9 row shadow p-0 justify-content-start align-items-start" style={{marginTop : '100vh', minHeight : '80%'}}>
                <div className="gallery col-2 row p-0">
                    <div className="col-12 p-0 my-5 title">
                        <h3 className={"text-center"}>galéria</h3>
                    </div>
                    <div className={"col-12 row p-0"}>
                        <div className={"col-12 mb-4"}>
                            <img src="img/eu4.jpg" alt="" className={"col-12 shadow"}/>
                        </div>
                        <div className={"col-12 mb-4"}>
                            <img src="img/eu4.jpg" alt="" className={"col-12 shadow"}/>
                        </div>
                        <div className={"col-12 mb-4"}>
                            <img src="img/eu4.jpg" alt="" className={"col-12 shadow"}/>
                        </div>
                    </div>
                </div>
                <div className="content shadow col-10 row justify-content-end p-0 align-items-start" style={{height : "100%"}}>
                    <div className="col-12 row p-0">
                        <div className="col-12 row mt-5 px-5 title p-0">
                            <h1 className={"col-12 mb-2"}>{data.title}<span>.</span></h1>
                        </div>
                        <div className="col-12 row description mt-4 py-2 px-5">
                            <p className={"col-11 mb-3"}>{data.description}</p>
                            <p className={"col-11 mb-3"}>{data.description}</p>
                            <p className={"col-11 mb-3"}>{data.description}</p>
                        </div>
                        <div className="col-11 row post-data my-4 py-2 px-5">
                            <p className={"col-12 mb-0 text-right"}>{new Date(data.updated_at).toLocaleDateString("en-US")}</p>
                            <p className={"col-12 mb-0 text-right"}>{user.name}</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    );
};

