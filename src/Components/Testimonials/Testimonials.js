import React, { useRef } from 'react';
import './testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user1.png';
import user_2 from '../../assets/user2.png';
import user_3 from '../../assets/user3.png';
import user_4 from '../../assets/user4.png';

const Testimonials = () => {

const slider =useRef();
let tx =0;
  const slideForward =() => {
    if(tx > -75){
      tx -= 25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slideBackward =() =>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
            <div className='user-info'>
              <img src={user_1} alt=''/>
              <div>
                <h3>Edsi</h3>
                <span>Edusity , USA</span>
              </div>
              </div>
              <p>Edusity takes a more simplistic but effective approach, with one student taking viewers on a tour, while the University of Amsterdam shows what can be achieved with a touch of artistic flair.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
            <div className='user-info'>
              <img src={user_2} alt=''/>
              <div>
                <h3>Jessica</h3>
                <span>Edusity , USA</span>
              </div>
              </div>
              <p>The University for the Creative Arts weaves together testimonials from different students and pleasing visuals from across campus to achieve rounded, engaging content.with one student taking . </p>
            </div>
          </li>
          <li>
            <div className='slide'>
            <div className='user-info'>
              <img src={user_3} alt=''/>
              <div>
                <h3>Millie</h3>
                <span>Edusity , USA</span>
              </div>
              </div>
              <p>In a relatively simplistic but effective approach, the University for the Creative Arts focussed on one student who speaks passionately about the studio space the institution has to offer.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
            <div className='user-info'>
              <img src={user_4} alt=''/>
              <div>
                <h3>Edward</h3>
                <span>Edusity , USA</span>
              </div>
              </div>
              <p> University is one of a few universities executing this well, with one of its stories documenting the career path of a former student who now lives in New York City and working for Spotify. It's uplifting and informative, and will undoubtedly spark the interest of prospective students dreaming big in a similar field.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials