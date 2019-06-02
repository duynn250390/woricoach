//'use strict';
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Step5 extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);

        this.state = {
            savedToCloud: props.getStore().savedToCloud
        };
    }

    onStepChange = (step) => {
        console.log(' step 5 ' + step);

    }
    login = () => {
        alert('cain kon meof ');
    }



    render() {
        return (
            <div className="step step5" style={{marginTop: 100, minHeight: 300, marginBottom: 50}}>
                <p>
                    Đảm bảo độ tin cậy và tính an toàn của HLV là mục tiêu ưu tiên hàng đầu của WeCoach.
                    Tất cả các HLV đăng ký WeCoach, mỗi năm sẽ nhận được cam đoan quản lý lai lịch.
                    Vì điều này, chi phí 10,000 won mỗi năm sẽ được rút ra từ tài khoản của các HLV.
                    Mong bạn hãy xác nhận điều.
                 </p>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Thông tin Credit Card
                        </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>- Điều khoản </Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Thông tin Credit Card </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" type="submit" onClick={this.login}  style={{float: "right", marginRight: 100}}>
                        Save
                    </Button>
                </Form.Group>
            </div>
            
        )
    }
}
export default Step5;
