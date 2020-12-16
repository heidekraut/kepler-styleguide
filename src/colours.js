import React, { Component } from 'react';
import './colours.scss';
import colours from './images/colours/all-colours.png';
import colour1 from './images/colours/colour-1.png';
import colour2 from './images/colours/colour-2.png';
import colour3 from './images/colours/colour-3.png';
import colour4 from './images/colours/colour-4.png';
import colour5 from './images/colours/colour-5.png';
import colour6 from './images/colours/colour-6.png';



export class Colours extends Component {
    render() {
        return (
            <>
            <div className="colours__img-page-ctn-colours">
                <div className="colours__inner-page-ctn">
    
                    <div className="colours__intro-ctn">
                        <div className="colours__txt-ctn">
                            <span className="colours__main-title">Colours</span>
                        </div>
                    </div>
                </div>
            </div>


        <div className="colours__page-ctn">
                <div className="colours__inner-page-ctn">
                        <div className="colours__inner-row">

                            <div className="colours__med-ctn">
                                <span className="colours__subtitle">The Kepler Colour Story</span>
                                <div className="colours__divider-small"></div>
                                <span className="colours__body-txt">
                                    Black, Grey, White &amp; Blue. It's important to get the correct colour when creating branded items. The main colours of the Kepler
                                    brand are black, dark grey and white. Blue is added sparingly for a pop of colour.
                                </span>
                                <div className="colours__img-ctn">
                                    <img className="colours__img-colours" alt="wordmark logo white" src={colours}/>
                                    <div className="colours__swatch-ctn">
                                    <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour1}/>
                                    <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour2}/>
                                    <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour3}/>
                                    <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour4}/>
                                    <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour5}/>
                                    <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour6}/>
                                </div>
                                </div>

                            </div>

                        </div>
                                

                        <div className="colours__inner-row margin-top-3">
                            <div className="colours__med-ctn">
                                <span className="colours__subtitle">Black</span>
                                <div className="colours__divider-small"></div>
                                <span className="colours__body-txt">
                                Black is an official colour of the Kepler logo. 
                                Black should be used sparingly as a background because it creates too much contrast with 
                                white text. It's acceptable to use in smaller portions of an interface or 
                                composition when there needs to be differentiation from the main background.
                                black navbar of this page is an example of that.
                                </span>
                                <div className="images__content-ctn">
                                <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour1}/>
                                </div>
                            </div>
                        </div>

                        <div className="colours__inner-row margin-top-3">

                            <div className="colours__med-ctn">
                                <span className="colours__subtitle">Dark Greys</span>
                                <div className="colours__divider-small"></div>
                                <span className="colours__body-txt">
                                These dark greys are the most prominent Kepler colours. 
                                They are often used as backgrounds for a variety of applications,
                                including internal and external digital platforms, as well as printed materials.
                                It is important to use dark grey instead of black for main backgrounds to cut 
                                down on some contrast.
                                </span>
                                <div className="images__content-ctn">
                                <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour2}/>
                                <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour3}/>
                                </div>
                            </div>
                        </div>

                        <div className="colours__inner-row margin-top-3">
                            <div className="colours__med-ctn">
                                <span className="colours__subtitle">Medium Greys</span>
                                <div className="colours__divider-small"></div>
                                <span className="colours__body-txt">
                                Medium greys are used as linking colours to cut down the stark contrast between 
                                black and dark grey and white. 
                                </span>
                                <div className="images__content-ctn">
                                <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour4}/>
                                </div>
                            </div>
                        </div>
                        <div className="colours__inner-row margin-top-3">
                            <div className="colours__med-ctn">
                                <span className="colours__subtitle">White</span>
                                <div className="colours__divider-small"></div>
                                <span className="colours__body-txt">
                                White is used often as an accent. 
                                White is used often for text colour, both titles and body text, when 
                                dark backgrounds are being used. 
                                White is one of the standard colours of the Kepler logo.
                                </span>
                                <div className="images__content-ctn">
                                <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour5}/>
                                </div>
                            </div>
                        </div>
                        <div className="colours__inner-row margin-top-3">
                            <div className="colours__med-ctn">
                                <span className="colours__subtitle">Blue</span>
                                <div className="colours__divider-small"></div>
                                <span className="colours__body-txt">
                                White is used often as an accent. 
                                White is used often for text colour, both titles and body text, when 
                                dark backgrounds are being used. 
                                White is one of the standard colours of the Kepler logo.
                                </span>
                                <div className="images__content-ctn">
                                <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour6}/>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </>
        )
    }
}

export default Colours
