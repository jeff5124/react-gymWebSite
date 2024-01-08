import React from 'react';

function Featurebox2(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt="" />
        </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p> Engaging a particular muscle or muscle group during exercise to achieve targeted strength, tone, or development in that specific area.</p>

      </div>
    </div>
  )
}

export default Featurebox2;
