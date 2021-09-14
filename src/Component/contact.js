import React from 'react';
import './contact.css';

class ContactMe extends React.Component{
    render(){
        return(
          <div className="contactme" id="contact">
              <h1> Contact Me </h1>
             <form class="myform" action="mailto:krushnab5283@gmail.com">
                 <div class="form-group">
                 <label for="exampleInputEmail1">Your Name</label>
                 <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Name"/>
                 <label for="exampleInputEmail1">Email address</label>
                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                 <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                 </div>
                 <div class="form-group">
                 <label for="exampleInputPassword1">Contact Number</label>
                 <input type="number" class="form-control" id="exampleInputPassword1" maxlength="10" size="10" placeholder="Contact Number"/>
                 </div>
                 <div class="form-group">
                 <label for="exampleInputPassword1">Message</label>
                 <textarea class="form-control" id="exampleInputPassword1" placeholder="Message here"></textarea>
                 </div>
                 <div class="form-group form-check">
                 <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                 <label class="form-check-label" for="exampleCheck1">Check me out</label>
                 </div>
                 <button type="submit" class="btn btn-primary">Submit</button>
              </form>
          </div>
        );
    }
}

export default ContactMe;