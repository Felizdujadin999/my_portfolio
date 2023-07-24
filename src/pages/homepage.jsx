import React from "react";
import '../styles/homepage.css';
import Lottie from 'lottie-react'
import Lion from '../assets/image/LION.json';

function Homepage(){

    return(
        <div className="main_">
            <header className="header_">
                <a href="#" className="logo">EZEIKE FELIX.</a>

                <nav className="nav_bar">
                    <a href="#" className="active">HOME</a>

                    <a href="#">ABOUT</a>

                    <a href="#">CONTACT</a>
                    
                    <a href="#">PROJECT</a>  
                </nav>
            </header>

            <section className="home">
                <div className="home_content">
                    <h1>HI, I'M FELIX EZEIKE</h1>
                    <h3>Software Engineer</h3>
                    <p></p>
                    <div className="btn-box">
                        <a href="#">HIRE ME</a>
                        <a href="#">LET'S TALK</a>
                    </div>
                </div>

                <div className="home_sci">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>

                <div className="home_imgHover"><Lottie animationData={Lion} className="lottie"/></div>
            </section>
        </div>
    )
}
export default Homepage;