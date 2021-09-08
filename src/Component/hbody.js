import React from "react";
import ReactDom from "react-dom";
import "./hbody.css";
import img23 from '../images/img23.png';

class HBody extends React.Component{
    render(){
        return(
            <div className="hbody">
                <div className="content">
                    <h1 id="wel">WELCOME TO MY <span className="grow">PORTFOLIO</span></h1>
                    <h2 id="about">ABOUT ME</h2>
                    <h1 id="design">I Am A Creative <span> DESIGNER </span> And Developer</h1>
                    <div className="social">
                    <a href="https://www.linkedin.com/in/krushna-belokar-281010181/" target="_blank"><i className="fab l fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100010624029787" target="_blank"><i className="fab f fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/krushna_belokar/?hl=en" target="_blank"><i class="fab i fa-instagram-square"></i></a>
                    <a href="https://twitter.com/belokar_krushna" target="_blank"><i className="fab t fa-twitter-square"></i></a>
                    </div>
                </div>
                <div className="img">
                   <img src={img23}/>
                </div>

            </div>
        );
    }
}

export default HBody;