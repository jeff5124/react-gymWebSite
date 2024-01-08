import React from 'react';
import Featurebox1 from './Featurebox/Featurebox1';
import Featurebox2 from './Featurebox/Featurebox2';
import Featurebox3 from './Featurebox/Featurebox3';
import Featurebox4 from './Featurebox/Featurebox4';
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'

function Feature() {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className='a-container'>
      <Featurebox1 image={fimage1} title="WeightLifting" />
      <Featurebox2 image={fimage2} title="Specific Muscle" />
      <Featurebox3 image={fimage3} title="Flex Your Muscle" />
      <Featurebox4 image={fimage4} title="Cardio Exercise" />
      
      </div>
    </div>
  )
}

export default Feature;
