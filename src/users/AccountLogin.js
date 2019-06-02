import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Link from '../links/Link';

class AccountLogin extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.test = this.test.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }
    login = (event) => {
        event.preventDefault();
        var axios = require('axios');
        var url = Link.users;
        axios.post(url + '/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                //console.log(response);
                console.log(response.data.success.token);
                var token = response.data.success.token;
                localStorage.setItem('token', token);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    test = () => {
        alert('test localstore ! ');
        var token = localStorage.getItem('token');
        console.log('tkoen ' + token);
        var axios = require('axios');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        axios.post('http://localhost:8000/api/details')
            .then(response => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit" onClick={this.login}>
                            Login
                    </Button>
                        <Button variant="primary" type="button" onClick={this.test}>
                            Reset
                    </Button>
                    </Form.Group>
                </Form>;
           </Container>
        );
    }
}

export default AccountLogin;