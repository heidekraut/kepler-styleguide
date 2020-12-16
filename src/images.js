import React, { Component } from 'react';
import "./images.scss";
import logistics from './images/images/logistics.jpg';
import polarSatellite from './images/images/polar-satellite.jpg';
import agriculture from './images/images/agriculture.jpg';
import helicopter from './images/images/helicopter.jpg';
import space1 from './images/images/space-1.jpg';
import space2 from './images/images/space-2.jpg';
import space3 from './images/images/space-4.jpg';
import tech1 from './images/images/tech-2.jpg';
import tech2 from './images/images/tech-3.jpg';
import coolTone from './images/images/cool-tone.jpg';
import warmTone from './images/images/warm-tone.jpg';
import coolTone2 from './images/images/cool-tone-2.jpg';
import warmTone2 from './images/images/warm-tone-2.jpg';
import vignette from './images/images/vignette.jpg';
import noVignette from './images/images/no-vignette.jpg';
import vignette2 from './images/images/vignette-2.jpg';
import noVignette2 from './images/images/no-vignette-2.jpg';
import overlayFull from './images/images/overlay-full.jpg';
import overlayFull2 from './images/images/overlay-full-2.jpg';
import overlayHalf from './images/images/overlay-half.jpg';
import overlayHalf2 from './images/images/overlay-half-2.jpg';
import culture1 from './images/images/team-1.jpg';
import culture2 from './images/images/team-2.jpg';
import culture3 from './images/images/team-3.jpg';
import culture4 from './images/images/team-4.jpg';




