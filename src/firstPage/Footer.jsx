import React from 'react';
import './Footer.css';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import youtube from './images/youtube.png';
// import mail from './images/mail.png';
import logo from './images/logo.png';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const contactDetail = [
    {title:<strong>Pinnacle Academy School.</strong>},
    {title: "Fulbari-19, Pokhara"},
    {title: <><strong>Contact:</strong><a href='tel:06191080' 
      style={{textDecoration:'none'}}> 06591080</a></>},
    {title: <><strong>Email:</strong><a href='mailto:sujannaharki2@gmail.com' 
      style={{textDecoration:'none'}}> sujannaharki2@gmail</a></>  }
];
        
    // Icons Styles
    const iconStyles ={
        'height': '45px',
        'width': '45px',
}

const socialMedia =[
   
    {media: <a target='_blank' 
        href="https://www.youtube.com/watch?v=LjznJIMT0aU&list=PLEtjGa9VEukNKslFyRlhODXXuKgRnvVyM" rel="noreferrer">
        <img src={youtube} style={iconStyles} alt="Youtube" /> 
    </a>},
    {media: <a target='_blank' 
        href="https://www.facebook.com/pinnacleacademypokhara/" rel="noreferrer">
            <img src={facebook} style={iconStyles} alt="Instagram" />
        </a>},
{media: <img src={instagram} style={iconStyles} alt="Instagram" /> }
];

function Footer() {
    const details = contactDetail.map(info =>
        <div id='titleInfo' className='flex-column'>
            {info.title}
        </div>
    )

    const socialmedias = socialMedia.map(channel =>
        <>
        {channel.media}
        </>
        )


  return (
   <>
   <div className='contianer-fluid footer bg-dark text-light pt-5'>
        <div className='row'>
                <div className='footerLeft col'>
                <a  href='/'>
                    <img src={logo} alt="Pinnacle Academy" />
                </a>
               <div className='contactInfo pt-2'>
                 {details}
               </div>
               
               
                <div className="imgIcons pt-1">
                        {socialmedias}
                </div>
                
                </div>
                <div className=" col footerMiddle">
                    <h4 className='fw-bold'>This is middle part.</h4>
                    
                    <iframe
                title='post'
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpinnacleacademypokhara%2Fposts%2Fpfbid02YmtAdHyYw6Yx8dZVJmQmab9pGt5EMaSd4ATJMxuuUHzs6vyr8yqsLKA4rru6HSY9l&show_text=true&width=500" 
                width="500" height="0" 
                style={{border:'none',overflow:'hidden'}}
                 scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                    
                 </iframe>
                </div>

                <div className="col footerRight "> 
                <div className="likeShare">
                  <iframe 
                  title='shareButton'
                  src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2Fpinnacleacademypokhara%2F&layout=button_count&size=large&width=102&height=28&appId"
                   width="102" height="28"
                    style={{border:'none',overflow:'hidden'}}
                    scrolling="no"
                     frameborder="0" 
                     allowfullscreen="true"
                   allow="autoplay; clipboard-write; 
                   encrypted-media; picture-in-picture; web-share">
                    </iframe>             
                     </div>  
                <div className="facebookMenu">
                    <iframe 
                    title='widget'
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpinnacleacademypokhara&tabs=timeline&width=300&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    width="300" 
                    height="400" 
                    style={{border:'none',overflow:'hidden'}}
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                    </iframe>

                </div>
               
                </div>
        </div>
        
   </div>

   </>
  )
}

export default Footer;