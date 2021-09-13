import React from 'react';
import ReactDOM from 'react-dom';
import './education.css';

class Education extends React.Component{
    render(){
        return(
            <div className="edu">
                <h1 id="qd" className="grow"><i class="fas q fa-graduation-cap"></i> QUALIFICATIONAL DETAILS <i class="fas fa-laptop-code q"></i></h1><br/>
                <div className="educate">
                    <div className="tenth grow">
                        <div className="lg">
                         <h1><i class="fas mc fa-school"></i></h1>
                         <p><strong id="cl">10th Class</strong></p>
                        </div><br/>
                        <div className="main">
                        <p><strong id="s"><i class="fas c fa-university"></i> College :</strong> Bharat Vidhyalaya Buldhana</p>
                        <p><strong id="s"><i class="fas  per fa-marker"></i> Percentage :</strong> 61.60%</p>
                        <p><strong id="s"><i class="fas pass fa-vote-yea"></i> PassOut Year :</strong> 2012</p>
                        </div>
                    </div>
                    <div className="twelth grow">
                    <div className="lg">
                         <h1><i class="fas mc fa-chalkboard-teacher"></i></h1>
                         <p><strong id="cl">12th Class</strong></p>
                        </div><br/>
                    <div className="main">
                        <p><strong id="s"><i class="fas c fa-university"></i> College :</strong> Arjun Khimji jr. College</p>
                        <p><strong id="s"><i class="fas  per fa-marker"></i> Percentage :</strong> 63.38%</p>
                        <p><strong id="s"><i class="fas pass fa-vote-yea"></i> PassOut Year :</strong> 2015</p>
                        </div>
                    </div>
                    <div className="bca grow">
                    <div className="lg">
                         <h1><i class="fas mc fa-book-reader"></i></h1>
                         <p><strong id="cl">Graduation (BCA)</strong></p>
                        </div><br/>
                    <div className="main">
                        <p id="dyp"><strong id="s"><i class="fas c fa-university"></i> College :</strong> Dr.D.Y.Patil ACS College Akurdi - Pune</p>
                        <p><strong id="s"><i class="fas  per fa-marker"></i> Percentage :</strong> 65.91%</p>
                        <p><strong id="s"><i class="fas pass fa-vote-yea"></i> PassOut Year :</strong> 2020</p>
                        </div>
                    </div>
                    <div className="mca grow">
                    <div className="lg">
                         <h1><i class="fas mc fa-graduation-cap"></i></h1>
                         <p><strong id="cl">Post Graduation(MCA) ... Pursuing</strong></p>
                        </div><br/>
                    <div className="main">
                        <p id="dyp"><strong id="s"><i class="fas c fa-university"></i> College :</strong> Dr.D.Y.Patil Institute Of Management And Research - Pune</p>
                        <p><strong id="s"><i class="fas  per fa-marker"></i> Percentage :</strong> 93.04%</p>
                        <p><strong id="s"><i class="fas pass fa-vote-yea"></i> PassOut Year :</strong> 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;