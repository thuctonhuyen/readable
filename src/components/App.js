import React, {Component} from 'react';
import '../App.css';
import NavigationBar from './NavigationBar';
import ListPosts from './ListPosts'
import AddPostModal from './AddPostModal'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'
import {fetchAllCategories} from '../actions/categories_actions';
import {fetchAllPosts} from '../actions/posts_actions';
import {connect} from 'react-redux'

class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchAllCategories());
        dispatch(fetchAllPosts());
    }


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

export default connect()(App);
