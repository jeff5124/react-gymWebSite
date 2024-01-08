import React from 'react';

function Featurebox3(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt="" />
        </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p> That encourages showcasing one's strength, abilities, or influence confidently.</p>

      </div>
    </div>
  )
}

export default Featurebox3;
