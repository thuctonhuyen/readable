import React, {Component} from 'react';
import '../css/App.css';
import NavigationBar from './NavigationBar';
import ListPosts from './ListPosts'
import {Grid, Row} from 'react-bootstrap'
import {Route} from 'react-router-dom'
import NewPost from './NewPost'
import PostDetail from './PostDetail'
import {connect} from 'react-redux'
import {fetchAllPosts} from '../actions/posts_actions';
import {fetchAllCategories} from '../actions/categories_actions';
import {withRouter} from 'react-router-dom'

class App extends Component {

    componentDidMount() {
        const {dispatch, posts, categories, filters} = this.props;
        dispatch(fetchAllPosts());
        dispatch(fetchAllCategories());
    }


    render() {
        return (
            <Grid className="App">
                <Row>
                    <NavigationBar/>
                </Row>

                {["/:category", "/"].map
                (path => <Route exact path={path} component={ListPosts}/>)}
                <Route exact path="/add/newPost" component={NewPost}/>
                <Route exact path="/add/newComment" component={NewPost}/>
                <Route exact path="/:category/:id" component={PostDetail}/>


            </Grid>
        );
    }
}

function mapStateToProps(state) {
    const {posts, categories, filters} = state;
    return {
        posts, categories, filters
    }
}


export default  withRouter(connect(mapStateToProps)(App));
