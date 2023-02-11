import React from 'react'
import Header from './firstPage/Header.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Di from './About/Di.jsx';
import Rules from './About/rules';
import HomePage from './firstPage/HomePage.jsx';


const App = () => {
  return (
    <div className=''>
<Router>
  <Header />
      <Routes>  
        <Route exact path='/' element ={<HomePage />} />
        <Route path='/message' element={<Di />} />
        <Route path='/rules' element={<Rules />} />
      </Routes>

  
   
    </Router>
    </div>
  );
}

export default App