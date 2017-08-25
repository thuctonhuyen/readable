import React, {Component} from 'react';
import '../App.css';
import NavigationBar from './NavigationBar';
import ListPosts from './ListPosts'
import AddPostModal from './AddPostModal'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'

class App extends Component {


    render() {
        return (
            <Grid className="App">
                <Row>
                    <NavigationBar/>
                </Row>
                <Row>
                    <ListPosts/>
                </Row>
                {/*<Row>*/}
                    {/*<AddPostModal/>*/}
                {/*</Row>*/}
            </Grid>
        );
    }
}



export default (App);
