import React from 'react'
import styled from 'styled-components';
import directorphoto from '../About/directorphoto.jpg';
import './Di.css';

const  Director = styled.div`
container{
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

vertLine {
  font-weight:bold;
  padding-left:15px; 
  border-left: 5px solid red;
}

img>a>img{
width: 100%;
margin-bottom: 3rem;  
border: 1px solid rgb(131, 131, 131);
border-radius: 5px;
}

directorWord p{
  font-family:"Open sans", sans-serif ;
  color: #444444;
  text-align: justify;
}
`;

const Di = () => {
  return (
    <>
    <Director className='container'>
        <div className='content'>
             <div className="row mb-3">
              <div className='vertLine'>  </div>
                <h4 className='vertLine fw-bold mb-3'>Message from Director</h4>
             </div>

            
              <div className=" img mb-3">
                <a target='_blank' href={directorphoto} alt="directorTasbir" rel="noreferrer">
                  <img src={directorphoto} alt="" />
                </a>
              </div>

              <div className='directorWord text-justify'>
                <p className='text-justify mb-3'>
                Dear Students, Guardians and Well Wishers, It gives us an immense pleasure to extend heartiest welcome to you all at MAC. We extend our sincerest gratitude for the continuous support from our well wishers in raising MAC into a centre of academic excellence since its establishment. Established twenty seven years back as the first private sector college, MAC has grown up into its full maturity.
                </p>
                <p className="mb-3">               
                We feel proud to state that it has been keeping up the tradition of excelling in the National level Board Exams. MAC stands today because of qualified, experienced and dedicated teachers imparting impeccable quality education. No doubt, the painstaking students and cooperative guardians have remarkable contribution in making MAC a milestone in the academic arena. The campus owned permanent building in the most peaceful location at Phoolbari-11, Pokhara, with the required facilities to enhance quality education and enrich sports, co-curricular activities and social programmes with high emphasis on competitive exams strengthens and encourages to grow MAC ever.
                </p>
                <p className="mb-3">
                I take this opportunity to extend heartfelt thanks to the management committee, faculty members, staff, students, guardians and well wishers who have open-heartedly supported and indebted us and hope the same in the days to come.
                </p>
                <p className="mb-3">
                We congratulate all the +2, Bachelor graduates and extend heartiest invitations at MAC.
                </p>

                Thank you!
                <div className="fw-bold mb-5">
                  <p>Surya Bahadur G.C.
                     <p>Director</p>
                  </p>
                  
                </div>
                </div>
              </div>
        
        </Director>
        </>  
  )
}

export default Di;