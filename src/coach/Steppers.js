import React from 'react';
import Stepper from 'react-js-stepper';
import { Container, Form, Button, ButtonToolbar, InputGroup, Jumbotron, Row, Table, Col } from 'react-bootstrap';
import $ from "jquery";
import errorList from '../configs/message.json';
import urlLink from '../configs/url.json';
import Header from '../coach/Header';

const steps = [
    { title: '기본정보' },
    { title: '코치프로필' },
    { title: '강습비설정' },
    { title: '스케쥴등록' },
    { title: '신청' },
]

class Steppers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 3,
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
            matchingPassword: '',
            days: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
            hours: ["5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM"],
            url: urlLink.sport,
            list: [],
            sportName: '',
            errorSelectGroup: '',
            errorGroupType: '',
            groupType: 1,
            groupType1: '1',
            groupType2: '2',
            groupType3: '3',
            address: '',
            errorAdress: '',
            expHlv: '',
            errorexpHlv: '',
            expTt: '',
            errorExpTt: '',
            plandetail: '',
            errorPlandetail: '',
            errorPlanLean: '',
            planLean: '',
            quickView: '',
            errorQuickView: '',
            packageName: '',
            time: '',
            cost: '',
            movable: false,
            mapAddress: '',
            mapAddressSt: '',
            rangeSelected: 0,
            list: [],
            displayTable: false,
            onsite: false,
            errorPackage: '',
            errorCost: '',
            errorTime: ''
        }
    }

    handleOnClickStepper = (step) => {
        this.setState({ activeStep: step });
    }

    handleOnClickNext = () => {
        let nextStep = this.state.activeStep + 1;
        console.log(" Current Step " + this.state.activeStep + " Total step " + steps.length);
        if (steps.length === this.state.activeStep) {
            alert('finish ');
        }
        this.setState({ activeStep: nextStep })
    }

    handleOnClickBack = () => {
        let prevStep = this.state.activeStep - 1;
        this.setState({ activeStep: prevStep })
    }
    save = () => {
        var list2 = $('td[class=t2] input[type=checkbox]');
        var list3 = $('td[class=t3] input[type=checkbox]');
        var list4 = $('td[class=t4] input[type=checkbox]');
        var list5 = $('td[class=t5] input[type=checkbox]');
        var list6 = $('td[class=t6] input[type=checkbox]');
        var list7 = $('td[class=t7] input[type=checkbox]');
        var list8 = $('td[class=cn] input[type=checkbox]');
        for (var index = 0; index < list2.length; index++) {
            console.log('index  = ' + index + 'value ' + list2[index].checked);
        }
        for (var index = 0; index < list3.length; index++) {
            console.log('index  = ' + index + ' value ' + list3[index].checked);
        }
        for (var index = 0; index < list4.length; index++) {
            console.log('index  = ' + index + ' value ' + list4[index].checked);
        }
        for (var index = 0; index < list5.length; index++) {
            console.log('index  = ' + index + ' value ' + list5[index].checked);
        }
        for (var index = 0; index < list6.length; index++) {
            console.log('index  = ' + index + ' value ' + list6[index].checked);
        }
        for (var index = 0; index < list7.length; index++) {
            console.log('index  = ' + index + ' value ' + list7[index].checked);
        }
        for (var index = 0; index < list8.length; index++) {
            console.log('index  = ' + index + ' value ' + list8[index].checked);
        }

    }
    // Step 1
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
    // End Step 1
    // Step 2
    resgisterProfile = (event) => {
        console.log("group type " + this.state.groupType);
        console.log("meo gif trong flag " + this.profileValidForm());
        if (this.profileValidForm() === true) {
            var axios = require('axios');
            axios.post(urlLink.coacher + '/register/profiles',
                {
                    sportName: this.state.sportName,
                    groupType: this.state.groupType,
                    address: this.state.address,
                    expHlv: this.state.expHlv,
                    expTt: this.state.expTt,
                    plandetail: this.state.plandetail,
                    quickView: this.state.quickView

                }).then((response) => {
                    console.log(response.data);


                }).catch(function (error) {

                    console.log(error);
                });

        }
    }

    componentDidMount = () => {
        var axios = require('axios');
        axios.get(urlLink.sport + '/list/sportName').then((response) => {
            console.log(response);
            this.setState({
                list: response.data,
                sportName: response.data[0].name
            })

        })
            .catch(function (error) {
                console.log(error);
            });

    }
    profileValidForm = () => {
        var flag = true;
        console.log(' vo lis  ' + this.state.address.trim().length);
        // Adrress validation
        if (this.state.address.trim().length === 0) {
            this.setState({
                errorAdress: errorList.user_profiles.errorAdress
            })
            flag = false
        } else {
            this.setState({
                errorAdress: ''
            })
        }
        if (this.state.expHlv.trim().length < 150) {
            this.setState({
                errorexpHlv: errorList.user_profiles.errorexpHlv
            })
            flag = false
        } else {
            this.setState({
                errorexpHlv: ''
            })
        }
        if (this.state.expTt.trim().length < 150) {
            this.setState({
                errorExpTt: errorList.user_profiles.errorExpTt
            })
            flag = false
        } else {
            this.setState({
                errorExpTt: ''
            })
        }
        if (this.state.plandetail.trim().length < 150) {
            this.setState({
                errorPlandetail: errorList.user_profiles.errorPlandetail
            })
            flag = false

        } else {
            this.setState({
                errorPlanLean: ''
            })
        }
        if (this.state.quickView.trim().length < 150) {
            this.setState({
                errorQuickView: errorList.user_profiles.errorQuickView
            })
            flag = false
        } else {
            this.setState({
                errorQuickView: ''
            })
        }
        return flag;

    }
    changeGroupType = () => {
        var selValue = $('input[name=groupType]:checked').val();
        console.log('value select ' + selValue);
        this.setState({
            groupType: selValue
        })
    }
    // End Step 2
    // Step 3
    selectYes = (event) => {
        this.setState({
            movable: true
        })
    }
    selectNo = (event) => {
        this.setState({
            movable: false
        });
    }
    onsiteYes = (event) => {
        this.setState({
            onsite: true
        })
    }
    onsiteNo = (event) => {
        this.setState({
            onsite: false
        });
    }
    addPackages = () => {
        var flag = true;
        if (this.state.packageName.trim().length === 0) {
            this.setState({
                errorPackage: errorList.coacher_package.errorPackage
            });
            flag = false;
        } else {
            this.setState({
                errorPackage: ''
            })
        }
        if (this.state.time.trim().length === 0) {
            this.setState({
                errorTime: errorList.coacher_package.errorTime
            });
            flag = false;
        } else {
            this.setState({
                errorTime: ''
            })
        }
        if (this.state.cost.trim().length === 0) {
            this.setState({
                errorCost: errorList.coacher_package.errorCost
            });
            flag = false;
        } else {
            this.setState({
                errorCost: ''
            })
        }
        console.log('flag ' + flag);
        if (flag === true) {
            if (this.checkExitPackage(this.state.packageName) !== true) {
                var row = {};
                row['name'] = this.state.packageName;
                row['time'] = this.state.time;
                row['cost'] = this.state.cost;
                var newList = this.state.list;
                newList.push(row);
                this.setState({
                    list: newList
                });
                if (this.state.list.length > 0) {
                    this.setState({
                        displayTable: true,
                        errorSelectPackage: ''
                    });
                }
            }
        }
    }
    checkExitPackage = (packageName) => {
        var flag = false;
        for (var index = 0; index < this.state.list.length; index++) {
            if (this.state.list[index].name === packageName) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    registerPackage = (event) => {
        console.log('hanslde seve ');
        var axios = require('axios');
        axios.post(urlLink.coacher + '/register/packages',
            {
                list: this.state.list,
                movable: this.state.movable,
                mapAddress: this.state.mapAddress,
                rangeSelected: this.state.rangeSelected,
                onsite: this.state.onsite,
                mapAddressSt: this.state.mapAddressSt
            }).then((response) => {
                console.log(response.data);

            }).catch(function (error) {

                console.log(error);
            });

    }
    // End Step 3
    // Step 4
    save = () => {
        var mondayTemp = $('td[class=T2] input[type=checkbox]');
        var tuesdayTemps = $('td[class=T3] input[type=checkbox]');
        var wednesdayTemp = $('td[class=T4] input[type=checkbox]');
        var thursdayTemps = $('td[class=T5] input[type=checkbox]');
        var fridayTemps = $('td[class=T6] input[type=checkbox]');
        var saturdayTemps = $('td[class=T7] input[type=checkbox]');
        var sundayTemps = $('td[class=CN] input[type=checkbox]');
        var monday = [];
        var tuesday = [];
        var wednesday = [];
        var thursday = [];
        var friday = [];
        var saturday = [];
        var sunday = [];
        for (var index = 0; index < 17; index++) {
            var row = {}
            row['hourName'] = this.state.hours[index];
            row['hourValue'] = mondayTemp[index].checked;
            monday.push(row);
            var row = {}
            row['hourName'] = this.state.hours[index];
            row['hourValue'] = tuesdayTemps[index].checked;
            tuesday.push(row);
            var row = {}
            row['hourName'] = this.state.hours[index];
            row['hourValue'] = wednesdayTemp[index].checked;
            wednesday.push(row);
            var row = {}
            row['hourName'] = this.state.hours[index];
            row['hourValue'] = thursdayTemps[index].checked;
            thursday.push(row);
            var row = {}
            row['hourName'] = this.state.hours[index];
            row['hourValue'] = fridayTemps[index].checked;
            friday.push(row);
            var row = {}
            row['hourName'] = this.state.hours[index];
            row['hourValue'] = saturdayTemps[index].checked;
            saturday.push(row);
            var row = {}
            row['hourName'] = this.state.hours[index];
            row['hourValue'] = sundayTemps[index].checked;
            sunday.push(row);

        }
        var axios = require('axios');
        axios.post(urlLink.coacher + '/register/schedules',
            {
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thursday: thursday,
                friday: friday,
                saturday: saturday,
                sunday: sunday
            }).then((response) => {
                console.log(response.data);

            }).catch(function (error) {

                console.log(error);
            });

    }
    // End Step 4
    // Step 5
    // End Step 3
    render() {
        return (
            <div>
                <Header></Header>
                <Container>
                    <React.Fragment>
                        <Stepper
                            steps={steps}
                            activeStep={this.state.activeStep}
                            onSelect={this.handleOnClickStepper}
                            showNumber={false}
                        />
                        <div className="sum_box_step">
                            {
                                this.state.activeStep === 1 ?
                                    <div className="step_box">
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>Name </Form.Label>
                                                <Form.Control type="text" placeholder="Enter your name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                                                <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorName}</div>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label> Email </Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                                <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorEmail}</div>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label> Photo </Form.Label>
                                                <Form.Control type="file" name="photo" onChange={this.uploadFileHanles} accept="image/x-png,image/jpeg" />
                                                <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorPhoto}</div>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>Day of birth</Form.Label>
                                                <Form.Control type="date" value={this.state.birthday} onChange={(e) => this.setState({ birthday: e.target.value })} />
                                                <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorBirthday}</div>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label> Gender</Form.Label>
                                                <div className="sum_checkbox">
                                                    <Form.Check
                                                        inline
                                                        type="radio"
                                                        label="Male"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios2" value={this.state.male} onChange={(e) => this.setState({ male: !this.state.male })}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        type="radio"
                                                        label="Female"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios2" value={this.state.female} onChange={(e) => this.setState({ gender: !this.state.female })}
                                                    />
                                                </div>
                                                <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorGender}</div>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Group controlId="mobile">
                                                    <Form.Label> Mobile  </Form.Label>
                                                    <Form.Control type="mobile" value={this.state.mobile} onChange={(e) => this.setState({ mobile: e.target.value })} />
                                                </Form.Group>
                                                <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorMobile}</div>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label> Address  </Form.Label>
                                                <Form.Control type="text" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
                                                <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorAddress}</div>
                                            </Form.Group>
                                        </Form.Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Password </Form.Label>
                                                    <Form.Control type="password" placeholder="Enter your password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                                </Form.Group>
                                                <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorpassword}</div>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label> Confirm Password </Form.Label>
                                                    <Form.Control type="password" placeholder="Enter your password" value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
                                                    <Form.Control.Feedback>{this.state.errorConfirmPassword}</Form.Control.Feedback>
                                                </Form.Group>
                                                <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorConfirmPassword}</div>
                                            </Col >
                                            <Col sm={12}>
                                                <p style={{ color: 'red', marginLeft: 5 }}>{this.state.matchingPassword}</p>
                                            </Col>
                                        </Row>

                                        <Col sm={4}>
                                            <Button variant="outline-success" onClick={this.resgister.bind(this)}> Register </Button>
                                        </Col>
                                        {/* Step 1*/}
                                    </div>
                                    : this.state.activeStep === 2 ?
                                        <div className="step_box">
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>Sport Name</Form.Label>
                                                    <Form.Control as="select" value={this.state.sportName} onChange={(event) => this.setState({ sportName: event.target.value })}>
                                                        {
                                                            this.state.list.map((row) =>
                                                                <option key={row.id}>{row.name}</option>
                                                            )}
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control type="text" placeholder="Search address " value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
                                                    <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorAdress} </div>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} md="4" controlId="formGridCity">
                                                    <Form.Check
                                                        type="radio"
                                                        label="Team"
                                                        value="1"
                                                        name="groupType"
                                                        id="groupType" onChange={this.changeGroupType} checked></Form.Check>
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="formGridCity">
                                                    <Form.Check
                                                        type="radio"
                                                        label="Team"
                                                        value="1"
                                                        name="groupType"
                                                        id="groupType" onChange={this.changeGroupType} checked></Form.Check>
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="formGridCity">
                                                    <Form.Check
                                                        type="radio"
                                                        label="Group"
                                                        value="3"
                                                        name="groupType"
                                                        id="groupType" onChange={this.changeGroupType}></Form.Check>
                                                </Form.Group>
                                            </Form.Row>
                                            {/* <Col xs={4}>
                                            <Form.Group controlId="groupType">
                                                <Form.Check
                                                    type="radio"
                                                    label="Team"
                                                    value="1"
                                                    name="groupType"
                                                    id="groupType" onChange={this.changeGroupType} checked></Form.Check>

                                            </Form.Group>
                                        </Col>
                                        <Col xs={4}>
                                            <Form.Group controlId="groupType">
                                                <Form.Check
                                                    type="radio"
                                                    label="Personal"
                                                    value="2"
                                                    name="groupType"
                                                    id="groupType" onChange={this.changeGroupType}></Form.Check>

                                            </Form.Group>
                                        </Col>
                                        <Col xs={4}>
                                            <Form.Group controlId="groupType">
                                                <Form.Check
                                                    type="radio"
                                                    label="Group"
                                                    value="3"
                                                    name="groupType"
                                                    id="groupType" onChange={this.changeGroupType}></Form.Check>
                                            </Form.Group>
                                        </Col> 
                                        <Col>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control type="text" placeholder="Search address " value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
                                            </Form.Group>
                                        </Col>*/}
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>Kinh nghiem HLV</Form.Label>
                                                    <Form.Control as="textarea" rows="3" value={this.state.expHlv} onChange={(e) => this.setState({ expHlv: e.target.value })} />
                                                    <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorexpHlv} </div>
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>Kinh nghiem tuyen thu</Form.Label>
                                                    <Form.Control as="textarea" rows="3" value={this.state.expTt} onChange={(e) => this.setState({ expTt: e.target.value })} />
                                                    <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorExpTt} </div>
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>Ke hoach tiet hoc</Form.Label>
                                                    <Form.Control as="textarea" rows="3" value={this.state.plandetail} onChange={(e) => this.setState({ plandetail: e.target.value })} />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>So luoc</Form.Label>
                                                    <Form.Control as="textarea" rows="3" value={this.state.quickView} onChange={(e) => this.setState({ quickView: e.target.value })} />
                                                    <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorQuickView} </div>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Button variant="outline-success" onClick={this.resgisterProfile}> Register </Button>
                                                </Form.Group>
                                            </Form.Row>
                                            {/* Step 2*/}
                                        </div>
                                        : this.state.activeStep === 3 ?
                                            <div className="step_box">
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                        <Form.Label className="font_bold">Package Name</Form.Label>
                                                        <Form.Control as="select" value={this.state.packageName} onChange={(event) => this.setState({ packageName: event.target.value })}>
                                                            <option>Trial</option>
                                                            <option>Light</option>
                                                            <option>Standard</option>
                                                            <option>Elite</option>
                                                        </Form.Control>
                                                        <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorPackage} </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                        <Form.Label className="font_bold">Time</Form.Label>
                                                        <Form.Control as="select" value={this.state.time} onChange={(event) => this.setState({ time: event.target.value })}>
                                                            <option value="1"> 1</option>
                                                            <option value="2"> 2</option>
                                                            <option value="3"> 3</option>
                                                        </Form.Control>
                                                        <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorTime} </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                        <Form.Label className="font_bold">Cost</Form.Label>
                                                        <Form.Control type="int" placeholder="Enter cost package " value={this.state.cost} onChange={(e) => this.setState({ cost: e.target.value })} />
                                                        <div style={{ color: 'red', marginLeft: 5, fontSize: '0.8em' }}>{this.state.errorCost} </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                        <Form.Label style={{ opacity: 0 }}>texy</Form.Label>
                                                        <Form.Control type="button" onClick={this.addPackages} value="Add Package" className="btn btn-success" />
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    {this.state.displayTable === true &&
                                                        <Table striped bordered hover>
                                                            <thead>
                                                                <tr>
                                                                    <th> Name </th>
                                                                    <th> Time </th>
                                                                    <th> Cost </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {this.state.list.map(element =>
                                                                    <tr>
                                                                        <td>{element.name}</td>
                                                                        <td>{element.time}</td>
                                                                        <td>{element.cost}</td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </Table>
                                                    }
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridCity" md='12'>
                                                        <Form.Label className="font_bold"> HLV có khả năng di chuyển đến địa điểm khách chỉ định?</Form.Label>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                        <label className="schu_check step_4">
                                                            <input id="hour" className="position-static" name="movable" type="radio" onChange={this.selectYes} />
                                                            <label className="text_name">Yes</label>
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                        <label className="schu_check step_4">
                                                            <input id="hour" className="position-static" name="movable" type="radio" onChange={this.selectNo} />
                                                            <label className="text_name">No</label>
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridCity" className="box_open_choose">
                                                        {this.state.movable === true &&
                                                            <div className="tran_slow_3">
                                                                <Row>
                                                                    <Col xs={12}>
                                                                        <Form.Label className="font_bold">  Địa điểm khoa hoc </Form.Label>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col>
                                                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                                                            <Form.Label>Place </Form.Label>
                                                                            <Form.Control type="text" placeholder="Search Kakao Map" value={this.state.mapAddress} onChange={(e) => this.setState({ mapAddress: e.target.value })} />
                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col>
                                                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                                                            <Form.Label>Rang</Form.Label>
                                                                            <Form.Control as="select" value={this.state.rangeSelected} onChange={(event) => this.setState({ rangeSelected: event.target.value })}>
                                                                                <option>0-25</option>
                                                                                <option>25-50</option>
                                                                                <option>50-100</option>
                                                                            </Form.Control>
                                                                        </Form.Group>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        }
                                                    </Form.Group>
                                                </Form.Row>
                                                <Row>
                                                    <Col xs={12}>
                                                        <Form.Label className="font_bold"> HLV có thể di chuyển đến địa điểm mà khách đã trực tiếp chỉ định không? </Form.Label>
                                                    </Col>
                                                </Row>
                                                <Row>

                                                </Row>

                                                <Row>
                                                    <Col xs={4}>
                                                        <Form.Group controlId="onsite">
                                                            <label className="schu_check step_4">
                                                                <input id="hour" className="position-static" name="onsite" onChange={this.onsiteYes} type="radio" onChange={this.onsiteYes} />
                                                                <label className="text_name">Yes</label>
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <Form.Group controlId="onsite">
                                                            <label className="schu_check step_4">
                                                                <input id="hour" className="position-static" name="onsite" onChange={this.onsiteYes} type="radio" onChange={this.onsiteNo} />
                                                                <label className="text_name">No</label>
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridCity" className="box_open_choose">

                                                        {this.state.onsite === true &&
                                                            <div>
                                                                <Row>
                                                                    <Col xs={12}>
                                                                        <Form.Label>  Địa điểm tập luyện </Form.Label>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <React.Fragment>
                                                                        <Col>
                                                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                                                <Form.Label>Place </Form.Label>
                                                                                <Form.Control type="text" placeholder="Search Kakao Map" value={this.state.mapAddressSt} onChange={(e) => this.setState({ mapAddressSt: e.target.value })} />
                                                                            </Form.Group>
                                                                        </Col>
                                                                        <Col>
                                                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                                                <Form.Label>Rang</Form.Label>
                                                                                <Form.Control as="select" value={this.state.time} onChange={(event) => this.setState({ time: event.target.value })}>
                                                                                    <option>0-25</option>
                                                                                    <option>25-50</option>
                                                                                    <option>50-100</option>
                                                                                </Form.Control>
                                                                            </Form.Group>
                                                                        </Col>
                                                                    </React.Fragment>
                                                                </Row>
                                                            </div>
                                                        }
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                        <Button variant="success" onClick={this.registerPackage}> Register Package</Button>
                                                    </Form.Group>
                                                </Form.Row>
                                                {/* Step 3 */}
                                            </div>
                                            : this.state.activeStep === 4 ?
                                                <div className="step_box">

                                                    <Table striped bordered hover>
                                                        <thead>
                                                            <tr>
                                                                <th>Time </th>
                                                                <th>Monday </th>
                                                                <th>Tuesday </th>
                                                                <th>Wednesday</th>
                                                                <th>Thursday</th>
                                                                <th>Friday</th>
                                                                <th>Saturday</th>
                                                                <th>Sunday </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this.state.hours.map(hour =>
                                                                    <tr>
                                                                        <td>{hour}</td>
                                                                        {
                                                                            this.state.days.map(day =>
                                                                                <td className={day}>
                                                                                    <label className="schu_check">
                                                                                        <input id="hour" className="position-static" type="checkbox" />
                                                                                        <span className="checkmark"></span>
                                                                                    </label>
                                                                                    {/* <Form.Group controlId="hour" className="">
                                                                                    <Form.Check type="checkbox" className="checkboxFive"></Form.Check>
                                                                                </Form.Group> */}
                                                                                </td>
                                                                            )
                                                                        }
                                                                    </tr>
                                                                )
                                                            }
                                                        </tbody>
                                                    </Table>



                                                    <Button variant="success" onClick={this.save}>Save</Button>

                                                </div>
                                                : <div className="step_box">
                                                    <Form.Row>
                                                        <Form.Group as={Col} controlId="formGridCity">
                                                            <p> Đảm bảo độ tin cậy và tính an toàn của HLV là mục tiêu ưu tiên hàng đầu của WeCoach.
                                                            Tất cả các HLV đăng ký WeCoach, mỗi năm sẽ nhận được cam đoan quản lý lai lịch.
                                                            Vì điều này, chi phí 10,000 won mỗi năm sẽ được rút ra từ tài khoản của các HLV.
                                                            Mong bạn hãy xác nhận điều.</p>
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} controlId="formGridCity">
                                                            <h4>Thông tin Creadit Card</h4>
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <div className="sum_cread_card">
                                                        <div className="form_cread_card">
                                                            <Form.Row className="row_card">
                                                                <Form.Group as={Col} controlId="formGridCity" md="8">
                                                                    <Form.Label>CARD NUMBER</Form.Label>
                                                                    <Form.Control type="text" placeholder="1234 5678 9101 1112" />
                                                                </Form.Group>
                                                                <Form.Group as={Col} controlId="formGridCity" md="4">
                                                                    <Form.Label>CVC/CVV</Form.Label>
                                                                    <Form.Control type="text" placeholder="XXXX-X" />
                                                                </Form.Group>
                                                            </Form.Row>
                                                            <Form.Row>
                                                                <Form.Group as={Col} controlId="formGridCity" md="8">
                                                                    <Form.Label>CARD HOLDER</Form.Label>
                                                                    <Form.Control type="text" placeholder="e.g. John Doe" />
                                                                </Form.Group>
                                                                <Form.Group as={Col} controlId="formGridCity" md="4" >
                                                                    <Form.Label>EXPIRATION</Form.Label>
                                                                    <Form.Row>
                                                                        <Form.Group as={Col} controlId="formGridCity" md="6" >
                                                                            <Form.Control type="text" placeholder="MM" />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} controlId="formGridCity" md="6" >
                                                                            <Form.Control type="text" placeholder="DD" />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                </Form.Group>
                                                            </Form.Row>
                                                        </div>
                                                    </div>
                                                    <Form.Row>
                                                        <Form.Group as={Col} controlId="formGridCity">
                                                            <Form.Label>Điều khoản</Form.Label>
                                                            <textarea className="form-control text_diu" id="exampleFormControlTextarea1" rows="15">Bạn phải tuân thủ mọi chính sách đã cung cấp cho bạn trong phạm vi Dịch vụ.
                                                                Không được sử dụng trái phép Dịch vụ của chúng tôi. Ví dụ: không được gây trở ngại cho Dịch vụ của chúng tôi hoặc tìm cách truy cập chúng bằng phương pháp nào đó không thông qua giao diện và hướng dẫn mà chúng tôi cung cấp. Bạn chỉ có thể sử dụng Dịch vụ của chúng tôi theo như được luật pháp cho phép, bao gồm cả các luật và quy định hiện hành về quản lý xuất khẩu và tái xuất khẩu. Chúng tôi có thể tạm ngừng hoặc ngừng cung cấp Dịch vụ của chúng tôi cho bạn nếu bạn không tuân thủ các điều khoản hoặc chính sách của chúng tôi hoặc nếu chúng tôi đang điều tra hành vi bị nghi ngờ là sai phạm.
                                                                Bạn phải tuân thủ mọi chính sách đã cung cấp cho bạn trong phạm vi Dịch vụ.
                                                                Không được sử dụng trái phép Dịch vụ của chúng tôi. Ví dụ: không được gây trở ngại cho Dịch vụ của chúng tôi hoặc tìm cách truy cập chúng bằng phương pháp nào đó không thông qua giao diện và hướng dẫn mà chúng tôi cung cấp. Bạn chỉ có thể sử dụng Dịch vụ của chúng tôi theo như được luật pháp cho phép, bao gồm cả các luật và quy định hiện hành về quản lý xuất khẩu và tái xuất khẩu. Chúng tôi có thể tạm ngừng hoặc ngừng cung cấp Dịch vụ của chúng tôi cho bạn nếu bạn không tuân thủ các điều khoản hoặc chính sách của chúng tôi hoặc nếu chúng tôi đang điều tra hành vi bị nghi ngờ là sai phạm.
                                                                Bạn phải tuân thủ mọi chính sách đã cung cấp cho bạn trong phạm vi Dịch vụ.
                                                                Không được sử dụng trái phép Dịch vụ của chúng tôi. Ví dụ: không được gây trở ngại cho Dịch vụ của chúng tôi hoặc tìm cách truy cập chúng bằng phương pháp nào đó không thông qua giao diện và hướng dẫn mà chúng tôi cung cấp. Bạn chỉ có thể sử dụng Dịch vụ của chúng tôi theo như được luật pháp cho phép, bao gồm cả các luật và quy định hiện hành về quản lý xuất khẩu và tái xuất khẩu. Chúng tôi có thể tạm ngừng hoặc ngừng cung cấp Dịch vụ của chúng tôi cho bạn nếu bạn không tuân thủ các điều khoản hoặc chính sách của chúng tôi hoặc nếu chúng tôi đang điều tra hành vi bị nghi ngờ là sai phạm.
                                                                Bạn phải tuân thủ mọi chính sách đã cung cấp cho bạn trong phạm vi Dịch vụ.
                                                                Không được sử dụng trái phép Dịch vụ của chúng tôi. Ví dụ: không được gây trở ngại cho Dịch vụ của chúng tôi hoặc tìm cách truy cập chúng bằng phương pháp nào đó không thông qua giao diện và hướng dẫn mà chúng tôi cung cấp. Bạn chỉ có thể sử dụng Dịch vụ của chúng tôi theo như được luật pháp cho phép, bao gồm cả các luật và quy định hiện hành về quản lý xuất khẩu và tái xuất khẩu. Chúng tôi có thể tạm ngừng hoặc ngừng cung cấp Dịch vụ của chúng tôi cho bạn nếu bạn không tuân thủ các điều khoản hoặc chính sách của chúng tôi hoặc nếu chúng tôi đang điều tra hành vi bị nghi ngờ là sai phạm.</textarea>
                                                        </Form.Group>

                                                    </Form.Row>
                                                    <Form.Row className="btn_center">
                                                        <ButtonToolbar>
                                                            <Button variant="success">Đăng ký</Button>
                                                        </ButtonToolbar>
                                                    </Form.Row>
                                                    {/* Step 5 */}
                                                </div>
                            }
                        </div>
                        <div className="control_action">
                            {this.state.activeStep === 1 ? '' :
                                <input type="button" value="Back" onClick={this.handleOnClickBack} />}
                            <input type="button" value={this.state.activeStep === steps.length ? 'Finish' : 'Next'}
                                onClick={this.state.activeStep === steps.length ? null : this.handleOnClickNext} />
                        </div>

                    </React.Fragment>
                </Container >
            </div>
        )
    }
}
export default Steppers;