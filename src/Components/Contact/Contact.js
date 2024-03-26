import React ,{useState} from 'react';
import './contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/dark-arrow.png'
const Contact = () => {
    const [result , setResult] =useState('');
    const onSubmit = async(e) =>{
        setResult ("Sending ...");
        FormData.append("access_key", "Your_ACCESS_KEY_HERE");
        const res = await fetch('https://api.web3.com/submit' , {
            method:"POST",
            body: FormData
        }).then((res) => res.json());
        if (res.success) {
            console.log("success",res);
            setResult(res.message);
            e.target.reset();
        }else{
            console.log("Error",res);
            setResult(res.message);
        }
    }
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send Feedback as a Message <img src={msg_icon} alt='' /></h3>
            <p>Once you made that initial contact with Raven, she could respond to other questions, but she wouldn’t interact with you without the first Gold-Bug prompt.</p>
        <ul>
            <li><img src={mail_icon} alt ="" />Contact@priyanka</li>
            <li><img src={phone_icon} alt ="" />+91 9824675934</li>
            <li><img src={location_icon} alt ="" />77 Massachusetts Ave, Cambridge<br /> MA 02139,United States</li>
        </ul>
        
        </div>
        <div className='contact-col'>
            <form onSubmit ={onSubmit}>
                <label>Enter Your Name</label>
                <input 
                type='text'
                name='name'
                required
                placeholder='Enter your Name Please'/>
                <label>Phone Number</label>
                <input 
                  type='tel'
                  name='phone'
                  required
                  placeholder='Enter your Mobile Number'/>
                 <label>Write Your Feedback </label>
                <textarea 
                  name='message'
                  rows="6"
                  required
                  placeholder='Write your feedback overhere'/> 
                  <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt='' /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact