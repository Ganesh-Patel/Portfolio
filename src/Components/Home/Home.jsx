import React from 'react';
import './Home.css';
import homeLogo from "../../Assets/home-main.svg";
import Home2 from './Home2';

function Home() {
    return (
        <div className='home'>

            <div className="intro-section">
                <div className="main-content">
                    <div className="main-item1">
                        <div className="col-md-7 home-header">
                            <h1 className="heading">Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h1>
                            <h1 className="heading-name">I'M<strong className="main-name"> GANESH PATEL</strong></h1>
                            <div className="Typewriter" data-testid="typewriter-wrapper">
                                <span className="Typewriter__wrapper"></span>
                                <span className="Typewriter__cursor"></span>
                            </div>
                        </div>
                    </div>
                    <div className="main-item2">
                        <img
                            src={homeLogo}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "70%",maxWidth: "70%" }}
                        />
                    </div>
                </div>
            </div>
            <div className="here-section">
               <Home2 />
            </div>
        </div>
    );
}

export default Home;
