//'use strict';


import React, { Component } from 'react';
import { Form} from 'react-bootstrap';

class Step3 extends Component {
    
    onStepChange = (step) => {
        console.log(' step 3 ' + step);
      
    }
    render() {
        return (
            <div className="step step5" style={{marginTop: 100, minHeight: 300, marginBottom: 50}}>
                <div className="row">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="step 1" onChange={(e) => this.setState({ email: e.target.value })} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                 </Form.Text>
                                </Form.Group>
                            </Form>;
                   
                </div>
            </div>
          
        );
    }
}

export default Step3;

