import React, { Component } from 'react';
import './colours.scss';
import colours from './images/colours/all-colours.png';
import colour1 from './images/colours/colour-1.png';
import colour2 from './images/colours/colour-2.png';
import colour3 from './images/colours/colour-3.png';
import colour4 from './images/colours/colour-4.png';
import colour5 from './images/colours/colour-5.png';



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


        <div className="logos__page-ctn">
                <div className="logos__inner-page-ctn">
                        <div className="logos__inner-row">

                            <div className="logos__med-ctn">
                                <span className="colours__subtitle">Black, Grey, White &amp; Blue</span>
                                <div className="colours__divider-small"></div>
                                <div className="colours__img-ctn">
                                    <img className="colours__img-colours" alt="wordmark logo white" src={colours}/>
                                    <div className="colours__swatch-ctn">
                                    <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour1}/>
                                    <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour2}/>
                                    <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour3}/>
                                    <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour4}/>
                                    <img className="colours__img-colour-swatch" alt="wordmark logo white" src={colour5}/>
                                </div>
                                </div>

                            </div>

                        </div>


                        <div className="images__inner-row margin-top-3">
                            <div className="images__med-ctn">
                                <span className="images__subtitle">The Kepler Colour Story</span>
                                <div className="colours__divider-small margin-bottom-2"></div>
                                <span className="images__body-txt margin-bottom-4">
                                    It's important to get the correct colour when creating branded items.
                                </span>
                            </div>
</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Colours
