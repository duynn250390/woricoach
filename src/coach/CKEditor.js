import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { Container, Form, Row, Button, Col } from 'react-bootstrap';
import '../sass/main.scss';

class CKEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    save = () => {
        console.log(this.state.editorState);
    }
    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                        Nhập tiêu đề :
                        </Form.Label>
                    <Col sm="9">
                        <Form.Control type="type" placeholder="enter title " size='50' />
                    </Col>
                </Form.Group>

                <Row>
                    <div style={{ minWidth: 300, minHeight: 300, margin: 'solid' }}>
                        <Editor
                            editorState={editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={this.onEditorStateChange}
                        />
                    </div>
                </Row>
                <Row>
                    <Button variant="success" onClick={this.save.bind(this)}>Success</Button>
                </Row>
            </div>
        )
    }
}

export default CKEditor;