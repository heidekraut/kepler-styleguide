import React, { Component } from 'react';
import './type.scss';
import wordmarkBlack from './images/logos/wordmark-black.svg';
import wordmarkSpacing from './images/logos/wordmark-spacing.svg';
import compactSpacing from './images/logos/compact-spacing.svg';
import lightOnDark from './images/logos/light-on-dark.svg';
import darkOnLight from './images/logos/dark-on-light.svg';
import compactLightOnDark from './images/logos/compact-light-on-dark.svg';
import compactDarkOnLight from './images/logos/compact-dark-on-light.svg';
import btParagraph from './images/logos/bt-paragraph.svg';
import btParagraphCorrect from './images/logos/bt-paragraph-correct.svg';

export class Type extends Component {
    render() {
        return (
            <>
            <div className="type__img-page-ctn-type">
                <div className="type__inner-page-ctn">
                    
    
                    <div className="type__intro-ctn">
                        <div className="type__txt-ctn">
                            <span className="type__main-title">Typefaces</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="type__page-ctn">
                <div className="type__inner-page-ctn">
                        <div className="type__inner-row">

                            <div className="type__med-ctn">
                                <span className="type__subtitle">Title Font</span>
                                <div className="type__divider-small"></div>
                                <div className="type__txt-ctn">
                                <span className="type__txt-BT-Xlarge">Built Titling light</span>
                                    <span className="type__txt-BT">A B C D E F</span>
                                    <span className="type__txt-BT">1 2 3 4 5 6  &amp; ! % </span>
                                    <span className="type__txt-BT">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
                                    </div>
                                </div>
                        </div>
                        <div className="type__inner-row">
                        <div className="type__med-ctn margin-top-2">
                            <span className="type__subtitle">Usage Details - Titles Only</span>

                            <div className="type__divider-small"></div>
                            <span className="type__body-txt">
                                    Built Titling should only be used in titles.
                                    Do not use Built Titling in subtitles or body text.
                            </span>

                            
                            
                                <div className="type__txt-ctn">

                                </div>
                                <div className="type__img-ctn">
                                    <img className="type__img-large" alt="correct paragraph" src={btParagraphCorrect}/>
                                </div>
                                <div className="type__img-ctn">
                                    <img className="type__img-large" alt="incorrect paragraph" src={btParagraph}/>
                                </div>


                                <span className="type__txt margin-top-2">Usage Details - Size &amp; Kerning</span>
                                <div className="type__divider-small margin-05"></div>
                                <span className="type__body-txt">
                                    Built Titling should be large and spaced. Built Titling 
                                    is not legible enough if it is too small, or if the letters, 
                                    and line heights are not correctly spaced.
                                </span>
                                <span className="type__body-txt">
                                    Do not use Built Titling under 20pt. In CSS, use a letter spacing of
                                    1px. Line height is not necessary because there should not be more
                                    than one line of Built Titling.
                            </span>


                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className="type__page-ctn">

                </div>





    
    <div className="type__page-ctn-light">
        <div className="type__inner-page-ctn">
            
                <div className="type__inner-row">

                    <div className="type__med-ctn">
                        <span className="type__txt-dark">Helvetica Neue Thin</span>
                        <div className="type__divider-small-dark"></div>
                        <div className="type__img-ctn">
                            <img className="type__logo-wordmark" alt="wordmark logo white" src={wordmarkBlack}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="type__page-ctn">
                <div className="type__inner-page-ctn">
                        <div className="type__inner-row">

                            <div className="type__med-ctn">
                                <span className="type__txt">Spacing</span>
                                    <div className="type__divider-small"></div>

                                    <div className="type__content-ctn">
                                        <div className="type__med-ctn-1">
                                            <img className="type__wordmark-spacing" alt="wordmark logo white" src={wordmarkSpacing}/>
                                            <img className="type__wordmark-spacing" alt="wordmark logo white" src={compactSpacing}/>

                                        </div>


                                        <div className="type__med-ctn-2">
                                            <span className="type__body-txt">
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

                <div className="type__page-ctn">
                <div className="type__inner-page-ctn">
                        <div className="type__inner-row">

                            <div className="type__med-ctn">
                                <span className="type__txt">Dos and Don'ts</span>
                                    <div className="type__divider-small"></div>

                                    <div className="type__content-ctn">
                                        <div className="type__med-ctn-1">
                                            <img className="type__wordmark-spacing" alt="wordmark logo white" src={lightOnDark}/>
                                        </div>

                                        <div className="type__med-ctn-1">
                                            <img className="type__wordmark-spacing" alt="wordmark logo white" src={darkOnLight}/>
                                        </div>
                                        <div className="type__med-ctn-2">
                                            <span className="type__body-txt margin-top-2">
                                                Use the Kepler logo on a dark grey or black background when possible.<br></br>
                                                Use the full wordmark version of the logo when possible. When there is a enough space to 
                                                use the wordmark logo, do that. 
                                            </span>
                                        </div>
                                    </div>

                                    <div className="type__content-ctn">
                                        <div className="type__med-ctn-1">
                                            <img className="type__wordmark-spacing" alt="wordmark logo white" src={compactLightOnDark}/>
                                            <img className="type__wordmark-spacing" alt="wordmark logo white" src={compactDarkOnLight}/>
                                        </div>
 
                                        <div className="type__med-ctn-2">
                                            <span className="type__body-txt margin-top-2">
                                                When filling a space that is small or has close to square/cicurlar dimensions, use the compact logo version.
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>





            </>
        )
    }
}

export default Type
