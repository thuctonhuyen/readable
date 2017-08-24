import React, {Component} from 'react';
import '../App.css';
import Navbar from './Navbar';
import {Row, Col} from 'react-bootstrap'


class App extends Component {

    render() {
        return (
            <div className="App container">
                <Row>
                    <Col xs={8} xsOffset={4}><Navbar/></Col>
                </Row>
            </div>
        );
    }
}

export default App;
