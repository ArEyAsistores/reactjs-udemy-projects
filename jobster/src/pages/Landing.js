import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg'; 
const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt='jobster logo' className='logo'/>
        </nav>
        <div className='container page'>
            {/* Info */}
            <div className='info'>
                <h1>job <span>tracking</span> app</h1>
                <p>A job is a task or set of tasks that are assigned to
                    an individual in exchange for payment or other compensation.
                    Jobs can be part-time or full-time and can range from entry-level positions to executive-level positions. 
                    The purpose of a job is to provide individuals with a means of earning money to support themselves and their families. 
                    Jobs can be found in many different industries, such as healthcare, education, finance, retail, and technology. 
                      </p>
                <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={main} alt='job hunt' className='img main-img'/>
        </div>
    </main>
    
  )
}

export default Landing