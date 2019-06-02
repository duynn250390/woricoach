import React, { Component } from 'react';
import { Form, Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class CoachInfo extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Row>
                        <Form.Group as={Row} controlId="name">
                            <Form.Label column sm="2">
                                Name
                        </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Enter name " />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="email">
                            <Form.Label column sm="2">
                                Email
                        </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder="enter email" />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Row} controlId="email">
                            <Form.Label column sm="2">
                                Photo
                        </Form.Label>
                            <Col sm="10">
                                <Form.Control type="file" placeholder="chooose file" />
                            </Col>
                        </Form.Group>
                    </Row>
                </Form>;
            </Container>
        );
    }
}

export default CoachInfo;