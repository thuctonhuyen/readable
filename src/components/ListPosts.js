import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button, Glyphicon, Clearfix} from 'react-bootstrap'
import FilterBar from './FilterBar'
import {connect} from 'react-redux'
import {votePostAPI} from '../actions/posts_actions'

class ListPosts extends Component {

    handleOnClick = (id, option) => {
        const {dispatch} = this.props;
        dispatch(votePostAPI(id, option));
    };

    render() {
        const {posts} = this.props;
        let showingPosts = (posts) ? posts : [];

        console.log(showingPosts);
        showingPosts = showingPosts.filter((post) => !post.deleted);
        return (
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
                                            onClick={()=>this.handleOnClick(post.id, 'upVote')}>
                                        <Glyphicon glyph="thumbs-up"/>
                                    </Button>
                                    <span>{post.voteScore}</span>
                                    <Button bsStyle="link"
                                            onClick={()=>this.handleOnClick(post.id, 'downVote')}>
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

        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(ListPosts);
