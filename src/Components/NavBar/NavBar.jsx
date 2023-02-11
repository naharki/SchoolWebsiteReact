import React from 'react';
import styled from 'styled-components';
import Di from '../../About/Di.jsx';


const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-flow: row nowrap;
  padding-right: 20px;

 li{
  color:#444444;
  list-style-type: none;
  padding: 18px 10px;
  font-size: small;
  font-family: 'open sans', sans-serif;
  font-weight: 700;
}

@media screen and (max-width: 1024px){
 // display: none;  
  flex-flow: column nowrap;
  background-color: #002538;
  position: fixed; 
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform0.3s ease-in-out;

li{
  padding-top: 5px;
  color: #fff;
}
}
`;

const NavBar = ({ open }) => {
  return (
  <Ul open={ open }>
  <li>HOME</li>
  <li>ABOUT US</li>
  <li>CONTACT</li>
  <li>NEWS/EVENTS</li>
  <li>STAFFS</li>
  <li> Di </li>
 </Ul>
  )
}

export default NavBar;