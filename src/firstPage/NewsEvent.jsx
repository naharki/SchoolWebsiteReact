import React from 'react';
import './NewsEvent.css';


function FbEvent () {
  return(
    <div className='fbPost' >
    <iframe 
    title='yunika'
    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D213439134405141%26set%3Da.198721929210195%26type%3D3&show_text=true&width=500" 
    width="350" height="497" 
    style={{border:'none',overflow:'hidden'}} 
    scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; 
    clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
  )
}


function NewsEvent() {
  return (
    <div className=' newsEvent container flex-column'>
        <div className='dw-bold'> NEWS AND EVENTS</div>
        <div className="">
             <FbEvent />
       </div>
 </div>

  )
}

export default NewsEvent