export class Images extends Component {
    render() {
        return (
<>

            <div className="images__img-page-ctn-images">
                <div className="images__inner-page-ctn">
                    <div className="images__intro-ctn">
                        <div className="images__txt-ctn">
                            <span className="images__main-title">IMAGES</span>
                        </div>
                    </div>
                </div>
            </div>


        <div className="images__page-ctn">
                <div className="images__inner-page-ctn">

                <div className="images__inner-row">

                    <div className="images__med-ctn">
                        <span className="images__subtitle">Acceptable Imagery</span>
                        <div className="images__divider-small"></div>
                        <span className="images__body-txt margin-bottom-4">
                            Using the right imagery is key to Kepler's brand. The right
                            imagery can make or break a piece of visual content. Use the guides below to help you
                            understand what imagery is right for the Kepler brand and what does not fit.
                        </span>
                    </div>
                    </div>
                        <div className="images__inner-row">
                            <div className="images__med-ctn">
                                <span className="images__subtitle">Industry &amp; Landscape</span>
                                <div className="images__divider-small"></div>
                                <span className="images__body-txt">
                                    Images of the industries that Kepler serves and has the ability to serve 
                                    make up a large percentage of the Kepler brand.
                                </span>
                                <div className="images__content-ctn">
                                    <img className="images__img-example" alt="wordmark logo white" src={logistics}/>
                                    <img className="images__img-example" alt="wordmark logo white" src={polarSatellite}/>
                                    <img className="images__img-example" alt="wordmark logo white" src={agriculture}/>
                                    <img className="images__img-example" alt="wordmark logo white" src={helicopter}/>
                                </div>
                            </div>
                        </div>
                        <div className="images__inner-row">
                            <div className="images__med-ctn">
                                <span className="images__subtitle margin-top-2">Culture &amp; Team</span>
                                <div className="images__divider-small"></div>
                                <span className="images__body-txt margin-bottom-1">
                                    Pictures of the Kepler team are great to show off Kepler's culture.

                                    The best images to use are candid photos with team members conversing or working.

                                    Planned team photos are great to use in situations to celebrate an event or something similar, but 
                                    candid photos should be used for branded elements.
                                </span>

                                <span className="images__body-txt">
                                    IMPORTANT: All photos that include technology MUST BE APPROVED before use. 
                                </span>
                                <div className="images__content-ctn">
                                    <img className="images__img-example" alt="wordmark logo white" src={culture1}/>
                                    <img className="images__img-example" alt="wordmark logo white" src={culture2}/>
                                    <img className="images__img-example" alt="wordmark logo white" src={culture3}/>
                                    <img className="images__img-example" alt="wordmark logo white" src={culture4}/>
                                </div>
                            </div>
                        </div>

                        <div className="images__inner-row">
                            <div className="images__med-ctn">
                                <span className="images__subtitle margin-top-2">Space &amp; Technology</span>
                                <div className="images__divider-small"></div>
                                <span className="images__body-txt">
                                    Space images should be used sparingly. Space images that do not
                                    include heavy editing or graphic additions are favoured, as well as ones that
                                    include natural elements like forests, mountains, or snow/ice.
                                </span>
                                <div className="images__content-ctn">
                                    <img className="images__img-example" alt="wordmark logo white" src={space1}/>
                                    <img className="images__img-example" alt="wordmark logo white" src={space2}/>
                                    <img className="images__img-example" alt="wordmark logo white" src={space3}/>
                                    <img className="images__img-example" alt="wordmark logo white" src={tech1}/>
                                    <img className="images__img-example" alt="wordmark logo white" src={tech2}/>
                                </div>
                            </div>
                        </div>
                    
                    <div className="images__med-ctn">
                        <span className="images__subtitle margin-top-3">Image Editing</span>
                        <div className="colours__divider-small"></div>
                        <span className="images__body-txt margin-bottom-4">
                        Kepler images should almost always be edited to match branding colour scheme before being used for external purposes. 
                        </span>
                    </div>
                    <div className="images__inner-row">
                            <div className="images__med-ctn">
                                <span className="images__subtitle margin-top-2">Colour &amp; Contrast</span>
                                <div className="images__divider-small"></div>
                                <span className="images__body-txt">
                                Kepler images are cool-toned &amp; high contrast.
                                </span>

                                <div className="images__content-ctn">
                                    <div className="images__subtitle-ctn">
                                        <span className="images__body-txt">
                                            Cool vs. Warm Toned Images
                                        </span>
                                    </div>
                                        <div>
                                            <img className="images__img-example" alt="wordmark logo white" src={coolTone}/>
                                            <img className="images__img-example" alt="wordmark logo white" src={warmTone}/>
                                        </div>
                                </div>
                                <div>
                                    <img className="images__img-example" alt="wordmark logo white" src={coolTone2}/>
                                    <img className="images__img-example" alt="wordmark logo white" src={warmTone2}/>
                                </div>
                            </div>
                        </div>
  
                        <div className="images__inner-row">
                            <div className="images__med-ctn">
                                <span className="images__subtitle margin-top-2">Vignette</span>
                                <div className="images__divider-small"></div>
                                <span className="images__body-txt">
                                Vignette vs. None - Vignettes should not be obvious and it is not necessary on all images.
                                </span>
                                    <div>
                                        <img className="images__img-example" alt="wordmark logo white" src={vignette}/>
                                        <img className="images__img-example" alt="wordmark logo white" src={noVignette}/>
                                    </div>
                                    <div>
                                        <img className="images__img-example" alt="wordmark logo white" src={vignette2}/>
                                        <img className="images__img-example" alt="wordmark logo white" src={noVignette2}/>
                                    </div>
                            </div>
                        </div>
                        <div className="images__inner-row">
                            <div className="images__med-ctn">
                                <span className="images__subtitle margin-top-2">Overlays</span>
                                <div className="images__divider-small"></div>
                                <span className="images__body-txt">
                                Kepler images can be overlayed to create the possibility for added text.
                                Overlays can be used over the whole image or over part of the image with a gradient.
                                </span>
                                <div>
                                        <img className="images__img-example" alt="wordmark logo white" src={overlayFull}/>
                                        <img className="images__img-example" alt="wordmark logo white" src={overlayFull2}/>
                                    </div>
                                    <div>
                                        <img className="images__img-example" alt="wordmark logo white" src={overlayHalf}/>
                                        <img className="images__img-example" alt="wordmark logo white" src={overlayHalf2}/>
                                    </div>
                            </div>
                        </div>
                </div>
                </div>


</>
        )
    }
}

export default Images
