import React from "react";
import ReactDom from "react-dom";
import "./header.css";

class Header extends React.Component{
    render(){
        var logo="Krushna Belokar / ";
        return(
            <div className="nav">
                 <div className="logo">
                     <h2><i class="fas fa-angle-left"></i>{logo}<i class="fas fa-greater-than"></i></h2>
                 </div>
                 <div className="menu">
                     <a href="#"><i class="fas x fa-house-damage"></i>HOME</a>
                     <a href="#"><i class="fas x fa-address-card"></i>ABOUT ME</a>
                     <a href="#"><i class="fas x fa-user-graduate"></i>QUALIFICATION</a>
                     <a href="#"><i class="fas x fa-project-diagram"></i>PROJECTS</a>
                     <a href="#"><i class="fas x fa-id-card-alt"></i>CONTACT ME</a>
                 </div>
                 <div className="cv">
                     <button className="">DOWNLOAD CV</button>
                 </div>
            </div>
        );
    }
}

export default Header;