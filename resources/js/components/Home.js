import React from "react";
import { Editor } from '@tinymce/tinymce-react';
export const Home =() => {

    return (
        <div className="App" style={{width: '100vw', height : '100vh'}}>
            <div className={` row col-7`}>
                <div className={` subpage-content | row col-12 | justify-content-center | align-items-start`}>
                    <h1 className={` title | col-xl-12 col-lg-12 col-11 | mt-4 | text-center`}>Co je Smart City.</h1>
                    <p className={` description | col-xl-12 col-lg-12 col-11 | mt-5 | text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet urna vel quam fermentum scelerisque. Praesent a ullamcorper ex, vitae accumsan enim. Etiam vel tortor at nisi placerat mollis. Vivamus interdum, augue feugiat egestas ultrices, libero arcu laoreet ex, at rutrum turpis orci et nisl. Quisque tincidunt elit vel pharetra fermentum. Morbi ultrices laoreet est, sit amet lacinia libero dictum sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis maximus purus vitae velit rhoncus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                    <div className={` projects-frame | row col-xl-12 col-lg-12 col-11 | justify-content-center `}>
                        <h3 className={`projects-title | col-12 | my-5 p-0`}>projekty smartcity prešov</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

