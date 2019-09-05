import React, {useEffect} from "react";
import $ from 'jquery';
export const Project = ({data,user, close = f => f}) => {
    useEffect(() => {
        $('.project-details-frame').fadeIn();
        $('.project-details-frame .project-content').animate({
            marginTop: '10vh',
            easing: 'easeInOutCirc'
        },1000);
    }, []);
    return (
        <div onClick={() => close()} className={"project-details-frame row p-0 justify-content-center"} style={{display : `none`}}>
            <div className="project-content col-xl-9 col-lg-9 col-md-10 col-sm-11 col-11 row shadow p-0 justify-content-start align-items-start" style={{marginTop : '100vh', minHeight : '80%'}}>
                <div className="gallery col-xl-2 col-lg-2 col-12 order-xl-1 order-lg-1 order-2 row p-0">
                    <div className="col-12 p-0 my-5 title">
                        <h3 className={"text-center"}>galéria</h3>
                    </div>
                    <div className={"col-12 row p-3"}>
                        <div className={"col-xl-12 col-lg-12 col-4 mb-4 cover-image p-1"}>
                            <img src={data.image} alt="cover image" className={"col-12 shadow p-0"}/>
                        </div>
                        { data.images.map(({id,title,alt,path}) => {
                            return <div className={"col-xl-12 col-lg-12 col-4 mb-4 p-1"}>
                                <img src={path} alt={alt} className={"col-12 shadow p-2"}/>
                            </div>
                          })
                        }
                    </div>
                </div>
                <div className="content shadow col-xl-10 col-lg-10 col-12 order-xl-2 order-lg-2 order-1 row justify-content-end p-0 align-items-start">
                    <div className="col-12 row p-0">
                        <div className="col-12 row mt-5 px-5 title p-0">
                            <h1 className={"col-12 mb-2"}>{data.title}<span>.</span></h1>
                        </div>
                        <div className="col-12 row description mt-4 py-2 px-5">
                            <p className={"col-11 mb-3"}>{data.description}</p>
                        </div>
                        <div className="col-12 row price mt-4 py-2 px-5">
                            <p className={"col-11 mb-3"}>{data.price}</p>
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

