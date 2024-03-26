import React from 'react';
import './hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <section className='hero container'>
    <div className='hero-text'>
        <h1>We Ensure Better Education for a Better World</h1>
        <p>The main purpose of university education is to impart knowledge to the learners and help them undergo character development. A lack of either of these would lead to a shaky future in the social arena. Universities should also restructure to enable the students undergo both learning processes and not just the classroom knowledge</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt=''/></button>
    </div>
    </section>
  )
}

export default Hero