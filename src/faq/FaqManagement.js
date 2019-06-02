import React, { Component } from 'react';
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import errorList from '../configs/message.json';
import urlLink from '../configs/url.json';
import Header from '../coach/Header';

class FaqManagement extends Component {
    constructor(props, context) {
        super(props, context);
        this.search = this.search.bind(this);
        this.displayRow = this.displayRow.bind(this);
        this.updateRow = this.updateRow.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.insertRow = this.insertRow.bind(this);
        this.approveDelete = this.approveDelete.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
        this.showMessageDeleteHandle = this.showMessageDeleteHandle.bind(this);
        this.showMessageUpdateHandle = this.showMessageUpdateHandle.bind(this);
        this.state = {
            url: urlLink.fqa,
            list: [],
            search: "",
            show: false,
            showDialog: false,
            newShow: false,
            selectedId: '',
            selectQuestion: '',
            selectAnswer: '',
            newQuestion: '',
            newAnswer: '',
            errorQuestion: errorList.fqa.quenstion,
            errorQUE: '',
            errorASE: '',
            errorAnswer: '',
            deleledRow: '',
            showMessageDelete: false,
            showMessageUpdate: false

        }
    }
    componentDidMount = () => {
        console.log("url " + urlLink.fqa);
        console.log("error  " + errorList.fqa.quenstion);

    }
    handleClose = () => {
        this.setState({ show: false });
    }
    showMessageDeleteHandle = () => {
        this.setState({
            showMessageDelete: false
        })

    }

    handleShow() {
        this.setState({ show: true });
    }

    showMessageUpdateHandle = () => {
        this.setState({
            showMessageUpdate: false
        })
    }

    displayRow = (row) => {
        this.setState({
            show: true,
            selectedId: row.id,
            selectQuestion: row.question,
            selectAnswer: row.answer,
            errorAnswer: '',
            errorQuestion: '',
            errorQUE: '',
            errorASE: '',
        })
    }
    updateRow = () => {
        var flag = true;
        if (this.state.selectQuestion.trim().length === 0) {
            this.setState({
                errorQuestion: errorList.fqa.quenstion

            })
            flag = false;
        } else {
            this.setState({
                errorQuestion: ''

            })
        }
        if (this.state.selectAnswer.trim().length === 0) {
            this.setState({
                errorAnswer: errorList.fqa.answer,

            })
            flag = false;
        } else {
            this.setState({
                errorAnswer: ''

            })
        }
        if (flag !== false) {
            this.setState({
                show: false
            });
            var axios = require('axios');
            axios.post(this.state.url + '/update',
                {
                    id: this.state.selectedId,
                    question: this.state.selectQuestion,
                    answer: this.state.selectAnswer

                }).then((response) => {
                    console.log(response.data);
                    var id = this.state.selectedId;
                    var newList = this.state.list;
                    for (var i = 0; i < newList.length; i++) {
                        if (newList[i].id === id) {
                            newList[i].answer = this.state.selectAnswer;
                            newList[i].question = this.state.selectQuestion;
                        }
                    }
                    this.setState({
                        list: newList,
                        showMessageUpdate: true
                    });
                }).catch(function (error) {
                    console.log(error);
                });
        }

    }
    insertRow = () => {
        var flag = true;
        if (this.state.newQuestion.trim().length === 0) {
            this.setState({
                errorQuestion: errorList.fqa.quenstion,
                errorQUE: 'has-error'
            })
            flag = false;
        } else {
            this.setState({
                errorQuestion: '',
                errorQUE: 'has-success'
            })
        }
        if (this.state.newAnswer.trim().length === 0) {
            this.setState({
                errorAnswer: errorList.fqa.answer,
                errorASE: 'has-error'
            })
            flag = false;
        } else {
            this.setState({
                errorAnswer: '',
                errorASE: 'has-success'
            })
        }
        console.log(' flag ' + flag);
        if (flag !== false) {
            this.setState({
                newShow: false
            });

            var axios = require('axios');
            axios.post(this.state.url + '/insert',
                {
                    question: this.state.newQuestion,
                    answer: this.state.newAnswer
                }).then((response) => {
                    console.log(response.data);
                    var newList = this.state.list;
                    newList.push(response.data);
                    this.setState({
                        list: newList
                    });
                }).catch(function (error) {

                    console.log(error);
                });
        }

    }

