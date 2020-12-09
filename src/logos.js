import React, { Component } from 'react';
import './logos.scss';
import wordmarkWhite from './images/logos/wordmark-white.svg';
import compactWhite from './images/logos/compact-white.svg';
import wordmarkBlack from './images/logos/wordmark-black.svg';
import compactBlack from './images/logos/compact-black.svg';
import wordmarkSpacing from './images/logos/wordmark-spacing.svg';
import compactSpacing from './images/logos/compact-spacing.svg';
import lightOnDark from './images/logos/light-on-dark.svg';
import darkOnLight from './images/logos/dark-on-light.svg';
import compactLightOnDark from './images/logos/compact-light-on-dark.svg';
import compactDarkOnLight from './images/logos/compact-dark-on-light.svg';
import tooCloseLogo from './images/logos/too-close-logo.svg';
import colouredLogos from './images/logos/coloured-logos.svg';
import distoredLogos from './images/logos/distorted-logo.svg';

export class Logos extends Component {
    render() {
        return (
             <>
            <div className="logos__img-page-ctn-home">
                <div className="logos__inner-page-ctn">
                    
    
                    <div className="logos__intro-ctn">
                        <div className="logos__txt-ctn">
                            <span className="logos__main-title">Logos</span>
                        </div>
                    </div>
                </div>
            </div>
    
    
            <div className="logos__page-ctn">
                <div className="logos__inner-page-ctn">
                        <div className="logos__inner-row">

                            <div className="logos__small-ctn">
                                <span className="logos__txt">Wordmark</span>
                                <div className="logos__divider-small"></div>
                                <div className="logos__img-ctn">
                                    <img className="logos__logo-wordmark" alt="wordmark logo white" src={wordmarkWhite}/>
                                </div>
                            </div>

                            <div className="logos__small-ctn">
                                <span className="logos__txt">Compact</span>
                                <div className="logos__divider-small"></div>
                                <div className="logos__img-ctn">
                                    <img className="logos__logo" alt="wordmark logo white" src={compactWhite}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* <div className="logos__divider"></div> */}
    
    <div className="logos__page-ctn-light">
        <div className="logos__inner-page-ctn">
            
                <div className="logos__inner-row">

                    <div className="logos__small-ctn">
                        <span className="logos__txt-dark">Wordmark Light Background</span>
                        <div className="logos__divider-small-dark"></div>
                        <div className="logos__img-ctn">
                            <img className="logos__logo-wordmark" alt="wordmark logo white" src={wordmarkBlack}/>
                        </div>
                    </div>

                    <div className="logos__small-ctn">
                        <span className="logos__txt-dark">Compact Light Background</span>
                        <div className="logos__divider-small-dark"></div>
                        <div className="logos__img-ctn">
                        <img className="logos__logo" alt="wordmark logo white" src={compactBlack}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="logos__page-ctn">
                <div className="logos__inner-page-ctn">
                        <div className="logos__inner-row">

                            <div className="logos__med-ctn">
                                <span className="logos__txt">Spacing</span>
                                    <div className="logos__divider-small"></div>

                                    <div className="logos__content-ctn">
                                        <div className="logos__med-ctn-1">
                                            <img className="logos__wordmark-spacing" alt="wordmark logo white" src={wordmarkSpacing}/>
                                            <img className="logos__wordmark-spacing" alt="wordmark logo white" src={compactSpacing}/>

                                        </div>


                                        <div className="logos__med-ctn-2">
                                            <span className="logos__body-txt">
                                                The Kepler logo should always be given breathing room. <br></br>
                                                Use this guide when determining how much space
                                                around the logo is necessary. 
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="logos__page-ctn">
                <div className="logos__inner-page-ctn">
                        <div className="logos__inner-row">

                            <div className="logos__med-ctn">
                                <span className="logos__txt">Do's</span>
                                    <div className="logos__divider-small"></div>

                                    <div className="logos__content-ctn">
                                        <div className="logos__med-ctn-1">
                                            <img className="logos__wordmark-spacing" alt="wordmark logo white" src={lightOnDark}/>
                                        </div>

                                        <div className="logos__med-ctn-1">
                                            <img className="logos__wordmark-spacing" alt="wordmark logo white" src={darkOnLight}/>
                                        </div>
                                        <div className="logos__med-ctn-2">
                                            <span className="logos__body-txt margin-top-2">
                                                Use the Kepler logo on a dark grey or black background when possible.<br></br>
                                                Use the full wordmark version of the logo when possible. When there is a enough space to 
                                                use the wordmark logo, do that. 
                                            </span>
                                        </div>
                                    </div>

                                    <div className="logos__content-ctn">
                                        <div className="logos__med-ctn-1">
                                            <img className="logos__compact" alt="wordmark logo white" src={compactLightOnDark}/>
                                            <img className="logos__compact" alt="wordmark logo white" src={compactDarkOnLight}/>
                                        </div>
 
                                        <div className="logos__med-ctn-2">
                                            <span className="logos__body-txt margin-top-2">
                                                When filling a space that is small or has close to square/cicurlar dimensions, use the compact logo version.
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                            <div className="logos__page-ctn">
                            <div className="logos__inner-page-ctn">
                                
                                    <div className="logos__inner-row">

                                        <div className="logos__med-ctn">
                                            <span className="logos__txt">Do Not's</span>
                                            <div className="logos__divider-small"></div>
                                            <span className="logos__body-txt">
                                                Do not use Kepler logo in very close proximity to other logos or elements. 
                                                Use the guides above for assistance with spacing.
                                            </span>
                                            <div className="logos__img-ctn">
                                                <img className="logos__donts" alt="wordmark logo white" src={tooCloseLogo}/>
                                            </div>

                                            <span className="logos__body-txt">
                                                Do not alter the colour or shape of the logo in any way.
                                                If there is a large space, use the standard wordmark and in a smaller 
                                                space use the compact version.
                                            </span>
                                            <div className="logos__img-ctn">
                                                <img className="logos__donts" alt="wordmark logo white" src={colouredLogos}/>
                                                <img className="logos__donts" alt="wordmark logo white" src={distoredLogos}/>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
            </>
            )
    }
}

export default Logos


