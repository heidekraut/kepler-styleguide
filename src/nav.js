import React from 'react';
import './nav.scss';
import smallLogo from '../src/images/small-logo-white.svg';
import largeLogo from '../src/images/Logo-White.png';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (

        <>
        
        <div className="nav__ctn" id="ease-out">
                <div className="nav__logo-ctn--mobile">
                    <img alt="kepler logo" className="nav__logo" src={largeLogo} />
                </div>
            <div className="nav__logo-ctn--desktop">
                <img alt="kepler logo" className="nav__logo" src={smallLogo} />

                </div>
                <div className="nav__all-links-nav">
                    <div className="nav__link-ctn">
                        <Link className to='/' >
                        <span className="nav__link hover hover-1">Mission</span>
                        </Link> 
                    </div>

                    
                    <div className="nav__link-ctn">
                    <Link className to='/tone' >
                        <span className="nav__link hover hover-1">Tone</span>
                    </Link>
                    </div>
                    

                    <div className="nav__link-ctn">
                        <Link to='/logos'>
                        <span className="nav__link hover hover-1">Logos</span>
                        </Link>
                    </div>

                    <div className="nav__link-ctn">
                        <Link to='/colours'>
                        <span className="nav__link hover hover-1">Colour</span>
                        </Link>
                    </div>

                    <div className="nav__link-ctn">
                    <Link to='/images'>
                        <span className="nav__link hover hover-1">Images</span>
                    </Link>
                    </div>

                    <div className="nav__link-ctn">
                    <Link to='/type'>
                        <span className="nav__link hover hover-1">Type</span>
                    </Link>
                    </div>

                    <div className="nav__link-ctn">
                    <Link to='/downloads'>
                        <span className="nav__link hover hover-1">Downloads</span>
                    </Link>
                    </div>

                </div>

        </div>


        {/* <div className="nav__fixed-title-ctn" id="fixed">
            <div className="nav__logo-large-ctn">
            <img alt="kepler logo" className="nav__logo-large" src={Logo} />
            </div>
        </div> */}
        </>
    )
}

export default Nav;

