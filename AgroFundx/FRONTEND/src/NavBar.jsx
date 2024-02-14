import React, { useEffect } from 'react';
import "./Navbar.css";
import { Avatar, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const gotoProfile = () => {
    navigate('/profile');
  }

  // Placeholder for checking login status
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('black');
      } else {
        nav.classList.remove('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='headgreen'>
      <div className="responsive-bar">
        
        <div className="menu">
          <h4>Menu</h4>
        </div>
      </div>
      <nav>
        
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/loan">Apply Loan</a></li>
          <li><a href="/status">Loan Status</a></li>
          <li><a href="/pro">Profile</a></li>
          </ul>
         <div className='loggg'>
            {isLoggedIn ? (
              <div onClick={gotoProfile}>
                <Avatar alt="" src="/static/images/avatar/1.jpg" />
                <div className="nav_item" style={{ marginLeft: "-8px", color: "white" }}>
                  {/* Additional content for the profile */}
                </div>
              </div>
            ) : (
              <Button class='txt' href="/login">LOGIN</Button>
            )}
          </div>
        
      </nav>
    </header>

    
  //   <nav className="navbar navbar-expand-custom navbar-mainbg" style={{marginTop:-40,marginLeft:-20}}>
  //   <a className="navbar-brand navbar-logo" href="#"></a>
  //   <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //     <i className="fas fa-bars text-white" />
  //   </button>
  //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //     <ul className="navbar-nav ml-auto">
  //       <div className="hori-selector"><div className="left" /><div className="right" /></div>
  //       <li className="nav-item">
  //         <a className="nav-link" href="/"><i className="fas fa-tachometer-alt" />Home</a>
  //       </li>
       
  //       <li className="nav-item">
  //         <a className="nav-link" href="/loan"><i className="far fa-clone" />Apply Loan</a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link" href="javascript:void(0);"><i className="far fa-calendar-alt" />Calendar</a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link" href="javascript:void(0);"><i className="far fa-chart-bar" />Charts</a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link" href="javascript:void(0);"><i className="far fa-copy" />Documents</a>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>
    
  );
};

export default NavBar;
