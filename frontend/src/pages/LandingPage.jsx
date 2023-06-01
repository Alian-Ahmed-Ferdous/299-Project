import React from "react";

import LpNavBar from "../components/login/LpNavbar.jsx";
import Carousels from "../components/Carousel/Carousel.jsx";
import Loginsignup from "../components/login/LoginSignup.jsx";
// import Loginto from "./login.jsx"
// import Signupto from "./signup.jsx"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function LandingPage() {
    return ( 
        <div className = "background">
            <LpNavBar /> 
            <h1 className = "greetings"> Wellcome to KOBIGAAN </h1> 
            <Carousels />
            {/* <Loginto/> */}
            <Loginsignup/>
            <div style={{color: "white"}}>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaYoutube/>
            </div>
        </div> 
        )
}

export default LandingPage;
