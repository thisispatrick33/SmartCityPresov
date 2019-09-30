import React, {useEffect, useState} from "react";
import $ from 'jquery';
import FsLightbox from 'fslightbox-react';
export const Project = ({data,user, close = f => f}) => {
    const written = new Date(data.updated_at.replace(' ', 'T'));
    const [toggler, setToggler] = useState(false);
    useEffect(() => {
        $('.project-details-frame').fadeIn();
        $('.project-details-frame .project-content').animate({
            marginTop: '10vh',
            easing: 'easeInOutCirc'
        },1000);
        console.log(data)
    }, []);
    return (
        <div  className={"project-details-frame row p-0 justify-content-center"} style={{display : `none`}}>
            <div className="project-content col-xl-9 col-lg-9 col-md-10 col-sm-11 col-11 row shadow p-0 justify-content-start align-items-start" style={{marginTop : '100vh', minHeight : '80%'}}>
                <div className="gallery col-xl-2 col-lg-2 col-12 order-xl-1 order-lg-1 order-2 row p-0">
                    <div className="col-12 p-0 mt-5 title">
                        <h3 className={"text-center"}>galéria</h3>
                    </div>
                    <>
                        <FsLightbox
                            toggler={ toggler }
                            sources={
                                data.images.map(image => image.path.substr(image.path.indexOf('img')))
                             }
                        />
                    </>
                    <div className={"col-12 row p-3"}>
                        { data.images.map(({id,title,alt,path}) => {
                            return <div onClick={ () => setToggler(!toggler) } className={"col-xl-12 col-lg-12 col-4 mb-4 p-1"}>
                                <img src={path.substr(path.indexOf('img'))} alt={alt} className={"col-12 shadow p-2"}/>
                            </div>
                          })
                        }
                    </div>
                </div>
                <div className="content shadow col-xl-10 col-lg-10 col-12 order-xl-2 order-lg-2 order-1 row justify-content-end p-0 align-items-start">
                    <div className="col-12 row p-0">
                        <div className="col-12 row mt-5 px-5 title p-0">
                            <h1 className={"col-11 mb-2"}>{data.title.replace('.','')}<span>.</span></h1>
                            <span onClick={() => close()} className={"col-1 p-0"}>
                                <svg className={"col-12 p-0 close-button"} enableBackground="new 0 0 357 357" version="1.1" viewBox="0 0 357 357" space="preserve" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="357 35.7 321.3 0 178.5 142.8 35.7 0 0 35.7 142.8 178.5 0 321.3 35.7 357 178.5 214.2 321.3 357 357 321.3 214.2 178.5"/>
                                </svg>
                            </span>
                        </div>
                        <div className="col-12 row description mt-4 py-2 px-5">
                            <p className={"col-11 mb-3"}>{data.description}</p>
                        </div>
                        <div className="col-12 row price mt-4 py-2 px-5">
                            <p className={"col-11 mb-3"}><span>Cena projektu : </span>{data.price}€</p>
                        </div>
                        <div className="col-11 row post-data my-4 py-2 px-5">
                            <p className={"col-12 mb-0 text-right"}>{ String(written.getDay()) + `/` + (written.getMonth()+1) + `/` + written.getFullYear() }</p>
                            <p className={"col-12 mb-0 text-right"}>{user.name}</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    );
};

