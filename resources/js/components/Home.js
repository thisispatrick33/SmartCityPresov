import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import { Project } from "./subpage/Project";

export const Home = () => {
    const [post, setPost] = useState([]);
    const [project, setProject] = useState(null);
    const [author, setAuthor] = useState([]);

    const getPost = () => {
        axios.get("/api/post").then(res => {
            setPost(res.data);
        });
    };

    const handleGet = _id => {
        // kiko was here
        fetch(`/api/post/${_id}`)
            .then(response => response.json())
            .then(postData => {
                setProject(postData);
                console.log(postData);
                fetch(`/api/author/${postData.user_id}`)
                    .then(response => response.json())
                    .then(({ data }) => {
                        setAuthor(data);
                    });
            });
    };
    const close = () => {
        $(".project-details-frame .project-content").animate(
            {
                marginTop: "100vh",
                easing: "easeInOutCirc"
            },
            1000
        );
        $(".project-details-frame").fadeToggle("slow", () => setProject(null));
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className="App" style={{ width: "100vw", height: "100vh" }}>
            <div className={` row col-7`}>
                <div
                    className={` subpage-content | row col-12 | justify-content-center | align-items-start`}
                >
                    <h1
                        className={` title | col-xl-12 col-lg-12 col-11 | mt-4 | text-center`}
                    >
                        Co je Smart City.
                    </h1>
                    <p
                        className={` description | col-xl-12 col-lg-12 col-11 | mt-5 | text-center`}
                    >
                        Ut nemo quia aliquam omnis vero quidem. Repudiandae et
                        laboriosam corrupti architecto laborum laboriosam quo
                        quasi. Facere earum architecto voluptates placeat
                        praesentium eveniet enim. Dolor deleniti et dolorem nisi
                        dolore deserunt nulla est.
                    </p>
                    <div
                        className={` projects-frame | row col-xl-12 col-lg-12 col-11 | justify-content-center `}
                    >
                        <h3 className={`projects-title | col-12 | my-5 p-0`}>
                            projekty smartcity prešov
                        </h3>
                        <div className="col-12 row projects p-0 align-items-start">
                            {post.map(
                                ({
                                    id,
                                    title,
                                    description,
                                    user,
                                    image,
                                    updated_at
                                }) => {
                                    let written = new Date(
                                        updated_at.replace(" ", "T")
                                    );
                                    return (
                                        <div
                                            onClick={() => handleGet(id)}
                                            className={`project-frame | row col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 | justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center | mb-4 p-0`}
                                            key={id}
                                        >
                                            <div
                                                className={`shadow project | row col-10 | align-items-start | p-0 `}
                                            >
                                                <div
                                                    className={`row col-12 | p-0 `}
                                                >
                                                    <div
                                                        className={`col-12 | p-0`}
                                                    >
                                                        <img
                                                            src={`../${image.substr(
                                                                image.indexOf(
                                                                    "img"
                                                                )
                                                            )}`}
                                                            alt=""
                                                            className={`col-12 | p-0`}
                                                            style={{
                                                                borderRadius:
                                                                    "10px 10px 0 0"
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <h3
                                                    className={`col-12 | mt-3 py-0 px-3`}
                                                >
                                                    {title}
                                                </h3>
                                                <p
                                                    className={`col-12 | mb-0 py-0 px-3`}
                                                >
                                                    {description.substring(
                                                        0,
                                                        50
                                                    )}
                                                </p>
                                                <p
                                                    className={`col-12 | mb-3 py-0 px-3`}
                                                >
                                                    <a className={"read_more"}>
                                                        Objav viac
                                                    </a>
                                                </p>
                                                <p
                                                    className={`col-12 | mb-0 py-0  px-3`}
                                                >
                                                    <span>Dátum : </span>
                                                    {String(
                                                        new Date(
                                                            written
                                                        ).getDay()
                                                    ) +
                                                        `/` +
                                                        (new Date(
                                                            written
                                                        ).getMonth() +
                                                            1) +
                                                        `/` +
                                                        new Date(
                                                            written
                                                        ).getFullYear()}
                                                </p>
                                                <p
                                                    className={`col-12 | py-0 px-3`}
                                                >
                                                    <span>Autor : </span>
                                                    {user.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                        {project !== null ? (
                            <Project
                                data={project}
                                user={author}
                                close={close}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
