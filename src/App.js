import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import './app.css'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <div id='home'>
        <Hero />
      </div>
      
      <div className='container'>
        {/* Program section */}
        <div id="program">
          <h2>Our Program</h2>
          <p>Check our Programs</p>
          <Programs />
        </div>
        
        {/* About section */}
        <div id="about">
          <h2>About Us</h2>
          <p>What we are?</p>
          <About setPlayState={setPlayState} />
        </div>
        
        {/* Campus section */}
        <div id="campus">
          <h2>Campus</h2>
          <p>Checkout our gallery pics</p>
          <Campus />
        </div>
        
        {/* Testimonials section */}
        <div id="testimonials">
          <h2>Testimonials</h2>
          <p>Our Students Feedbacks</p>
          <Testimonials />
        </div>
        
        {/* Contact section */}
        <div id="contact">
          <h2>Contact Us</h2>
          <p>For more details</p>
          <Contact />
        </div>
        
      </div>
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
