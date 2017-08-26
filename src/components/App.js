import React, {Component} from 'react';
import '../App.css';
import NavigationBar from './NavigationBar';
import ListPosts from './ListPosts'
import {Grid, Row} from 'react-bootstrap'
import {Route} from 'react-router-dom'
import NewPost from './NewPost'

class App extends Component {

    // handleCategoryClick = (option) => {
    //     const {dispatch} = this.props;
    //     dispatch(changeCategoriesFilter(option));
    //     option !== 'all' ? dispatch(getPostsForCategoryAPI(option)) : dispatch(getAllPosts());
    // };


    render() {
        return (
            <Grid className="App">
                <Row>
                    <NavigationBar/>
                </Row>

                <Route exact path="/:category?" component={ListPosts}/>

                <Route exact path="/:category?/newPost" component={NewPost}/>

            </Grid>
        );
    }
}

//TODO: add the route here later


export default (App);
