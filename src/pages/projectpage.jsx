import React from "react";
import '../styles/projectpage.css';
import { useNavigate } from "react-router-dom";
import picture from '../assets/image/Picture1.PNG';
import picture2 from '../assets/image/pic2.PNG';
import picture3 from '../assets/image/pic3.PNG';


function Projectpage(){
    const navigate = useNavigate();
    const back = () => {
        navigate("/")
      }
    return ( 
        <div className="main_II">
            <div className="top_">
                <button className= "btn_" onClick={back}>BACK</button>
                <p className="p_tag">FELIX'S LATEST PROJECTS</p>
            </div>

            <section className="portfolio" id="portfolio">
                <div className="portfolio-container">

                    <div className="portfolio-box">
                        <img src={picture} alt="pic" />
                        <div className="portfolio-layer">
                            <h4>Bime.</h4>
                            <p>An extension/Webpage that is used to monitor screentime, 
                            also to set timer as well as blocking sites and social medias as well</p>
                            <a href="https://github.com/Felizdujadin999/bimeFrontend">Click to see on Github</a>   
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <div className="portfolio-layer">
                            <h4>E-Wallet Application.</h4>
                            <p>E-Wallet is a user-friendly application built with Python, designed to simplify your financial transactions.
                            With E-Wallet, you can securely store your digital funds, make payments, and manage your finances all in one place.</p>
                            <a href="https://github.com/Felizdujadin999/e_wallet_application">Click to see on Github</a>   
                        </div>
                        <img src={picture2} alt="pic" />
                    </div>

                    <div className="portfolio-box">
                        <img src={picture3} alt="pic" />
                        <div className="portfolio-layer">
                            <h4>Regcrow Application.</h4>
                            <p>RegCrow is a Java-based application powered by the Spring Framework,
                            designed to connect buyers and sellers in a dynamic marketplace. Whether you're looking to buy, sell, or trade goods and services, 
                            RegCrow provides a secure and efficient platform for individuals to transact with confidence. </p>
                            <a href="https://github.com/Felizdujadin999/RegcrowApplication">Click to see on Github</a>   
                        </div>
                    </div>


                </div>
            </section>

        </div>
    )
}
export default Projectpage; 