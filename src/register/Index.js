import React, { Component } from 'react';
import Header from '../index/Header';
import Footer from '../index/Footer';
import { Link } from "react-router-dom";
import MessageJSON from '../configs/message.json';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: '',
            step: 'ani_1',
            active: 'step_1',
            ativeMenu: 'hello',
            step_start: 'step_start',
            step1: 'step_1',
            step2: 'step_2',
            step3: 'step_3',
            step4: 'step_4',
            step5: 'step_5',
            username: '',
            errorUsername: '',
            valiFeedback_Username: '',
            email: '',
            errorEmail: '',
            address: '',
            errorAddress: '',
            valiFeedback_Address: '',
            valiFeedback_Email: '',
            birthday: '',
            errorBirthday: '',
            valiFeedback_Birthday: '',
            errorGender: '',
            gender_male: false,
            gender_female: false,
            valiFeedback_Gender: '',
            password: '',
            repassword: '',
            errorPassword: '',
            errorRepassword: '',
            valiFeedback_Password: '',
            valiFeedback_Repassword: '',
            inputTest2: '',
            errorInputTest2: '',
            inputTest3: '',
            errorInputTest3: '',
            inputTest4: '',
            errorInputTest4: '',
            inputTest5: '',
            errorInputTest5: '',
        }
    }

    handleClickBtnNext = (e, step) => {
        e.preventDefault();

        const module_1 = document.querySelector('.module_1');
        const module_2 = document.querySelector('.module_2');
        const module_3 = document.querySelector('.module_3');
        const module_4 = document.querySelector('.module_4');
        const module_5 = document.querySelector('.module_5');

        const navStep1 = document.querySelector('#step_1');
        const navStep2 = document.querySelector('#step_2');
        const navStep3 = document.querySelector('#step_3');
        const navStep4 = document.querySelector('#step_4');
        const navStep5 = document.querySelector('#step_5');

        const walkStep = step;
        if (walkStep === this.state.step1) {
            module_1.classList.add('active');
            module_2.classList.remove('active');
            module_3.classList.remove('active');
            module_4.classList.remove('active');
            module_5.classList.remove('active');

            navStep1.classList.add('active');
            navStep2.classList.remove('active');
            navStep3.classList.remove('active');
            navStep4.classList.remove('active');
            navStep5.classList.remove('active');
        }

        if (walkStep === this.state.step2) {
            this.validationFormStep1();
            if (this.validationFormStep1() === true) {
                module_1.classList.remove('active');
                module_2.classList.add('active');
                module_3.classList.remove('active');
                module_4.classList.remove('active');
                module_5.classList.remove('active');

                navStep1.classList.add('active');
                navStep2.classList.add('active');
                navStep3.classList.remove('active');
                navStep4.classList.remove('active');
                navStep5.classList.remove('active');
            }
        }
        if (walkStep === this.state.step3) {
            this.validationFormStep2();
            if (this.validationFormStep2() === true) {
                module_1.classList.remove('active');
                module_2.classList.remove('active');
                module_3.classList.add('active');
                module_4.classList.remove('active');
                module_5.classList.remove('active');

                navStep1.classList.add('active');
                navStep2.classList.add('active');
                navStep3.classList.add('active');
                navStep4.classList.remove('active');
                navStep5.classList.remove('active');
            }
        }


        if (walkStep === this.state.step4) {
            this.validationFormStep3();
            if (this.validationFormStep3() === true) {
                module_1.classList.remove('active');
                module_2.classList.remove('active');
                module_3.classList.remove('active');
                module_4.classList.add('active');
                module_5.classList.remove('active');

                navStep1.classList.add('active');
                navStep2.classList.add('active');
                navStep3.classList.add('active');
                navStep4.classList.add('active');
                navStep5.classList.remove('active');
            }
        }
        if (walkStep === this.state.step5) {
            this.validationFormStep4();
            if (this.validationFormStep4() === true) {
                module_1.classList.remove('active');
                module_2.classList.remove('active');
                module_3.classList.remove('active');
                module_4.classList.remove('active');
                module_5.classList.add('active');

                navStep1.classList.add('active');
                navStep2.classList.add('active');
                navStep3.classList.add('active');
                navStep4.classList.add('active');
                navStep5.classList.add('active');
            }
        }

        // if (walkStep === this.state.step5) {
        //     this.validationFormStep4();
        //     if (this.validationFormStep5() === true) {
        //         module_1.classList.remove('active');
        //         module_2.classList.remove('active');
        //         module_3.classList.remove('active');
        //         module_4.classList.remove('active');
        //         module_5.classList.add('active');

        //         navStep1.classList.add('active');
        //         navStep2.classList.add('active');
        //         navStep3.classList.add('active');
        //         navStep4.classList.add('active');
        //         navStep5.classList.add('active');
        //         alert('okie');
        //     }
        // }
    }
    validationFormStep1 = () => {
        var flag = true;
        if (this.state.username.trim().length === 0) {
            flag = false;
            this.setState({
                errorUsername: 'error_form',
                valiFeedback_Username: MessageJSON.user_register.errorName
            })
        } else {
            this.setState({
                errorUsername: 'sucssec_form',
                valiFeedback_Username: ''
            })
        }
        if (this.state.email.trim().length === 0) {
            flag = false;
            this.setState({
                errorEmail: 'error_form',
                valiFeedback_Email: MessageJSON.user_register.errorEmail
            })
        } else {
            this.setState({
                errorEmail: 'sucssec_form',
                valiFeedback_Email: ''
            })
        }
        if (this.state.address.trim().length === 0) {
            flag = false;
            this.setState({
                errorAddress: 'error_form',
                valiFeedback_Address: MessageJSON.user_register.errorAddress
            })
        } else {
            this.setState({
                errorAddress: 'sucssec_form',
                valiFeedback_Address: ''
            })
        }
        if (this.state.birthday.trim().length === 0) {
            flag = false;
            this.setState({
                errorBirthday: 'error_form',
                valiFeedback_Birthday: MessageJSON.user_register.errorBirthday
            })
        } else {
            this.setState({
                errorBirthday: 'sucssec_form',
                valiFeedback_Birthday: ''
            })
        }
        if (this.state.gender_male === false && this.state.gender_female === false) {
            flag = false;
            this.setState({
                errorGender: 'error_form',
                valiFeedback_Gender: MessageJSON.user_register.errorGender
            })
        } else {
            this.setState({
                errorGender: 'sucssec_form',
                valiFeedback_Gender: ''
            })
        }
        if (this.state.password.trim().length === 0) {
            flag = false;
            this.setState({
                errorPassword: 'error_form',
                valiFeedback_Password: MessageJSON.user_register.errorpassword
            })
        } else {
            this.setState({
                errorPassword: 'sucssec_form',
                valiFeedback_Password: ''
            })
        }
        if (this.state.repassword.trim().length === 0) {
            flag = false;
            this.setState({
                errorRepassword: 'error_form',
                valiFeedback_Repassword: MessageJSON.user_register.errorConfirmPassword
            })
        } else {
            this.setState({
                errorRepassword: 'sucssec_form',
                valiFeedback_Repassword: ''
            })
        }
        return flag;
    }
    validationFormStep2 = () => {
        var flag = true;
        if (this.state.inputTest2.trim().length === 0) {
            flag = false;
            this.setState({
                errorInputTest2: 'error_form'
            })
        } else {
            flag = true;
            this.setState({
                errorInputTest2: 'sucssec_form'
            })
        }
        return flag;
    }
    validationFormStep3 = () => {
        var flag = true;
        if (this.state.inputTest3.trim().length === 0) {
            flag = false;
            this.setState({
                errorInputTest3: 'error_form'
            })
        } else {
            flag = true;
            this.setState({
                errorInputTest3: 'sucssec_form'
            })
        }
        return flag;
    }
    validationFormStep4 = () => {
        var flag = true;
        if (this.state.inputTest4.trim().length === 0) {
            flag = false;
            this.setState({
                errorInputTest4: 'error_form'
            })
        } else {
            flag = true;
            this.setState({
                errorInputTest4: 'sucssec_form'
            })
        }
        return flag;
    }
    validationFormStep5 = () => {
        var flag = true;
        if (this.state.inputTest5.trim().length === 0) {
            flag = false;
            this.setState({
                errorInputTest5: 'error_form'
            })
        } else {
            flag = true;
            this.setState({
                errorInputTest5: 'sucssec_form'
            })
        }
        return flag;
    }
   
    render() {
        return (
            <div>
                <Header />
                <section className="ss_registe_header div_bot_top">
                    <div className="gb_section"></div>
                </section>
                <section className="ss_registe_body">
                    <div className="container">
                        <div className="heading_title posi_center">
                            <h3>코치신청서를 작성해 주세요.</h3>
                            <Link className="no_coach" to={'/'}>코치가 아니신가요?</Link>
                        </div>
                        <div className="step_regis_sum">
                            <div className="step_regis">
                                <ul className="regis_nav_step">
                                    <li className="step_item step_1 active" id="step_1"
                                    //  onClick={(e) => this.handleClickBtnNext(e, 'step_1', 'ani_1')}
                                    >
                                        <span className="text_item">기본정보</span>
                                    </li>
                                    <li className="step_item step_2 " id="step_2"
                                    // onClick={(e) => this.handleClickBtnNext(e, 'step_2', 'ani_2')}
                                    >
                                        <span className="text_item">코치프로필</span>
                                    </li>
                                    <li className="step_item step_3 " id="step_3"
                                    //  onClick={(e) => this.handleClickBtnNext(e, 'step_3', 'ani_3')}
                                    >
                                        <span className="text_item">코치프로필</span>
                                    </li>
                                    <li className="step_item step_4 " id="step_4"
                                    // onClick={(e) => this.handleClickBtnNext(e, 'step_4', 'ani_4')}
                                    >
                                        <span className="text_item">스케쥴관리</span>
                                    </li>
                                    <li className="step_item step_5 " id="step_5"
                                    // onClick={(e) => this.handleClickBtnNext(e, 'step_5', 'ani_5')}
                                    >
                                        <span className="text_item">스케쥴관리</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="step_regis regis_body_step">
                                <div
                                    className={`module_steper module_1 ${this.state.active === "step_1" ? 'active' : ''}`}>
                                    <div className="fade-up">
                                        <div className="form_group_md putFull">
                                            <div className={`md_h md_box ${this.state.errorUsername}`}>
                                                <label>이름</label>
                                                <input type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                                                <div className="valida_feedback">{this.state.valiFeedback_Username}</div>
                                            </div>
                                        </div>
                                        <div className="form_group_md putFull ">
                                            <div className={`md_h md_box ${this.state.errorEmail}`}>
                                                <label>E-mail</label>
                                                <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                                <div className="valida_feedback">{this.state.valiFeedback_Email}</div>
                                            </div>
                                            <div className="md_h md_box putFull">
                                                <label className="opa_0">Email</label>
                                                <button type="button" className="md_bottom" >중복체크</button>
                                            </div>
                                        </div>
                                        <div className="form_group_md ">
                                            <div className={`md_h md_box putFull ${this.state.errorBirthday}`}>
                                                <label>생년월일</label>
                                                <input type="date" value={this.state.birthday} onChange={(e) => this.setState({ birthday: e.target.value })} />
                                                <div className="valida_feedback">{this.state.valiFeedback_Birthday}</div>
                                            </div>
                                            <div className="md_h md_box box_gender_no">
                                                <label className="heading">성별</label>
                                                <label className="gender ">
                                                    <input type="radio" className="action_radio" name="gender" value={this.state.gender_male} onChange={(e) => this.setState({ gender_male: !this.state.gender_male })} />남
                                                <span className="checkmark"></span>
                                                </label>
                                                <label className="gender ">
                                                    <input type="radio" className="action_radio" name="gender" value={this.state.gender_female} onChange={(e) => this.setState({ gender_female: !this.state.gender_female })} />여
                                                <span className="checkmark"></span>
                                                </label>
                                                <div className="valida_feedback">{this.state.valiFeedback_Gender}</div>
                                            </div>
                                        </div>
                                        <div className="form_group_md putFull">
                                            <div className={`md_h md_box ${this.state.errorAddress}`}>
                                                <label>연락처</label>
                                                <input type="text" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
                                                <div className="valida_feedback">{this.state.valiFeedback_Address}</div>
                                            </div>
                                        </div>
                                        <div className="form_group_md putFull">
                                            <div className={`md_h md_box ${this.state.errorPassword}`}>
                                                <label>비밀번호</label>
                                                <input type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                                <div className="valida_feedback">{this.state.valiFeedback_Password}</div>
                                            </div>
                                            <div className={`md_h md_box ${this.state.errorRepassword}`}>
                                                <label>암호 다시 입력</label>
                                                <input type="password" value={this.state.repassword} onChange={(e) => this.setState({ repassword: e.target.value })} />
                                                <div className="valida_feedback">{this.state.valiFeedback_Repassword}</div>
                                            </div>
                                        </div>
                                        <div className="form_group_md footer_box_md">
                                            <button className="btn_next" onClick={(e) => this.handleClickBtnNext(e, 'step_2', 'ani_1')} >다음 것</button>
                                        </div>
                                    </div>
                                </div>
                                {/* module_1 */}
                                <div
                                    className={`module_steper module_2 ${this.state.active === "step_2" ? 'active' : ''}`}>
                                    <div className="fade-up">
                                        <div className="form_group_md putFull">
                                            <div className={`md_h md_box ${this.state.errorInputTest2}`}>
                                                <label>이름</label>
                                                <input type="text" value={this.state.inputTest2} onChange={(e) => this.setState({ inputTest2: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form_group_md footer_box_md">
                                            <button className="btn_prev" onClick={(e) => this.handleClickBtnNext(e, 'step_1')} >뒤로</button>
                                            <button className="btn_next" onClick={(e) => this.handleClickBtnNext(e, 'step_3', 'ani_2')} >다음 것</button>
                                        </div>
                                    </div>
                                </div>
                                {/* module_2 */}
                                <div
                                    className={`module_steper module_3 ${this.state.active === "step_3" ? 'active' : ''}`}>
                                    <div className="fade-up">
                                        <div className="form_group_md putFull">
                                            <div className={`md_h md_box ${this.state.errorInputTest3}`}>
                                                <label>이름</label>
                                                <input type="text" value={this.state.inputTest3} onChange={(e) => this.setState({ inputTest3: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form_group_md footer_box_md">
                                            <button className="btn_prev" onClick={(e) => this.handleClickBtnNext(e, 'step_2')} >뒤로</button>
                                            <button className="btn_next" onClick={(e) => this.handleClickBtnNext(e, 'step_4', 'ani_3')} >다음 것</button>
                                        </div>
                                    </div>
                                </div>
                                {/* module_3 */}
                                <div
                                    className={`module_steper module_4 ${this.state.active === "step_4" ? 'active' : ''}`}>
                                    <div className="fade-up">
                                        <div className="form_group_md putFull">
                                            <div className={`md_h md_box ${this.state.errorInputTest4}`}>
                                                <label>이름</label>
                                                <input type="text" value={this.state.inputTest4} onChange={(e) => this.setState({ inputTest4: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form_group_md footer_box_md">
                                            <button className="btn_prev" onClick={(e) => this.handleClickBtnNext(e, 'step_3')} >뒤로4</button>
                                            <button className="btn_next" onClick={(e) => this.handleClickBtnNext(e, 'step_5', 'ani_4')} >다음 것</button>
                                        </div>
                                    </div>

                                </div>
                                {/* module_4 */}
                                <div
                                    className={`module_steper module_5 ${this.state.active === "step_5" ? 'active' : ''}`}>
                                    <div className="fade-up">
                                        <div className="form_group_md putFull">
                                            <div className={`md_h md_box ${this.state.errorInputTest5}`}>
                                                <label>이름</label>
                                                <input type="text" value={this.state.inputTest5} onChange={(e) => this.setState({ inputTest5: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form_group_md footer_box_md">
                                            <button className="btn_prev" onClick={(e) => this.handleClickBtnNext(e, 'step_4')} >뒤로</button>
                                            <button className="btn_finish" onClick={(e) => this.handleClickBtnNext(e, 'step_done', 'ani_5')} >끝</button>
                                        </div>
                                    </div>

                                </div>
                                {/* module_5 */}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        );
    }
}

export default Index;