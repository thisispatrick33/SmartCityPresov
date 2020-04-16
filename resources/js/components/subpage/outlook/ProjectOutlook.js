import React from "react";

export const ProjectOutlook = ({post, getPost = f => f}) => {
    console.log(post);
    return <div className={'project-outlook-frame | row | mx-0 my-2 p-3 | justify-content-center'}>
        <div className={'project-outlook | row col-xl-11 col-lg-11 col-md-11 col-12 | m-0 p-0'}>
            <div className={'project-cover-image | col-12 | m-0 p-0 | justify-content-center'}>
                <img src={post.image.substr(post.image.indexOf('img'))} alt="project-cover-image" className={'col-12 | p-0'}/>
            </div>
            <div className={'project-content | row col-12 | m-0 p-0 | justify-content-center'}>
                <div className={'col-10 | p-0 mx-0 mt-3 mb-2'}>
                    <h4 className={'title | mb-1'}>{post.title.substring(0, 20)}...</h4>
                    <p className={'description'}>
                        {post.description.substring(0, 100)}...
                        <br/>
                        <span className={'show-more'} onClick={()=>getPost(post.id)}>Zisti viac kliknutím</span>
                    </p>
                </div>
            </div>
        </div>
    </div>;
};

