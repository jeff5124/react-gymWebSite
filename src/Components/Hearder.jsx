import React from 'react';
import { Link } from 'react-scroll';
function Hearder() {
  return (
    <div id='main'>
      <div className='header-heading'>
        <h2>STEP UP YOUR</h2>
        <h1><span>FITNESS</span> WITH US</h1>
        <p className='details'>
          Welcome to <span>FitZone Vitality gym</span>.
          Build Your Body And Fitness With Professionnal
        Touch</p>
        <div className='header-btns'>
            <a href="/Contact/" className='header-btn'><Link to='contact' smooth={true} duration={1000}>JOIN NOW</Link></a>

        </div>

      </div>
    </div>
  )
}

export default Hearder;
