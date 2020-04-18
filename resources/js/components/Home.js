import React, { useEffect, useState } from "react";
import {HomeOutlook} from './subpage/outlook/HomeOutlook';
import { Loader } from "./Utillities";
import { Project } from './subpage/Project';
import { navigate } from '@reach/router';


export const Home = ({_homeNewestPosts, getpost = f => f, project, author, closePost, changeSubpage}) => {
    const [post, setPost] = useState(null);

    const close = () => {
        $(".project-details-frame .project-content").animate(
            {
                marginTop: "100vh",
                easing: "easeInOutCirc"
            },
            1000
        );
        $(".project-details-frame").fadeToggle("slow", closePost);
    };

    useEffect(() => {
        if (_homeNewestPosts !== null) {
            setPost(_homeNewestPosts.slice(0, 3));
        }
    }, [_homeNewestPosts]);


    if (post !== null && post !== undefined) {

        return (
            <div className={`home container-fluid p-0 m-0`}>
                {
                    (project !== null && author !== null) ? (
                        <Project data={project} user={author} close={close}/>) : null
                }
                <div className="screen mb-md-5 mt-5 d-flex align-items-center">
                    <div className="row m-0 p-0">
                        <div className='col-xl-1'></div>
                        <div className="col-xl row m-0 p-0 pt-xl-4">
                            <div className="col-xl-5 offset-xl-0 offset-2 col-10  mt-md-1 mb-3 py-md-5 py-3 font-bold px-2 mx-xl-0">
                                <h1 className="silver-color home-main-title">smartcity.</h1>
                                <h1 className="primary-color home-main-title">prešov.</h1>
                            </div>
                            <div className="col-xl-6 col-8  m-0 p-0  row justify-content-center map-box mt-md-n5 my-5 ml-xl-5 mx-auto">
                                <div className="map-frame col-lg-10 mt-md-n5">
                                    <svg className="map" xmlns="http://www.w3.org/2000/svg" width="796.847" height="736.392" viewBox="0 0 796.847 736.392"><g transform="translate(-486.077 -163.367)"><circle cx="6" cy="6" r="6" transform="translate(846.077 232.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 173.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.531 203.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.531 203.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 232.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.077 232.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.531 203.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.531 203.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.077 232.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.077 232.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.531 203.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.077 232.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.077 232.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.077 232.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.077 232.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.077 232.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.077 232.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1206.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1177.531 262.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.531 323.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.531 382.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.077 352.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1206.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1177.077 293.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(546.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(666.077 472.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(666.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.077 413.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.531 443.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(697.531 443.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.077 472.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(697.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(697.077 472.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.077 413.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.531 443.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.531 443.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.077 413.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.077 472.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.077 472.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.077 413.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.531 443.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.531 443.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.077 413.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.077 472.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.077 472.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 413.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.531 443.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.531 443.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.077 413.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 472.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.077 472.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.077 472.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.077 413.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.077 413.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.077 413.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.531 443.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.077 413.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1206.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1177.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1237.531 502.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(546.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(546.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(517.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(546.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(546.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(517.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(517.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(606.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(606.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(577.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(577.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(606.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(606.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(577.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(577.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(666.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(666.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(637.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(637.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(666.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(666.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(637.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(637.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(697.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(697.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(697.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(697.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.531 563.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.531 622.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.077 592.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1206.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1177.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1237.077 533.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(486.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(486.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(486.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(546.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(546.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(517.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(517.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(546.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(546.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(517.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(517.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(606.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(606.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(577.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(577.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(606.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(606.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(577.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(577.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(666.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(666.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(637.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(637.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(666.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(666.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(637.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(637.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(697.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(697.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(697.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(697.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1086.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.077 653.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1146.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1117.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1206.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1177.531 683.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1206.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1206.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1177.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1177.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1266.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1237.531 742.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1237.077 712.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(606.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(606.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(577.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(666.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(637.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(637.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.077 832.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(726.531 862.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.077 832.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(786.531 862.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.531 862.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.077 832.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(846.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(817.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(877.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(966.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(937.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1026.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(997.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1057.531 803.633) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1206.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(1237.077 773.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(757.077 893.76) rotate(-60)" fill="#d61920"/><circle cx="6" cy="6" r="6" transform="translate(906.077 173.76) rotate(-60)" fill="#d61920"/></g></svg>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <p className=" col-xl-12 col-10 offset-xl-0 offset-2 home-main-text p-0 pr-5">
                                    Aj toto sú mnohé z aktuálných problémov, pre ktoré mesto Prešov pripravuje smart
                                    riešenia.
                                    <a className="d-block" href="">Klikni a zisti viac informácií.</a>
                                </p>
                            </div>

                            {
                                window.innerWidth <= 1200 ?
                                    <div className="col-12 d-flex justify-content-center my-5">
                                        <svg style={{transform: "scale(1)"}} xmlns="http://www.w3.org/2000/svg"
                                             width="55.795" height="27.898" viewBox="0 0 55.795 27.898">
                                            <path className="a"
                                                  d="M160.45,27.9,137.783,50.565V55.8l27.9-27.9L137.783,0V5.231Z"
                                                  transform="translate(55.795 -137.783) rotate(90)"/>
                                        </svg>
                                    </div>
                                    : <></>
                            }
                        </div>
                    </div>
                </div>
                <div className="screen row p-0 m-0 pb-5">
                    <div className="background-secondary m-0 p-0 col-12 row py-5 justify-content-lg-start justify-content-center">
                        <div className="col-lg-2 pb-4 text-center d-flex d-lg-flex align-items-center justify-content-center">
                            <h2 className="d-inline rotate partial-border font-bold m-0">SMARTCITY PREŠOV</h2>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-8 col-10 mx-0 row align-items-center text-center px-md-4 home-text">
                            <p className="col-12 p-0 m-0">
                                    Smart city je koncept, ktorý využíva digitálne, informačné a komunikačné technológie pre
                                    zvýšenie kvality života v mestách. Zameriava sa na efektívne využívanie súčasných a
                                    hľadanie nových zdrojov, znižovanie spotreby energií, elimináciu záťaží na životné prostredie,
                                    optimalizáciu dopravy a zdieľanie dát pre verejné účely.
                            </p>
                        </div>
                        {
                            window.innerWidth >= 1200 ?
                                <div className="col position-relative d-none d-xl-block">
                                    <div className="absolute-red"></div>
                                    <img className="absolute-img" src="./img/image 6.png" alt="presov"/>
                                </div>
                            : <></>
                        }
                    </div>
                    <div className="half-screen row">
                        <div className="col-xl-7 row pr-md-4">
                            <div className="col-12 align-items-center justify-content-end mb-3 mt-5 pt-4">
                                <h2 className="text-md-right  text-center pr-3 font-bold home-preparing">momentálne
                                    pripravujeme.</h2>
                            </div>
                            <div className="col-3 pt-5 d-flex">
                                <svg id="home-dots" xmlns="http://www.w3.org/2000/svg" width="215" height="157" viewBox="0 0 215 157">
                                    <g transform="translate(4.5 -1815.5)">
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(210.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(181.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(152.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(123.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(94.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(65.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(36.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1844.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1815.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1902.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1873.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1960.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                        <circle cx="6" cy="6" r="6" transform="translate(7.5 1931.5) rotate(90)"
                                                fill="#d3d2d2"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="col-9 row align-items-start justify-content-around justify-content-md-between">
                                <HomeOutlook post={post[0]} getPost={(id) => getpost(id)}></HomeOutlook>
                                {
                                    window.innerWidth >= 570 ? <HomeOutlook post={post[1]} getPost={(id) => getpost(id)}></HomeOutlook> : ``
                                }
                                {
                                    window.innerWidth >= 992 ? <HomeOutlook post={post[2]} getPost={(id) => getpost(id)}></HomeOutlook> : ``
                                }

                            </div>

                        </div>
                    </div>
                </div>
                <div className="my-md-5 pt-md-5">
                    <div className="row mt-md-4">
                        <div className="col-lg-2 text-center d-flex d-lg-block justify-content-center">
                            <h2 className="mx-md-5 mt-5 d-inline rotate partial-border font-bold">OBLASTI SMARTCITY PREŠOV</h2>
                        </div>
                        <div className='col-lg pr-0 m-0 pl-lg-5'>
                                <div className="row p-0 pl-lg-4 m-0 my-5 col-lg">
                                <div className="col-lg-6">
                                        <div className="row background-primary justify-content-center py-5">
                                        <div
                                                className=" col-4 background-white rounded-lg text-center mr-3 my-4 py-3 text-uppercase font-semibold home-cards align-items-center"
                                                onClick={()=>{navigate(`/mobilita`); changeSubpage()}}
                                        >
                                            <div className='col-12 row align-items-center h-100 m-0 p-0 justify-content-center'>
                                                <img alt={"cover news image"} className={'col-xl-8 col-lg-8 col-md-7 col-sm-6 col-8 | p-3'} src={`images/news/mobilita.svg`}/>
                                                <p className="col-12 p-0 m-0">mobilita</p>
                                            </div>
                                        </div>
                                        <div
                                                className=" col-4 background-white rounded-lg text-center ml-3 my-4 py-3 text-uppercase font-semibold home-cards "
                                                onClick={()=>{navigate(`/zivotne_prostredie`); changeSubpage()}}
                                        >
                                            <div className='col-12 row align-items-center justify-content-center h-100 m-0 p-0'>
                                                <img alt={"cover news image"} className={'col-xl-9 col-lg-9 col-md-8 col-sm-7 col-9 | p-3'} src={`images/news/zivotne_prostredie.svg`}/>
                                                <p className="col-12 p-0 m-0">životné prostredie</p>
                                            </div>
                                        </div>
                                        </div>
                                        {
                                        window.innerWidth >= 768 ?
                                                <>
                                                <div className="row d-none d-lg-flex">
                                                        <div className="col-8 font-bold primary-color home-title text-right pr-xl-4 pt-4">
                                                        riešime a realizujeme.
                                                        </div>
                                                        <div className="col-4 pl-3 pr-0 pt-2 d-flex align-items-start justify-content-end">
                                                            <svg style={{transform: "scale(.8)"}} xmlns="http://www.w3.org/2000/svg" width="215" height="70"
                                                                viewBox="0 0 215 70">
                                                                <g transform="translate(-1195.5 -2361.5)">
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1410.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1410.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1381.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1381.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1352.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1352.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1323.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1323.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1294.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1294.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1265.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1265.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1236.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1236.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1207.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1207.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1410.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1410.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1381.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1381.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1352.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1352.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1323.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1323.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1294.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1294.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1265.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1265.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1236.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1236.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1207.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1207.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                </g>
                                                        </svg>
                                                        </div>
                                                </div>
                                                </>
                                                : <></>
                                        }
                                </div>
                                <div className="col-lg-6">
                                        {
                                        window.innerWidth >= 768 ?
                                                <>
                                                <div className="row d-none d-lg-flex">
                                                        <div className="col-4 pl-2 pb-1 d-flex align-items-end">
                                                            <svg style={{transform: "scale(.8)"}} xmlns="http://www.w3.org/2000/svg" width="215" height="70"
                                                                viewBox="0 0 215 70">
                                                                <g transform="translate(-1195.5 -2361.5)">
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1410.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1410.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1381.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1381.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1352.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1352.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1323.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1323.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1294.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1294.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1265.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1265.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1236.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1236.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1207.5 2419.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1207.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1410.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1410.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1381.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1381.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1352.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1352.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1323.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1323.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1294.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1294.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1265.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1265.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1236.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1236.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1207.5 2390.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                <circle cx="6" cy="6" r="6"
                                                                        transform="translate(1207.5 2361.5) rotate(90)"
                                                                        fill="#d3d2d2"/>
                                                                </g>
                                                        </svg>
                                                        </div>
                                                        <div className="col-8 h4 font-bold pl-0 pr-xl-5 pt-2 text-right home-title">
                                                        a týmto sa zaoberáme.
                                                        </div>
                                                </div>
                                                </>
                                                : <></>
                                        }
                                        <div className="row background-secondary justify-content-center py-5">
                                        <div
                                                className="col-4 background-white rounded-lg text-center mr-3 my-4 py-3 text-uppercase font-semibold home-cards align-items-center"
                                                onClick={()=>{navigate(`/digitalne_mesto`); changeSubpage()}}>
                                                <div className='col-12 row align-items-center h-100 m-0 p-0 justify-content-center'>
                                                        <img alt={"cover news image"} className={'col-xl-9 col-lg-9 col-md-8 col-sm-7 col-9 | p-3'} src={`images/news/digitalne_mesto.svg`}/>
                                                        <p className="col-12 p-0 m-0">DIGITÁLNE MESTO</p>
                                                </div>
                                        </div>
                                        <div
                                                className="col-4 background-white rounded-lg text-center ml-3 my-4 py-3 text-uppercase font-semibold home-cards align-items-center"
                                                onClick={()=>{navigate(`/energia`); changeSubpage()}}>
                                                <div className='col-12 row align-items-center justify-content-center h-100 m-0 p-0'>
                                                    <img alt={"cover news image"} className={'col-xl-9 col-lg-9 col-md-8 col-sm-7 col-9 | p-3'} src={`images/news/energia.svg`}/>
                                                    <p className="col-12 p-0 m-0">energia</p>
                                                </div>
                                        </div>
                                        </div>
                                </div>
                             </div>

                        </div>

                    </div>
                    <div className="row my-md-5 py-md-5 pl-1">
                        <div className="col-lg-2 row text-center d-flex d-lg-block justify-content-lg-center mt-5">
                            <div className="col-lg col-7 d-flex d-lg-block justify-content-end m-0 p-0">
                                <h2 className="mx-md-5 mt-md-5 d-inline rotate partial-border font-bold">PARTNERI</h2>
                            </div>
                            {
                                window.innerWidth <= 768 ?
                                    <>
                                        <div className="col-5 d-xl-flex d-lg-flex d-md-flex d-none">
                                            <svg style={{transform: "scale(.5) translateY(-75%)"}}
                                                 xmlns="http://www.w3.org/2000/svg" width="215" height="161"
                                                 viewBox="0 0 215 161">
                                                <g transform="translate(-1573.5 -3252.5)">
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3401.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3372.5) rotate(90)"
                                                            fill="#d31920"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3341.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3312.5) rotate(90)"
                                                            fill="#191919"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1788.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1759.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1730.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1701.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1672.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1643.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1614.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3281.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                    <circle cx="6" cy="6" r="6"
                                                            transform="translate(1585.5 3252.5) rotate(90)"
                                                            fill="#d3d2d2"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </>
                                    : <></>
                            }
                        </div>
                        <div className='col row justify-content-center'>
                                <div className="row mt-md-5 pt-5 col-lg-11 m-0 p-0 sponsors">
                                        <div className="col-md-3 text-center">
                                                <img className="" src="./img/Image 7.png" alt="partneri"/>
                                        </div>
                                        {
                                                window.innerWidth >=768 ?
                                                <>
                                                    <div className="col-md-6 d-none d-md-flex">
                                                        <img className="" src="./img/Image 8.png" alt="partneri"/>
                                                    </div>
                                                </>:<></>
                                        }
                                    {
                                        window.innerWidth >= 992 ?
                                            <>
                                                <div className="col-md-3 row align-content-center justify-content-center d-none d-lg-flex">
                                                    <svg className='col' transform="scale(.75)" xmlns="http://www.w3.org/2000/svg" width="215"
                                                         height="161" viewBox="0 0 215 161">
                                                        <g transform="translate(-1573.5 -3252.5)">
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1788.5 3401.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1788.5 3372.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1759.5 3401.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1759.5 3372.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1730.5 3401.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1730.5 3372.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1701.5 3401.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1701.5 3372.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1672.5 3401.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1672.5 3372.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1643.5 3401.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1643.5 3372.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1614.5 3401.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1614.5 3372.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1585.5 3401.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1585.5 3372.5) rotate(90)"
                                                                    fill="#d31920"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1788.5 3341.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1788.5 3312.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1759.5 3341.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1759.5 3312.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1730.5 3341.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1730.5 3312.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1701.5 3341.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1701.5 3312.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1672.5 3341.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1672.5 3312.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1643.5 3341.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1643.5 3312.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1614.5 3341.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1614.5 3312.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1585.5 3341.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1585.5 3312.5) rotate(90)"
                                                                    fill="#191919"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1788.5 3281.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1788.5 3252.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1759.5 3281.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1759.5 3252.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1730.5 3281.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1730.5 3252.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1701.5 3281.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1701.5 3252.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1672.5 3281.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1672.5 3252.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1643.5 3281.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1643.5 3252.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1614.5 3281.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1614.5 3252.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1585.5 3281.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                            <circle cx="6" cy="6" r="6"
                                                                    transform="translate(1585.5 3252.5) rotate(90)"
                                                                    fill="#d3d2d2"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </>
                                            : <></>
                                    }

                                </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    return <Loader />;
};
