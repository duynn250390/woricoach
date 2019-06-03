import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tasklist extends Component {


    render() {

        const s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        const radomID = () => {
            return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
        }
        const data = [
            {
                id: radomID(),
                name: 'Học ReactJS',
                price: 1000000,
                status: true
            },
            {
                id: radomID(),
                name: 'Học AngularJS',
                price: 1200000,
                status: true
            },
            {
                id: radomID(),
                name: 'Học Laravel',
                price: 1200000,
                status: true
            },
            {
                id: radomID(),
                name: 'Học ASP.NET',
                price: 1200000,
                status: true
            },
            {
                id: radomID(),
                name: 'Học HTML/CSS',
                price: 1200000,
                status: true
            }
        ];
        const abc = this.props.todos;
        const content = abc.map((todo, i) =>
            <tr key={i}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.price}</td>
            </tr>
        );
        var generaData = () => {
            localStorage.setItem('task', JSON.stringify(data));
        }

        return (
            <div>
                <div className="container">
                    <div className="row">

                        <button type="button" class="btn btn-default" onClick={this.generaData}>Genera Data</button>

                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}




const mapStatetoProps = (state) => {
    return {
        todos: state.task
    }
};
export default connect(mapStatetoProps, null)(Tasklist);