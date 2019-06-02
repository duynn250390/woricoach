//'use strict';


import React, { Component } from 'react';
import { Form} from 'react-bootstrap';

class Step4 extends Component {
    componentDidMount() {
        console.log(' step 4 = ' + window.sessionStorage.getItem('step'));
        console.log(' hic ' + window.sessionStorage.getItem('step'));

    }

    onStepChange = (step) => {
        console.log(' step 4 ' + step);

    }

    render() {
        return (
            <div className="step step5" style={{marginTop: 100, minHeight: 300, marginBottom: 50}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="step 1" onChange={(e) => this.setState({ email: e.target.value })} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                </Form.Group>
            </div>
        );
    }
}

export default Step4;

