import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Component/header.js';
import HBody from './Component/hbody.js';
import About from './Component/about.js';
import Education from './Component/education';
import Projects from './Component/projects';
import ContactMe from './Component/contact';
import Copyright from './Component/copyright';

class Main extends React.Component{
  render(){
    return(
      <div>
        <div>
        <Header/>
        </div>
      <div>
      <HBody/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Education/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <ContactMe/>
      </div>
      <div>
        <Copyright/>
      </div>
      </div>
    );
  }
}


ReactDOM.render(<Main/>,document.getElementById('root'));

