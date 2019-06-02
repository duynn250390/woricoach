import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
class LoginGoogle extends Component {
    constructor(props) {
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
    }
    
    responseGoogle = (response) => {
        console.log(response);
    }
    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="317245230200-5pmtlhpri14na3ks9tiobvh1tci4v3pv.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />,
            </div>
        );
    }
}

export default LoginGoogle;