import React, {useEffect, useState} from "react";
import { Loader } from './Loader';
import { Post } from "./Post";
export const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`/api/news`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
            });
    }, [posts]);
    if(!posts){
        return <Loader />;
    }
    return (
        <div className={"posts row "}>
            <h2 className={"my-2 col-12 text-center"}>Aktuality</h2>
            <div className="data">
                {
                    posts.map((post, index) => {
                        return <Post
                            key={post[0].title}
                            title={post[0].title}
                            description={post[0].description}
                            image={post[0].image}
                            date={post[0].updated_at}
                            author={post[1]}
                            index={index}
                        />;
                    })
                }
            </div>
        </div>
    );
};

