import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button, Glyphicon, Clearfix} from 'react-bootstrap'
import FilterBar from './FilterBar'
import {connect} from 'react-redux'
import {votePostAPI} from '../actions/posts_actions'
import {fetchAllPosts} from '../actions/posts_actions';
import sortOn from 'sort-on'
import {withRouter} from 'react-router-dom'
import {getPostsForCategoryAPI, getAllPosts} from '../actions/posts_actions'

class ListPosts extends Component {

    sortPost(posts, option) {
        if (option === 'voteScore')
            option = `-${option}`;
        return (sortOn(posts, option));
    }

    componentDidMount() {
        const {dispatch, posts, categories, filters} = this.props;
        dispatch(fetchAllPosts());
    }

    handleOnClick = (id, option) => {
        const {dispatch} = this.props;
        dispatch(votePostAPI(id, option));
    };



    render() {
        const {posts, filters, match} = this.props;
        let category = (match.params.category);


        // dispatch(getPostsForCategoryAPI(category));
        let showingPosts = (posts) ? posts : [];

        if (showingPosts) {
            showingPosts = (!category)
            ? showingPosts.filter((post) => !post.deleted)
            : showingPosts.filter((post) => !post.deleted && post.category === category);
        }
        
        showingPosts = this.sortPost(showingPosts, filters.sortBy);

        return (
            <Row>
                <Grid>
                    <Row className="show-grid">
                        <div style={{float: 'right'}}><FilterBar/></div>
                    </Row>
                    <br/>
                    {showingPosts.map((post) =>
                        <Row className="show-grid" key={post.id}>
                            <Panel>
                                <Col xs={2} md={1}>
                                    <div style={{display: 'grid'}}>
                                        <Button bsStyle="link"
                                                onClick={() => this.handleOnClick(post.id, 'upVote')}>
                                            <Glyphicon glyph="thumbs-up"/>
                                        </Button>
                                        <span>{post.voteScore}</span>
                                        <Button bsStyle="link"
                                                onClick={() => this.handleOnClick(post.id, 'downVote')}>
                                            <Glyphicon glyph="thumbs-down"/>
                                        </Button>
                                    </div>
                                </Col>
                                <Col xs={10} md={11}>
                                    <h4>{post.title}</h4>
                                    <p>{post.body.slice(0, 200)}... </p>
                                </Col>
                            </Panel>
                        </Row>
                    )}
                </Grid>
            </Row>

        );
    }
}

function mapStateToProps(state) {
    const {posts, categories, filters} = state;
    return {
        posts, categories, filters
    }
}

export default connect(mapStateToProps)(ListPosts);
