import React from "react";
import '../styles/homepage.css';
import Lottie from 'lottie-react'
import Lion from '../assets/image/LION.json';
import { useNavigate } from "react-router-dom";
import twitter from '../assets/image/twitter.svg';
import instagram from '../assets/image/instagram.svg';
import github from '../assets/image/github.svg';

function Homepage(){
    const navigate = useNavigate();
    const move = () => {
        navigate("/projectpage")
      }

    return(
        <div className="main_">
            <header className="header_">
                <a href="#" className="logo">EZEIKE FELIX.</a>

                <nav className="nav_bar">
                    <a href="#" className="active">HOME</a>

                    <a href="#">ABOUT</a>
                    
                    <a href="#" onClick={move}>PROJECT</a>  
                </nav>
            </header>

            <section className="home">
                <div className="home_content">
                    <h1>HI, I'M FELIX EZEIKE</h1>
                    <h3>Software Engineer</h3>
                    <p></p>
                    <div className="btn-box">
                        <a href="#">HIRE ME</a>
                        <a href="https://wa.me/2347047670124">LET'S TALK</a>
                    </div>
                </div>

                <div className="home_sci">
                    <a href="#"><img src={twitter}/></a>
                    <a href="#"><img src={instagram}/></a>
                    <a href="https://github.com/Felizdujadin999"><img src={github}/></a>
                </div>

                <div className="home_imgHover"><Lottie animationData={Lion} className="lottie"/></div>
            </section>
        </div>
    )
}
export default Homepage;