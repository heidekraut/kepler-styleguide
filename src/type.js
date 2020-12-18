import React, { Component } from 'react';
import './type.scss';
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


                                <span className="type__subtitle margin-top-2">Usage Details - Size &amp; Kerning</span>
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
                <div className="type__inner-page-ctn">
                        <div className="type__inner-row">

                            <div className="type__med-ctn">
                                <span className="type__subtitle">Body Font</span>
                                <div className="type__divider-small"></div>
                                <div className="type__txt-ctn">
                                    <span className="type__body-txt-example-large">Helvetica Neue Thin</span>
                                    <span className="type__body-txt-example">A B C D E F</span>
                                    <span className="type__body-txt-example">a b c d e f g</span>
                                    <span className="type__body-txt-example">1 2 3 4 5 6  &amp; ! % </span>
                                    <span className="type__body-txt-example">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
                                    <span className="type__body-txt-example">a b c d e f g h i j k l m n o p q r s t u v w z y z</span>
                                </div>
                                </div>
                        </div>
                        <div className="type__inner-row">
                        <div className="type__med-ctn margin-top-2">
                            <span className="type__subtitle">Usage Details</span>
                            <div className="type__divider-small"></div>
                            <span className="type__body-txt">
                                    Helvetica Neue Thin can be used in a variety of applications.
                            </span>

                            <span className="type__subtitle margin-top-2">Body Text</span>
                            <div className="type__divider-small"></div>
                            <span className="type__body-txt margin-bottom-1">
                                   This is the Helvetica Neue Thin body text.
                            </span>
                            <span className="type__body-txt">
                                   Helvetica Neue Thin should be used as body text in almost all applications.
                                   The only exceptions are when the Thin weight is not legible enough for the application. In this case 
                                   Helvetica Neue Light or Regular can be used in its placed.
                            </span>

                            <span className="type__subtitle margin-top-2">Subtitles</span>
                            <div className="type__divider-small"></div>
                            <span className="type__subtitle margin-bottom-1">
                                   This is the Helvetica Neue Thin subtitle.
                            </span>
                            <span className="type__body-txt">
                                   Helvetica Neue Thin should be used for subtitles.
                            </span>
         


                            </div>
                        </div>
                    </div>
                </div>
   


            </>
        )
    }
}

export default Type
