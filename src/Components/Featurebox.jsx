import React from 'react';

function Featurebox(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt="" />
        </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam aliquam ad voluptatum, neque deserunt nihil fugiat ratione itaque reprehenderit soluta aperiam ullam eligendi id enim ea in incidunt dolorum?</p>

      </div>
    </div>
  )
}

export default Featurebox;
