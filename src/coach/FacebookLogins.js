import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import Axios from 'axios';

class FacebookLogins extends Component {
    constructor(props) {
        super(props);
        this.componentClicked = this.componentClicked.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
    }
    

    responseFacebook = (response) => {
        console.log(response.email);
        console.log(response.name);
        console.log(response.userID);
        console.log(response.picture);
        Axios.
        
    }

    componentClicked= ()=>{
        console.log('Ahuhu ');
    }

    render() {
        return (
            <div>
                <FacebookLogin
                    appId="2064240610542473"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />,
            </div>
        );
    }
}

export default FacebookLogins;