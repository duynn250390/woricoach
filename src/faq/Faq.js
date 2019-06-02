import React, { Component } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import urlLink from '../configs/url.json';
import Header from '../coach/Header';

class Faq extends Component {
    constructor(props, context) {
        super(props, context);
        this.search = this.search.bind(this);
        this.state = {
            url: urlLink.fqa,
            list: [],
            search: "",
            collapse: false,

        }
    }

    search = () => {
        var axios = require('axios');
        axios.get(this.state.url + '/search?keySearch=' + this.state.search)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    list: response.data
                });
            }).catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Container style={{ marginTop: 50 }}>
                    <Row>
                        <Col xs={8}>
                            <Form.Control type="text" placeholder=" Enter something you want to seach " onChange={(e) => this.setState({ search: e.target.value })} />
                        </Col>
                        <Col xs={4}>
                            <Button variant="outline-success" onClick={this.search}>Search </Button>
                        </Col>
                    </Row>
                    <Row className="box_item_sum_result">
                        {this.state.list.map(function (row, index) {
                            return (
                                <div className="box_result_fqa fqa_client">
                                    <Collapsible trigger={row.question}>
                                        <div>{row.answer}</div>
                                    </Collapsible>

                                </div>
                            );
                        })}
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Faq;