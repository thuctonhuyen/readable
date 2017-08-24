import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button, Glyphicon} from 'react-bootstrap'
import FilterBar from './FilterBar'
import {connect} from 'react-redux'

class ListPosts extends Component {
    render() {
        let {posts} = this.props;
        posts = (posts[0]) ? posts[0] : [];

        console.log(posts);

        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={5} mdPush={7}><FilterBar/></Col>
                </Row>
                <br/>

                {posts.map((post) =>
                    <Row className="show-grid">
                        <Panel>
                            <Col xs={1} md={1}>
                                <Button bsStyle="link"><Glyphicon glyph="thumbs-up"/> </Button>
                                <br/>
                                <span>{post.voteScore}</span>
                                <br/>
                                <Button bsStyle="link"><Glyphicon glyph="thumbs-down"/> </Button>
                            </Col>
                            <Col xs={11} md={11}>
                                <h3>{post.title}</h3>
                                <p>{post.body.slice(1,500)} ... </p>
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
