import React from "react";

export const HomeOutlook = ({post, getPost = f => f}) => {

    return <div className={'news-outlook-frame | row col-lg-4 col-sm-5 col-8 | mx-0 my-2 p-0 | justify-content-center'}>
            <div className={'news-outlook | row col-xl-11 col-lg-11 col-md-11 col-11 | m-0 p-0'}>
                <div className={'news-cover-icon | row col-12 | m-0 p-0 | justify-content-center'}>
                    {
                        post.subpage_id == 1 ? <img alt={"cover news image"} className={'col-5 | px-2 py-3'} src={`images/news/mobilita.svg`}/> : null
                    }
                    {
                        post.subpage_id == 2 ? <img alt={"cover news image"} className={'col-5 | px-2 py-3'} src={`images/news/zivotne_prostredie.svg`}/> : null
                    }
                    {
                        post.subpage_id == 3 ? <img alt={"cover news image"} className={'col-7 | px-2 py-3'} src={`images/news/digitalne_mesto.svg`}/> : null
                    }
                    {
                        post.subpage_id == 4 ? <img alt={"cover news image"} className={'col-6 | px-2 py-4'} src={`images/news/energia.svg`}/> : null
                    }


                </div>
                <div className={'news-content | row col-12 | m-0 p-0 | justify-content-center'}>
                    <p className={'col-12 | px-4 py-3 m-0'}>
                        {post.description.substring(0, 70)}...
                        <br/>
                        <span className={'show-more'} onClick={()=>getPost(post.id)}>Zisti viac kliknutím</span>
                    </p>
                </div>
            </div>
        </div>;
};
