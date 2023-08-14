import  React from 'react';
import "./loginmodule.css"

const Login = () => {
  return (    
  <>    
     <div className='extranav'>
      <ul className='extra'>
        <li>+91 76100 65100</li>
        <li>contactus@renthunter.in</li>
      </ul>
      <button className='bttn'>Login</button>
      
      </div>
    <nav>
        <h1>Renthunter</h1>
        <ul>
          <li>HOME</li>
          <li>MY PROFILE</li>
          <li>POST PROPERTIES</li>
          <li>CONTACT</li>
          <li>ABOUT US</li>
          <li>GALLERY</li>
        </ul>
    </nav>
      <div className="mainfunc">
        <div className='buttondata'>
          <button className='btn'>Home</button>
          <button className='btn'>Pg</button>
          <button className='btn'>Apartment</button>
          <button className='btn'>search</button>
        </div>
      <div className='searchbox-container'>
        <div className="search-box">
          <div className="input-container">
            <label htmlFor="location">Enter Location:</label>
            <input type="text" id="location"/>
            <button>SEARCH</button>
          </div>
      </div>
        </div>
      </div>      
      </>
  );
}
export default Login;
