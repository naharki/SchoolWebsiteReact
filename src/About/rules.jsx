import React from 'react';
import '../About/rules.css';

function rules() {
  return (
    <>

    <div className='rules container'>
      <div className=' d-flex'>
         <div className='vertLine'>  </div>
         <h4 className='fw-bold mb-3'>School Rules</h4>
       </div>
      

        <p className='fw-bold mb-3'>Proper conduct</p>
        <p className="fw-normal mb-3">
              Students are required to observe a high degree of discipline.
              The students are required to show a sober and dignified moral conduct in all the activities of the campus. 
              Modest behaviour is expected inside and outside school programs. Students with lack of discipline and ill-manner are subject to suspension and expulsion.
        </p>
        <p className='fw-bolder mb-3'>Attendance</p>
        <p className='mb-3'>Regular attendance is mandatory. In order to be eligible to appear in the final exams, every student will have to show at least 90% attendance.
        </p>
        <p className='fw-bolder mb-3'>Uniform</p>

        <p>Students must wear the prescribed campus uniform. The prescribed uniform details can be obtained from college.      
        </p>
</div>
</>
  )
}

export default rules;