import React from 'react'
import { Link } from 'react-scroll';

function Offer() {
  return (
    <div id='offer'>
        <div className='pr-heading'>
        <h1>A BIG <span>FOR THIS SUMMER</span></h1>
        <p className='details'>join us to take advantage of this offer.
        </p>
        <div className='pr-btns'>
            <a href="/Contact/" className='pr-btn'><Link to='contact' smooth={true} duration={1000}>JOIN NOW</Link></a>
        </div>
        </div>
    </div>
  )
}

export default Offer
