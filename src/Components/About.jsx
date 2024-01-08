import React from 'react';
import aboutimage from '../images/about.png'
function About() {
  return (
    <div id='about'>
        <div className='about-image'>
           <img src={aboutimage} alt="" />
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>The FitZone Vitality gym offers a dynamic and welcoming environment, designed to meet the varied fitness needs of its members. Equipped with high-quality modern equipment, the room offers a full range of activities, from cardio classes to strength training sessions supervised by experienced instructors. Whether you're a seasoned fitness enthusiast or just starting out on your health journey, our personalized programs accommodate all fitness levels. In addition to state-of-the-art facilities, "FitZone Vitality" offers motivating group classes such as yoga, pilates and stimulating group classes. Our dedicated team of professionals are here to guide you every step of the way, creating a community where physical and mental well-being are prioritized. Join us for a complete fitness experience, focused on positive energy and personal transformation.</p>
                <button>READ MORE</button>
        </div> 
    </div>
  )
}

export default About;
