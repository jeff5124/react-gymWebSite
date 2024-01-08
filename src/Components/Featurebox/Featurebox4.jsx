import React from 'react';

function Featurebox4(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt="" />
        </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p> physical activity that elevates the heart rate and improves circulation, promoting overall cardiovascular health.</p>

      </div>
    </div>
  )
}

export default Featurebox4;
