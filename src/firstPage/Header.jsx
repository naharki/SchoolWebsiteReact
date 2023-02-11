import React from 'react';
import './Header.css';
import phone from '../firstPage/images/phone.png';
import mail from '../firstPage/images/mail.png';
import logo from '../firstPage/images/logo.png';
import { useState } from 'react';
import Hamburger from '../Components/NavBar/Hamburger';
 
function Header() { 
  const [oldSticky, newSticky] = useState('border-bottom');
  window.onscroll = () =>{
    let temp;
    let top =window.scrollY;
    if(top > 45) {
     temp ='border-bottom border-primary fixed-top sticked';
    }
    else {
      temp='';
    }
    return newSticky(temp);
  }
   
  
  return (
  <div className='contianer-fluid'>
  {/*  This is Heading Section */ }

   <div className='headTop bg-primary text-light d-flex ' id='topBar'>
      <div className='headTopLeft container d-flex align-items-center '>
        <a target='_blank' href='/' rel="noreferrer">MS Team</a>
        <a target='' href="/" rel="noreferrer">UNIPS</a>
        <a target='_blank' href='/'>PAS</a>
        <a target='_blank' href='/'>Mail</a>
      </div>  
              
     <div className='slogan '>
        <h6><marquee> Learning through Empiricism.</marquee></h6>
      </div>

      <div className='headTopRight d-flex'>
        <div className='phoneImg d-flex'>
          <img src={phone} alt="phone" />
          <a href='tel:9861913770' >9861913770</a>
        </div>

        <div className='mailImg d-flex'>
         <img src={mail} alt="Mail" />
         <a href='#'>abc@gmail.com</a>
        </div>
      </div>     
    </div>
              
  <div>
    <div className={oldSticky}>
      < div className='headerBelow conatiner bg-light d-flex '>
        <div className='navbarLeft d-flex'>
          <div className='logo'>
            <a href="/" alt="Pinnacle Academy">
              <img src={logo} alt="" />
            </a>
          </div>
        </div>
          
  {/* Hamburger option/ menu  */}

  <div className='navbarRight container-sm|md|lg|xl d-flex align-items-center'>
   <Hamburger />
  </div>
</div>
</div>
</div>
</div> 
  )
}

export default Header;