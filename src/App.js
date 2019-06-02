import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
              <ul class="navbar-nav">
                <li class="nav-item" style={{ minWidth: 100, marginRight: 20, marginLeft: 100 }}>
                  <Link to="/users/signup" >  Signup </Link>
                  <Link to=" /users/signin" > Signin </Link>
                  <Link to="/faq/seach" >    FAQ    </Link>
                  <Link to="/faq/admin/management" > FaqManagement </Link>
               
                  <Link to="/coach/register/stepper" > Register Stepper </Link>
               </li>
              </ul>
            </nav>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      </div>
    );
  }
}
export default App;
