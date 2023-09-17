import React, { useEffect } from "react";
import '../styles/contactpage.css';
import ScrollReveal from 'scrollreveal';

function Contact(){
    useEffect(() => {
        ScrollReveal().reveal('.heading_', {
          duration: 2000,
          origin: 'top',
          distance: '80px',
          delay: 200,
          easing: 'ease-in-out',
          reset: true
        });
      }, []);

    return(
        <section>
            <h2 className="heading_">Contact <span>Me!</span></h2>
            <form action="">

                <div className="input-box">
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="Email Address"/>
                </div>

                <div className="input-box">
                    <input type="digit" placeholder="Phone Number"/>
                    <input type="text" placeholder="Email Subject"/>
                </div>

                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <input type="Submit" value="Send Message" className="btn__"/>
                
            </form>
            
        </section>
    )
}
export default Contact;