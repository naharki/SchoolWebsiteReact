import Slider from "./Slider";
import React from 'react';
import NewsEvent from "./NewsEvent";
import Footer from "./Footer";
import BelowFooter from "./BelowFooter";


function HomePage() {
  return (
    <>
        <Slider />
        <NewsEvent/>
        <Footer />
        <BelowFooter />
    </>
  )
}

export default HomePage