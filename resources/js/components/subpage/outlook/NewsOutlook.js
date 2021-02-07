import React from "react";

export const NewsOutlook = ({post, getPost = f => f}) => {
    return <div className={'news-outlook-frame | row col-xl-12 col-lg-12 col-md-12 col-sm-11 col-11 | mx-0 my-2 py-2 | justify-content-center align-items-center'}>
            <div className={'news-outlook | row col-xl-11 col-lg-11 col-md-11 col-12 | mx-0 p-0'}>
                <div className={'project-cover-image | col-12 | m-0 p-0 | justify-content-center'}>
                    <img src={post.image.substr(post.image.indexOf('img'))} alt="project-cover-image" className={'col-12 | p-0'}/>
                </div>
                <div onClick={()=>getPost(post.id)} className={'news-content | row col-12 | m-0 p-0 | justify-content-center'}>
                    <p className={'col-12 | px-xl-4 px-lg-4 px-md-4 px-3 py-3 m-0'}>
                        {post.title.substring(0, 100)}...
                        <br/>
                        <span className={'show-more'} onClick={()=>getPost(post.id)}>Zisti viac kliknutím</span>
                    </p>
                </div>
            </div>
        </div>;
};

