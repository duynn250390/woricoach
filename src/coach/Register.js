///'use strict';

import React, { Component } from 'react';
import StepZilla from "react-stepzilla";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import '../main.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.sampleStore = {
            email: '',
            gender: '',
            savedToCloud: false
        };
    }

    onStepChange = (step)=>{
        console.log('cai kon meo ' + step);
    }

    getStore() {
        return this.sampleStore;
    }

    updateStore(update) {
        this.sampleStore = {
            ...this.sampleStore,
            ...update,
        }
    }

    render() {
        const steps =
            [
                { name: 'Thông Tin Cơ Bản', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
                { name: 'Profile HLV', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
                { name: 'Thiết lập chi phí ', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
                { name: 'Thiết lập Schedule', component: <Step4 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
                { name: 'Đăng kí ', component: <Step5 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> }

            ]


        return (
        <div className='step-progress'>
          <StepZilla
            steps={steps}
            preventEnterSubmission={true}
            startAtStep={window.sessionStorage.getItem('step') ? parseFloat(window.sessionStorage.getItem('step')) : 0}
            onStepChange={(step) => window.sessionStorage.setItem('step', step)}
           />
        </div>


        )
    }
}
export default Register;
