import React from 'react';
import Announcement from './Announcement';
import BelowNavbar from './Slider';
import Header from './Header';
import Footer from './Footer';

function Firstpage() {
  return (
    <div>

        <Header />
        <BelowNavbar />
        {/* <Footer /> */}
        <Announcement/>
    </div>
  )
}

export default Firstpage