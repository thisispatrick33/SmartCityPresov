import React from "react";

export const HomeOutlook = ({post, getPost = f => f}) => {

    return console.log(post),<div className={'news-outlook-frame | row col-lg-4 col-sm-5 col-10 | mx-0 my-2 p-0 | justify-content-center'}>
            <div className={'news-outlook | row col-xl-11 col-lg-11 col-md-11 col-11 | m-0 p-0'}>
                <div className={'project-cover-image | col-12 | m-0 p-0 | justify-content-center'}>
                    <img src={post.image.substr(post.image.indexOf('img'))} alt="project-cover-image" className={'col-12 | p-0'}/>
                </div>
                <div className={'news-content | row col-12 | m-0 p-0 | justify-content-center'} onClick={()=>getPost(post.id)}>
                    <p className={'col-12 | px-4 py-3 m-0'}>
                        {post.title.substring(0, 70)}...
                        <br/>
                        <span className={'show-more'}>Zisti viac kliknutím</span>
                    </p>
                </div>
            </div>
        </div>;
};
