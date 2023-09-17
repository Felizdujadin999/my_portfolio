import React, { useEffect } from "react";
import '../styles/aboutpage.css';
import pic from '../assets/image/Felix.jpg';
import { useNavigate } from "react-router-dom";
import ScrollReveal from 'scrollreveal';

function AboutPage(){
    const navigate = useNavigate();
    const back = () => {
        navigate("/")
      }

     useEffect(() => {
        ScrollReveal().reveal('.heading', {
          duration: 2000,
          origin: 'top',
          distance: '80px',
          delay: 200,
          easing: 'ease-in-out',
          reset: true
        });
      }, []);

      useEffect(() => {
        ScrollReveal().reveal('h3', {
          duration: 2000,
          origin: 'left',
          distance: '80px',
          delay: 200,
          easing: 'ease-in-out',
          reset: true
        });
      }, []);
    return (
        <section className="about">
            <div className="about_image">
                <img src={pic} alt="pic"/>
            </div>

            <div className="about_content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Software Engineer</h3>
                <p>Felix is a Junior Software Engineer, 
                    with knowledge of programming languages like Java, Python, JavaScript, React, and MySQL.
                    I am passionate about technology and creative innovations, trained and engaged in project-based learning, 
                    with in-depth exposition to core software engineering and computing concepts like Software Development Life Cycles,
                    System Architecture and Design, and Testing.
                    A purpose-driven, innovative team player, 
                    a motivated individual with a proven ability to effectively evaluate, organize, 
                    and prioritize work within an overall project schedule.</p>
                    <div className="btn-box">
                    <a href="https://wa.me/2347047670124">LET'S TALK</a>
                    </div>
            </div>
            <button onClick={back}>BACK</button>
        </section>
    )
}
export default AboutPage;