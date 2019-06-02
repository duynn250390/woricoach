//'use strict';

import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    onStepChange = (step) => {
        console.log(' step 1 ' + step);

    }
    componentWillUnmount() { }

    // not required as this component has no forms or user entry
    // isValidated() {}

    render() {
        return (
            <div className="step step5" style={{ marginTop: 100, minHeight: 300, marginBottom: 50 }}>
                <Row>
                    <Col>
                        <Form.Group controlId="name">
                            <Form.Label>Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="name">
                            <Form.Label>Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="name">
                            <Form.Label>Photo </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="name">
                            <Form.Label>Ngay thang nam sinh  </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="name">
                            <Form.Label>Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="name">
                            <Form.Label>Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default Step1;