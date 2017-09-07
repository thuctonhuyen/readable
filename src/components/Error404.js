import React, {Component} from 'react';
import '../css/App.css';
import {Jumbotron}from 'react-bootstrap'

class Error404 extends Component {


    render() {
        return (
            <Jumbotron>
                <h1>URL NOT FOUND</h1>
                <p>We are sorry but the page you are looking for does not exist.</p>
            </Jumbotron>
        );
    }
}


export default (Error404);