    addClose = () => {
        this.setState({
            newShow: false
        })
    }
    search = () => {
        var axios = require('axios');
        axios.get(this.state.url + '/search?keySearch=' + this.state.search)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    list: response.data
                })
            }).catch(function (error) {
                console.log(error);
            });
    }
    confirmDelete = (row) => {
        this.setState({
            showDialog: true,
            deleledRow: row.id
        })

    }
    deleted = () => {
        this.setState({
            showMessageDelete: false
        })
    }
    approveDelete = () => {
        var axios = require('axios');
        axios.get(this.state.url + '/delete/' + this.state.deleledRow)
            .then((response) => {
                var id = this.state.deleledRow;
                var newList = this.state.list;
                for (var i = 0; i < newList.length; i++) {
                    if (newList[i].id === id) {
                        newList.splice(i, 1);
                    }
                }
                this.setState({
                    list: newList
                });
                this.setState({ showDialog: false, showMessageDelete: true });
            }).catch(function (error) {
                console.log(error);
            });
    }

    addNewRow = () => {
        this.setState({
            newShow: true,
            selectQuestion: '',
            selectAnswer: '',
            errorAnswer: '',
            errorQuestion: '',
            newAnswer: '',
            newQuestion: ''
        })
    }
    cancelDelete = () => {
        this.setState({
            showDialog: false
        });
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Container style={{ marginTop: 50 }}>
                    <div style={{ float: "right" }}>
                        <Button variant="outline-success" onClick={this.addNewRow.bind(this)}>Add New</Button>
                    </div>
                    <Row>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder=" Enter something you want to seach " onChange={(e) => this.setState({ search: e.target.value })} />
                        </Col>
                        <Col sm={4}>
                            <Button variant="outline-success" onClick={this.search}>Search </Button>
                        </Col>
                    </Row>
                    <Row className="box_item_sum_result fqa_admin">
                        {this.state.list.map((row, index) => {
                            return (
                                <div className="box_result_fqa" key={row.id}>
                                    <Collapsible className="" trigger={row.question} >
                                        <p className="">{row.answer}</p>
                                    </Collapsible>
                                    <ul className="action_fqa">
                                        <li className="update"><i onClick={() => this.displayRow(row)} className="fa fa-refresh" aria-hidden="true"></i></li>
                                        <li className="delete"><i onClick={() => this.confirmDelete(row)} className="fa fa-times" aria-hidden="true"></i></li>
                                    </ul>
                                </div>// box_result_fqa
                            );
                        })}
                    </Row>
                    <div>
                        <>
                            <Modal show={this.state.newShow} onHide={this.addClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New FQA</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group controlId="newQuestion">
                                            <div className={this.state.errorQUE}>
                                                <Form.Label> Question </Form.Label>
                                                <Form.Control type="text" value={this.state.newQuestion}
                                                    onChange={(e) => this.setState({ newQuestion: e.target.value })}
                                                />
                                            </div>
                                            <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorQuestion}</Row>
                                        </Form.Group>
                                        <Form.Group controlId="newAnswer">
                                            <Form.Label>Answer</Form.Label>
                                            <textarea className="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="5"
                                                value={this.state.newAnswer}
                                                onChange={(e) => this.setState({ newAnswer: e.target.value })}
                                            />
                                            <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorAnswer}</Row>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.addClose.bind(this)}>
                                        Close
                        </Button>
                                    <Button variant="primary" onClick={this.insertRow.bind(this)}>
                                        Add New
                       </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </div>
                    <>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update FQA</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="question">
                                        <Form.Label> Question </Form.Label>
                                        <Form.Control type="text" value={this.state.selectQuestion}
                                            onChange={(e) => this.setState({ selectQuestion: e.target.value })}
                                        />
                                        <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorQuestion}</Row>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Answer</Form.Label>
                                        <textarea className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="5"
                                            value={this.state.selectAnswer}
                                            onChange={(e) => this.setState({ selectAnswer: e.target.value })}

                                        />
                                        <Row style={{ color: 'red', marginLeft: 5 }}>{this.state.errorAnswer}</Row>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="outline-secondary" onClick={this.handleClose.bind(this)}>
                                    Close
                        </Button>
                                <Button variant="outline-success" onClick={this.updateRow.bind(this)}>
                                    Update
                       </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    <>
                        <Modal show={this.state.showDialog} onHide={this.cancelDelete}>
                            <Modal.Header closeButton>
                                <Modal.Title>Are you sure to delete record</Modal.Title>
                            </Modal.Header>
                            <Modal.Footer>
                                <Button variant="outline-danger" onClick={this.approveDelete}>Delete</Button>
                                <Button variant="outline-secondary" onClick={this.cancelDelete}>
                                    Cancel
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    <>
                        <Modal show={this.state.showDialog} onHide={this.cancelDelete}>
                            <Modal.Header closeButton>
                                <Modal.Title>Are you sure to delete record</Modal.Title>
                            </Modal.Header>
                            <Modal.Footer>
                                <Button variant="outline-danger" onClick={this.approveDelete}>Delete</Button>
                                <Button variant="outline-secondary" onClick={this.cancelDelete}>
                                    Cancel
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    <>
                        <Modal show={this.state.showMessageDelete} onHide={this.showMessageDeleteHandle}>
                            <Modal.Header showMessageDeleteHandle>
                                <Modal.Title>Delete success</Modal.Title>
                            </Modal.Header>
                            <Modal.Footer>
                                <Button variant="outline-success" onClick={this.deleted.bind(this)}>
                                    OK
                            </Button>
                            </Modal.Footer>

                        </Modal>
                    </>
                    <>
                        <Modal show={this.state.showMessageUpdate} onHide={this.showMessageUpdateHandle}>
                            <Modal.Header showMessageUpdateHandle>
                                <Modal.Title>Update Success</Modal.Title>
                            </Modal.Header>
                            <Modal.Footer>
                                <Button variant="outline-success" onClick={this.showMessageUpdateHandle.bind(this)}>
                                    OK
                            </Button>
                            </Modal.Footer>

                        </Modal>
                    </>
                </Container >
            </div>
        );
    }
}

export default FaqManagement;