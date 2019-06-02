import React, { Component } from 'react';
import ScheduleSelector from 'react-schedule-selector';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: []
        }
        this.save = this.save.bind(this);
    }

    handleChange = newSchedule => {
        this.setState({ schedule: newSchedule })
        //console.log(this.state.schedule);
    }
    renderCustomDateCell = (time, selected, innerRef) => (
        <div style={{ textAlign: 'center' }} ref={innerRef}>
            {selected ? '✅' : ' - '}
        </div>
    )
    save =()=>{
        console.log(this.state.schedule);
        var list = this.state.schedule;
        
        list.forEach(day => {
            var index = 1;
            day = list[0];
           // console.log(day);
        });

    }


    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ScheduleSelector
                            selection={this.state.schedule}
                            numDays={7}
                            minTime={1}
                            maxTime={24}
                            startDate={'05/06/2019'}
                            dateFormat="DD/MMM/YYYY"
                            renderDateCell={this.renderCustomDateCell}
                            onChange={this.handleChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Button variant="success" onClick={this.save}>Save</Button>
                </Row>

            </Container>
        )
    }
}

export default Schedule;
