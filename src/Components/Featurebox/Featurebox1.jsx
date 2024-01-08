import React from 'react';

function Featurebox1(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt="" />
        </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p> Involves lifting and moving weights to build strength, enhance muscle tone, and improve overall physical fitness.</p>

      </div>
    </div>
  )
}

export default Featurebox1;
