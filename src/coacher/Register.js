import React, { Component } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import errorList from '../configs/message.json';
import urlLink from '../configs/url.json';
import Header from '../coach/Header';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: urlLink.coacher,
            name: '',
            email: '',
            photo: null,
            birthday: '',
            gender: true,
            male: false,
            female: false,
            mobile: '',
            address: '',
            password: '',
            confirmPassword: '',
            errorName: '',
            errorEmail: '',
            errorPhoto: '',
            errorBirthday: '',
            errorGender: '',
            errorMobile: '',
            errorAddress: '',
            errorpassword: '',
            errorConfirmPassword: '',
            matchingPassword: ''
        }
    }

    resgister = (event) => {
        event.preventDefault();
        console.log(" Gender " + this.state.male);
        if (this.state.male === true) {
            this.setState({
                gender: true
            })
        } else {
            this.setState({
                gender: false
            })
        }
        if (this.validation() === true) {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            }
            console.log("Gender " + this.state.gender);
            var form = {
                username: this.state.name,
                email: this.state.email,
                birthday: this.state.birthday,
                gender: this.state.gender,
                mobile: this.state.mobile,
                address: this.state.address,
                password: this.state.password,
            };
            const datas = new FormData();
            datas.append('file', this.state.photo);
            datas.append('form', JSON.stringify(form));
            console.log(this.state.file);
            var axios = require('axios');
            axios.post(urlLink.coacher + '/register', datas, config)
                .then(res => console.log(res.data));
        }

    }

    validation = () => {
        var flag = true;
        if (this.state.name.trim().length === 0) {
            flag = false;
            this.setState({
                errorName: errorList.user_register.errorName
            })
        } else {
            this.setState({
                errorName: ''
            })
        }
        if (this.state.email.trim().length === 0) {
            flag = false;
            this.setState({
                errorEmail: errorList.user_register.errorEmail

            })
        } else {
            this.setState({
                errorEmail: ''
            });
            var validator = require("email-validator");
            console.log('vo li email ' + validator.validate(this.state.email));
            if (validator.validate(this.state.email) === false) {
                this.setState({
                    errorValidEmail: errorList.user_register.errorValidEmail
                })

            } else {
                this.setState({
                    errorValidEmail: ''
                })
            }

        }

        if (this.state.birthday.trim().length === 0) {
            flag = false;
            this.setState({
                errorBirthday: errorList.user_register.errorBirthday
            })
        } else {
            this.setState({
                errorBirthday: ''
            })
        }
        console.log(this.state.male); // true or false
        if (this.state.male === false && this.state.female === false) {
            flag = false;
            this.setState({
                errorGender: errorList.user_register.errorGender
            })
        } else {
            this.setState({
                errorGender: ''
            })
        }
        if (this.state.mobile.trim().length === 0) {
            flag = false;
            this.setState({
                errorMobile: errorList.user_register.errorMobile
            })
        } else {
            this.setState({
                errorMobile: ''
            })
        }
        var PhoneNumber = require('awesome-phonenumber');
        var pn = new PhoneNumber(this.state.mobile);
        if (pn.isValid() !== true) {
            this.setState({
                errorMobileValidate: errorList.user_register.errorMobileValidate
            })
        };

        if (this.state.address.trim().length === 0) {
            flag = false;
            this.setState({
                errorAddress: errorList.user_register.errorAddress
            })
        } else {
            this.setState({
                errorAddress: ''
            })
        }
        if (this.state.password.trim().length === 0) {
            flag = false;
            this.setState({
                errorpassword: errorList.user_register.errorpassword
            })
        } else {
            this.setState({
                errorpassword: ''
            })
        }
        if (this.state.confirmPassword.trim().length === 0) {
            flag = false;
            this.setState({
                errorConfirmPassword: errorList.user_register.errorConfirmPassword
            })
        } else {
            this.setState({
                errorConfirmPassword: ''
            })
        }
        if (this.state.password.trim().length > 0 && this.state.confirmPassword.trim().length > 0) {
            if (this.state.password !== this.state.confirmPassword) {
                flag = false;
                this.setState({
                    matchingPassword: errorList.user_register.matchingPassword
                })
            } else {
                this.setState({
                    matchingPassword: ''
                })
            }
        }
        // Check email exits in DB:
        this.exitsUserByEmail();
        return flag;
    }
    uploadFileHanles = (event) => {
        console.log(event.target.files[0]);
        this.setState({
            photo: event.target.files[0]
        })
    }
    exitsUserByEmail = () => {
        var flag = true;
        var axios = require('axios');
        axios.get(urlLink.user + '/check/email/' + this.state.email).then(function (response) {
            console.log('No chua cai gi trong email ');
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {
        return (
            <div>
                <Header></Header>
                <Container style={{ marginTop: 50 }}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Name </Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                            </Form.Group>
                            <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorName}</Row>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label> Email </Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            </Form.Group>
                            <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorEmail}</Row>
                            <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorValidEmail}</Row>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label> Photo </Form.Label>
                                <Form.Control type="file" name="photo" onChange={this.uploadFileHanles} accept="image/x-png,image/jpeg" />
                            </Form.Group>
                            <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorPhoto}</Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label> Day of birth </Form.Label>
                                <Form.Control type="date" value={this.state.birthday} onChange={(e) => this.setState({ birthday: e.target.value })} />
                            </Form.Group>
                            <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorBirthday}</Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2" value={this.state.male} onChange={(e) => this.setState({ male: !this.state.male })}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2" value={this.state.female} onChange={(e) => this.setState({ gender: !this.state.female })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col sm={12}>
                        <p style={{ color: 'red', marginLeft: 5 }}>{this.state.errorGender}</p>
                    </Col>
                    <Row>
                        <Col sm={6}>
                            <Form.Group controlId="mobile">
                                <Form.Label> Mobile  </Form.Label>
                                <Form.Control type="mobile" value={this.state.mobile} onChange={(e) => this.setState({ mobile: e.target.value })} />
                            </Form.Group>
                            <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorMobile}</Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="addesss">
                                <Form.Label> Address  </Form.Label>
                                <Form.Control type="text" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
                            </Form.Group>
                            <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorAddress}</Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password </Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                            </Form.Group>
                            <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorpassword}</Row>
                        </Col>
                        <Col sm={4}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label> Confirm Password </Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
                            </Form.Group>
                            <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorConfirmPassword}</Row>
                        </Col >
                        <Col sm={12}>
                            <p style={{ color: 'red', marginLeft: 5 }}>{this.state.matchingPassword}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Button variant="outline-success" onClick={this.resgister.bind(this)}> Register </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;