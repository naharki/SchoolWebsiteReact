import React from 'react';
import './BelowFooter.css';

function BelowFooter() {
  return (
    <div className='footerBelow container-fluid pt-5 pb-2 text-center'>
      <div>
        © Copyright   
        <strong>
            <span>  Pinnacle Academy School </span>
        </strong>
         All Rights Reserved
      </div>
      <div className="credits">
      Designed and Developed by
      <a href="https://www.facebook.com/profile.php?id=100006997443613"> <span>Sujan Naharki Chhetri</span></a> 
      </div>
    </div>
  )
}

export default BelowFooter