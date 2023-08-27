import React from "react";
import '../styles/projectpage.css';
import { useNavigate } from "react-router-dom";


function Projectpage(){
    const navigate = useNavigate();
    const back = () => {
        navigate("/")
      }
    const move = () => {
        navigate("https://github.com/Felizdujadin999?tab=repositories")
    }
    return ( 
        <div className="main_II">
            <div className="top_">
                <button onClick={back}>BACK</button>
                <p className="p_tag">DUJADIN'S PROJECTS</p>
            </div>

            <div className="info_one">
                <h2 className="detail1_">GISTME BLOG</h2> 
                <div className="direct1_"><a href="https://github.com/Felizdujadin999/GistMeBlog">click me</a></div>     
            </div>

            <div className="info_two">
                <h2 className="detail2_">VOTING APPLICATION</h2>
                <div className="direct2_"><a href="https://github.com/Felizdujadin999/myVotersApplication">click me</a></div>     
            </div>

            <div className="info_three">
                <h2 className="detail3_">E-WALLET APPLICATION</h2>
                <div className="direct3_"><a href="https://github.com/Felizdujadin999/e_wallet_application">click me</a></div>     
            </div>

            <div className="info_five">
                <h2 className="detail5_">MY TWEET APPLICATION</h2>
                <div className="direct5_"><a href="https://github.com/Felizdujadin999/tweet_application">click me</a></div>     
            </div>

            <div className="info_four">
                <h2 className="detail4_">MY REACT APPLICATIONS</h2>
                <div className="direct4_"><a href="https://github.com/Felizdujadin999/myReactApplications">click me</a></div>     
            </div>

            <div className="info_six">
                <h2 className="detail6_">MENSTURATION APPLICATION</h2>
                <div className="direct6_"><a href="https://github.com/Felizdujadin999/myMensturationApplication">click me</a></div>     
            </div>

            <div className="info_seven">
                <h2 className="detail7_">REGCROW APPLICATION</h2>
                <div className="direct7_"><a href="https://github.com/Felizdujadin999/RegcrowApplication">click me</a></div>     
            </div>

            <div className="more_info">
            <p className="p2">For more projects, Visit my github page</p>
            <button className="BTN" onClick={move}>click here</button>
            </div>

        </div>
    )
}
export default Projectpage; 