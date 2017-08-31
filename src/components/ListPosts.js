import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button} from 'react-bootstrap'
import FilterBar from './FilterBar'
import {connect} from 'react-redux'

import sortOn from 'sort-on'
import {Link} from 'react-router-dom'
import {getDetailPost} from '../actions/filters_actions';
import Vote from './Vote'
import EditDeleteLinks from './EditDeleteLinks';
import {getBriefBody} from '../utils/helpers'

//TODO: sort date descendingly
class ListPosts extends Component {

    sortPost(posts, option) {
        if (option === 'voteScore')
            option = `-${option}`;
        return (sortOn(posts, option));
    }

    handlePostDetail = (id) => {
        const {dispatch} = this.props;
        dispatch(getDetailPost(id));

    };

    render() {
        const {posts, filters, match} = this.props;
        let category = (match.params.category);

        // dispatch(getPostsForCategoryAPI(category));
        let showingPosts = (posts) ? posts : [];

        if (showingPosts) {
            showingPosts = (!category || category.trim() === '')
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
                                <Row>
                                    <Col xs={2} md={1}>
                                        <Vote postID={post.id} voteScore={post.voteScore}/>
                                    </Col>
                                    <Col xs={10} md={11}>
                                        <Link to={`/${post.category}/${post.id}`}
                                              onClick={() => this.handlePostDetail(post.id)}>
                                            <h4>{post.title}</h4>
                                        </Link>
                                        <p>{getBriefBody(post.body)} </p>
                                    </Col>
                                </Row>

                                <EditDeleteLinks formType="post" postID={post.id}/>

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
