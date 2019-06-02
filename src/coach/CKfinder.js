import CKEditor from "react-ckeditor-component";
import React, { Component } from 'react';
import { Row, Button } from 'react-bootstrap';

class CKfinder extends Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            content: '',
        }
    }

    updateContent(newContent) {
        alert(' hic hic ');
        this.setState({
            content: newContent
        })
    }

    save = () => {
        console.log(this.state.content);
    }
    onChange(evt) {
        console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        console.log('data ' + this.state.content);
        console.log(this.state.content);
        this.setState({
            content: newContent
        })
    }

    onBlur(evt) {
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste(evt) {
        console.log("afterPaste event called with event info: ", evt);
    }

    render() {
        return (
            <div style={{ marginTop: 100 }}>
                <Row>
                    <div style={{ minWidth: 300, minHeight: 300 }}>
                        <CKEditor
                            activeClass="p10"
                            content={this.state.content}
                            events={{
                                "blur": this.onBlur,
                                "afterPaste": this.afterPaste,
                                "change": this.onChange
                            }}
                        />
                    </div>
                </Row>
                <Row>
                    <Button variant="success" onClick={this.save.bind(this)}>Save</Button>
                </Row>
            </div>
        )
    }
}
export default CKfinder;