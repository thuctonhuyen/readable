import React, {Component} from 'react';
import '../App.css';
import NavigationBar from './NavigationBar';
import ListPosts from './ListPosts'
import AddPostModal from './AddPostModal'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'
import {fetchAllCategories} from '../actions/categories_actions';

import {connect} from 'react-redux'

class App extends Component {

    componentDidMount() {
        const {dispatch, posts, categories, filters} = this.props;

        //TODO: later on should move into navigation bar
        dispatch(fetchAllCategories());
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

function mapStateToProps(state) {
    const { posts, categories, filters} = state;

    return{
        posts, categories, filters
    }

}

export default connect(mapStateToProps)(App);
