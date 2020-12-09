import React, { Component } from "react";
import "./downloads.scss";
import LogoDownloads from "./download/LogoDownloads.zip"

export class Downloads extends Component {
  render() {
    return (
      <>
        <div className="tone__img-page-ctn-tone">
          <div className="tone__inner-page-ctn">
            <div className="tone__intro-ctn">
              <div className="tone__txt-ctn">
                <span className="tone__main-title">Asset Downloads</span>
              </div>
            </div>
          </div>
        </div>

        <div className="images__page-ctn">
                <div className="images__inner-page-ctn">

                <div className="images__inner-row">

  
                    </div>
                        <div className="images__inner-row margin-bottom-4">
                            <div className="images__med-ctn">
                                <span className="images__subtitle">Logo Package</span>
                                <div className="images__divider-small"></div>
                                <span className="images__body-txt">
                                    Images of the industries that Kepler serves and has the ability to serve 
                                    make up a large percentage of the Kepler brand.
                                </span>
\
                                <div className="images__button">
                                  <a href={LogoDownloads} target="_blank" rel="noopener noreferrer" className="images__subtitle">LOGOS</a>
                                </div>
                            </div>
                        </div>

                        <div className="images__inner-row margin-bottom-4">
                            <div className="images__med-ctn">
                                <span className="images__subtitle">Presentations</span>
                                <div className="images__divider-small"></div>
                                <span className="images__body-txt">
                                    Images of the industries that Kepler serves and has the ability to serve 
                                    make up a large percentage of the Kepler brand.
                                </span>



                                <div className="images__button">
                                  <a href={LogoDownloads} target="_blank" rel="noopener noreferrer" className="images__subtitle">POWERPOINT</a>
                                </div>
                                <div className="images__button">
                                  <a href="https://docs.google.com/presentation/d/1gZhvgwhBrG7LgRYe56Tk3X3Ud_yNkIWb5ES_PVdI5wM/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="images__subtitle">GOOGLE SHEETS</a>
                                </div>

                            </div>
                        </div>


                        <div className="images__inner-row margin-bottom-4">
                            <div className="images__med-ctn">
                                <span className="images__subtitle">Letterheads</span>
                                <div className="images__divider-small"></div>
                                <span className="images__body-txt">
                                    Images of the industries that Kepler serves and has the ability to serve 
                                    make up a large percentage of the Kepler brand.
                                </span>

                                <div className="images__button">
                                  <a href={LogoDownloads} target="_blank" rel="noopener noreferrer" className="images__subtitle">WORD</a>
                                </div>
                                <div className="images__button">
                                  <a href={LogoDownloads} target="_blank" rel="noopener noreferrer" className="images__subtitle">GOOGLE DOCS</a>
                                </div>

                            </div>
                        </div>


                        <div className="images__inner-row margin-bottom-4">
                            <div className="images__med-ctn">
                                <span className="images__subtitle">Typefaces</span>
                                <div className="images__divider-small"></div>
                                <span className="images__body-txt">
                                    Images of the industries that Kepler serves and has the ability to serve 
                                    make up a large percentage of the Kepler brand.
                                </span>
                            </div>
                        </div>

                        <div className="images__inner-row margin-bottom-4">
                            <div className="images__med-ctn">
                                <span className="images__subtitle">UI Library</span>
                                <div className="images__divider-small"></div>
                                <span className="images__body-txt">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        </div>
                </div>
      </>
    );
  }
}

export default Downloads;
