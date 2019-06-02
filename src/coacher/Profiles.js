import React, { Component } from 'react';
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import errorList from '../configs/message.json';
import urlLink from '../configs/url.json';


class Profiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sportName: '',
            groupType: '',
            address: '',
            expHlv: '',
            expTt: '',
            plandetail: '',
            planLean: '',
            quickView: '',
            address: ''
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Sport Name</Form.Label>
                                <Form.Control as="select" value={this.state.sportName} >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Check
                                    type="radio"
                                    label="Team"
                                    name="formHorizontalRadios"
                                    id="groupType" value={this.state.groupType} onChange={(e) => this.setState({ groupType: !this.state.groupType })}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Check
                                    type="radio"
                                    label="Personal"
                                    name="formHorizontalRadios"
                                    id="groupType" value={this.state.groupType} onChange={(e) => this.setState({ male: !this.state.male })}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Check
                                    type="radio"
                                    label="Group"
                                    name="formHorizontalRadios"
                                    id="groupType" value={this.state.groupType} onChange={(e) => this.setState({ male: !this.state.groupType })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Search address " value={this.state.address} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Kinh nghiem HLV</Form.Label>
                                <Form.Control as="textarea" rows="3"  value={this.state.expHlv}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Kinh nghiem tuyen thu</Form.Label>
                                <Form.Control as="textarea" rows="3"  value={this.state.expTt}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Ke hoach tiet hoc</Form.Label>
                                <Form.Control as="textarea" rows="3" value={this.state.plandetail} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>So luoc</Form.Label>
                                <Form.Control as="textarea" rows="3" value={this.state.quickView} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>;

            </div>
        );
    }
}

export default Profiles;