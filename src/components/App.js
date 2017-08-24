import React, {Component} from 'react';
import '../App.css';
import NavigationBar from './Navbar';
import ListPosts from './ListPosts'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'


class App extends Component {

    render() {
        return (
            <Grid className="App">
                <Row><NavigationBar/></Row>
                <Row><ListPosts/> </Row>
            </Grid>
        );
    }
}

export default App;
