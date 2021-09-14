import React from 'react';
import ReactDOM from 'react-dom';
import './projects.css';
import book from '../images/book.jpg';
import calc from '../images/calc.jpg';
import coun from '../images/coun.jpg';
import result from '../images/result.jpg';

class Projects extends React.Component{
    render(){
        return(
          <div className="projects" id="proj">
                  <h1>Projects</h1>
            <div className="proj">
              <div className="book grow">
                  <h1>Book Shop Management System</h1>
                     <h2>About Project</h2>
                     <ul className='list'>
                         <li>This is my first Project since I started understanding software related things.</li>
                         <li> This Project was Made In <span id="lang"> Java Language, Mysql for database, only java was used for front end and backend also.</span></li>
                         <li>This is the simple desktop based application which was basically designed for a small Book Shop</li>
                         <li>In which we can control all the basic operation of the shop like as follow...
                              <ol className="ol">
                               <li id="num">Stoaring Book stock</li>
                               <li id="num">Handaling customers Records for future use</li>
                               <li id="num">Maintaining Shop Expenses Record</li>
                               <li id="num">Getting Report of all the transactions etc.</li>
                              </ol>
                         </li>
                         <li><a href="https://github.com/krushnabelokar/Book-Shop-Management-System" target="_blank">Click Here To See Git Repo...</a></li>
                     </ul>
              </div>
              <div className="calc grow">
                  <h1>Simple Calculator In ReactJs</h1>
                  <h2>About Project</h2>
                  <ul>
                      <li>This Is just a simple Calculator when I started learning and understanding ReactJs</li>
                      <li>This is a Real Logical Calculator where you can do all the necessory basics operation using it.</li>
                      <li>In React I learnt many new things, creating modules, reusing modules in out code whithout rewritting it.</li>
                      <li><a href="https://github.com/krushnabelokar/SimpleReactCalculator" target="_blank">Visite The Git Repo</a></li>
                  </ul>

              </div>
              <div className="coun grow">
                    <h1>Online Counselling System</h1>
                      <h2>About Project</h2>
                      <ul>
                          <li>This is my First a bit big project which was designed to for Counselling System</li>
                          <li>Languages used ...<span id="lang"> Html, Css, JavaScript, Bootstrap, Php, Java, used some Api's</span> as well</li>
                          <li>There are some important Modules like  Admin, Counceller, Customers ect. which all have their own functionality.</li>
                          <li>This web application was designed for thoes who are, needy, who are alone and who want to talk with someone, who have no one that close to share with.</li>
                          <li> Through this site he  or she can fix meeting and talked to the Councellers who have good amount of experience.</li>
                          <li>After fixing the meeting he or she will get the Mail from counseller and through a certain link they can talked freely without no fear.</li>
                          <li>And counseller will try to help them to overcome their problems, their anxiaty.</li>
                          <li><a href="#">Git Repo Link</a></li>
                      </ul>
              </div>
              <div className="result grow">
                <h1>Result Evaluation System</h1>
                <h2>About Project</h2>
                <ul>
                    <li>This is the Result Evaluation Management Site which can be used for schools and colleges.</li>
                    <li>Language used...<span id="lang"> Htlm, Css, JavaScript, Php and Mysql </span></li>
                    <li>This is the system which was desinged to display the result of students online.</li>
                    <li>There are only two modules  Admin and Student</li>
                    <li>Where as Student can only see his result, other than seeing result Student has no other access on the portal.</li>
                    <li>All control is in Admin's hand</li>
                    <li>He can add strudent, can add his marks, can declear result everything is handled by Admin</li>
                    <li><a href="#">Github Repository</a></li>
                </ul>      
                  
             </div>
            </div>
          </div>
        );
    }
}

export default Projects;