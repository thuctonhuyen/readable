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
import {withRouter, Switch} from 'react-router-dom'
import Error404 from './Error404'

class App extends Component {
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchAllPosts());
        dispatch(fetchAllCategories());
    }

    render() {
        return (
            <Grid className="App">
                <Row>
                    <NavigationBar/>
                </Row>
                <Switch>
                    {["/:category", "/"].map((path, index) => <Route key={index} exact path={path}
                                                                     component={ListPosts}/>)}
                    <Route exact path="/add/newPost" component={NewPost}/>
                    <Route exact path="/:category/:id" component={PostDetail}/>
                    <Route component={Error404}/>
                </Switch>
            </Grid>
        );
    }
}

export default  withRouter(connect()(App));
