import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='home'>
     
      <div className="intro-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 home-header">
              <h1 className="heading">Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h1>
              <h1 className="heading-name">I'M<strong className="main-name"> GANESH PATEL</strong></h1>
              <div className="Typewriter" data-testid="typewriter-wrapper">
                <span className="Typewriter__wrapper"></span>
                <span className="Typewriter__cursor">|</span>
              </div>
            </div>
            <div className="col-md-5">
              <img src="/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg" alt="home pic" className="img-fluid" style={{ maxHeight: '450px' }} />
            </div>
          </div>
        </div>
        <div className="here-section">
        <div className="bg-image"></div>
      </div>
      </div>
    </div>
  );
}

export default Home;
