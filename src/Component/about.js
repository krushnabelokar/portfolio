import React from 'react';
import ReactDOM from 'react-dom';
import './about.css';
import img1 from '../images/img1.png';
import Resume from "./Resume.doc";

class About extends React.Component{
    render(){
        return(
              <div className="aboutme" if="about">
                <h1 className="grow">About Me</h1><br/>
                <div className="aboutflex">
                      <div className="image grow">
                         <center><img src={img1}></img></center>
                      </div>
                      <div className="text">
                           <h1 className="grow"><span>Hello...</span> I am Krushna Belokar !</h1>
                           <p>I have completed my Graduation in BCA, and during this course I got intrest in developement,<br/>
                              Where I learnt basics of programmings, and I did some project as well in my Graduation.<br/>
                              <span id="al">Always Interested In Learning New Things.......</span><br/>
                              Currently I am Pursuing My Master Degree In MCA-I From " <span id="clg">Dr.D.Y.Patil Institute Of Management And Research</span> ".<br/> 
                           </p><br/>
                           <a href={Resume}><button type="button" className="btn btn-primary grow">DOWNLOAD CV</button></a>
                      </div>
                </div>
              </div>
        );
    }
}

export default About;