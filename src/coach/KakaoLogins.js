import React, { Component, Fragment } from 'react';
import KakaoLogin from 'react-kakao-login';
import $ from "jquery";

class KakaoLogins extends Component {
    constructor(props) {
        super(props);
        this.userInfo = this.userInfo.bind(this);
    }


    success = (response) => {
        console.log(' token sau khi login ' + response.response.access_token);
        console.log(response.response.access_token);
        var token = response.response.access_token;
        localStorage.setItem('kakao', token);
        this.userInfo();

    }

    userInfo = () => {
        var token = localStorage.getItem('kakao');
        console.log('Token is ' + token);
        var axios = require('axios');

        var headers = {
            'Access-Control-Allow-Origin': 'https://kapi.kakao.com',
            'Access-Control-Allow-Methods': '*'

        }
        //console.log(localStorage.getItem('kakao'));
        //axios.defaults.headers.common['Authorization'] = localStorage.getItem('kakao');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        axios.get('https://kapi.kakao.com/v1/user/me', headers)
            .then(response => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    failure = (error) => {
        console.log(error);
    };

    render() {
        const key = '3ca0b72c6203bea8c3d3cea78f24cf60';
        return (
            <div>
                <Fragment>
                    <p><code>Login with Kakao </code></p>
                    <KakaoLogin
                        jsKey={key}
                        onSuccess={this.success.bind(this)}
                        onFailure={this.failure.bind(this)}
                    />
                </Fragment>
                <button onClick={this.userInfo.bind(this)}>  get Info</button>
            </div>
        );
    }
}

export default KakaoLogins;