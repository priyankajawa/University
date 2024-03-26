import React from 'react';
import './about.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
        <img src={about_img} alt ='' className='about-img'/>
        <img src={play_icon} alt ='' className='play-icon' onClick={() =>{setPlayState(true)}} />

        </div>
        <div className='about-right'>
        <h3>University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>The idea is simply to leverage the strength of thinking of our young leaders, have more decentralised decision making on aspects that matter to them, and create a progressive, sustainable organisation that provides a platform for voices from across ages. It’s well said that in a client service context, hierarchy is determined by whoever is best placed to address the requirement best or answer the specific ask - other definitions such as level or title are not significant in that specific situation </p>
        <p>With the launch of our NextGen Forum, we’re a step closer to having greater generational diversity in the boardroom. The forum gives a platform to millennials, carefully chosen to represent diverse business teams, locations, genders and backgrounds, who discuss business and people related issues with the firm’s leadership.</p>
        <p>We have always seen immense value in listening to our people and have seen that ideas can come from anywhere - be it the inputs team members bring in at townhalls (which have now moved to virtual settings) or our people sharing candid feedback through pulse-check surveys. In fact, even PwC’s core Values were co-created by more than 276,000 of our people at a global level, and is a testament of how seriously we take the voice of our people.</p>
        </div>
    </div>
  )
}

export default About