import React, {Component} from 'react';
import '../css/App.css';
import {Jumbotron, Glyphicon} from 'react-bootstrap'

class Error404 extends Component {


    render() {
        return (
            <Jumbotron>
                <h2>URL NOT FOUND <Glyphicon
                    glyph="warning-sign"></Glyphicon></h2>
                <p>We are sorry but the page you are looking for does not exist.</p>
            </Jumbotron>
        );
    }
}


export default (Error404);
