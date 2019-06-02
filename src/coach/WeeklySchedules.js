import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import $ from "jquery";

class WeeklySchedules extends Component {

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
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
            console.log('index  = ' + index + 'value ' +  list2[index].checked);
        }
        for (var index = 0; index < list3.length; index++) {
            console.log('index  = ' + index + ' value ' +  list3[index].checked);
        }
        for (var index = 0; index < list4.length; index++) {
            console.log('index  = ' + index + ' value ' +  list4[index].checked);
        }
        for (var index = 0; index < list5.length; index++) {
            console.log('index  = ' + index + ' value ' +  list5[index].checked);
        }
        for (var index = 0; index < list6.length; index++) {
            console.log('index  = ' + index + ' value ' +  list6[index].checked);
        }
        for (var index = 0; index < list7.length; index++) {
            console.log('index  = ' + index + ' value ' +  list7[index].checked);
        }
        for (var index = 0; index < list8.length; index++) {
            console.log('index  = ' + index + ' value ' +  list8[index].checked);
        }

    }
    render() {
        return (
            <Container>
                <Row style={{textAlign: "center"}}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Thời gian </th>
                                <th>Thứ 2</th>
                                <th>Thứ 3</th>
                                <th>Thứ 4</th>
                                <th>Thứ 5</th>
                                <th>Thứ 6</th>
                                <th>Thứ 7</th>
                                <th>Chủ nhật</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5am</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 6am</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" className='t2' />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td> 7am</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" className='t2' />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 8am</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox"  />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 9am</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 10am</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox"  />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 11am</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox"  />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td> 12am</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox"  />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 1pm</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox"  />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 2pm</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox"  />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 3pm</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 4pm</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox"  />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 5pm</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox"  />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 6pm</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 7pm</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td> 8pm</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td> 9pm</td>
                                <td className='t2'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox"z />
                                    </Form.Group>
                                </td>
                                <td className='t3'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t4'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t5'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t6'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='t7'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                                <td className='cn'>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" />
                                    </Form.Group>
                                </td>
                            </tr>

                        </tbody>
                    </Table>;
               </Row>
                <Row>
                    <Button variant="success" onClick={this.save}>Save</Button>
                </Row>
            </Container>
        );
    }
}

export default WeeklySchedules;