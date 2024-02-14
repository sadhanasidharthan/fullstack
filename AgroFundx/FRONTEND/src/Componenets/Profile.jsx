import React, { useEffect, useState } from "react";
// import Header from "./Header";
import "./profile.css";
import { Paper, Box, Avatar, Button } from "@mui/material";



import Cookies from "js-cookie";

import { Link, Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
//   const [data, setData] = useState([]);
  const nav = useNavigate();
  const handleLogout=()=>{
    sessionStorage.clear();
    nav('/');
  }

  return (
    <div
      style={{
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "150vh",
      }}
    >
      {/* <Header type="noBack" home="nohome" about='false'  /> */}
   

      <div className="profilecontent">
        <div className="listt">
          <Box
            className="box1"
            sx={{
              "& > :not(style)": {
                width: 500,
                height: 450,
                backgroundColor: "#00003cba",
              },
            }}
          >
            <Paper elevation={10} className="paperpp">
              <div className="ava">
                <Avatar
               
                 src="https://img.freepik.com/free-vector/pink-watercolor-abstract-background_52683-73541.jpg?size=626&ext=jpg"
                  sx={{
                    width: 100,
                    height: 100,
                    marginTop: "40px",
                    backgroundColor: "#ADD8E6",
                    color: "#000055",
                  }}
                />
              </div>
              
             <div className="prof_info"><center>
              <b/><br/>
                Hi User,<br/>
                Glad to Welcome You in!<br/>
                <p style={{color:"blue"}}>{Cookies.get('email')}</p>
                <br/>
                <br/>
                <Button class="logout-btn" onClick={handleLogout}>
                    Logout
                  </Button>
             </center>

             </div>
             
            </Paper>
          </Box>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Profile;