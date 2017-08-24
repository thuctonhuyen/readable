import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button, Glyphicon} from 'react-bootstrap'
import FilterBar from './FilterBar'
import {connect} from 'react-redux'

class ListPosts extends Component {
    render() {
        let {posts} = this.prop;
        posts = (posts) ? posts : [];

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
                                <p>{post.body.slice(1, 100)} ... </p>
                            </Col>
                        </Panel>
                    </Row>
                )}

            </Grid>

        );
    }
}

function mapStateToProps({posts}) {
    return {
        posts
    }
}

export default connect()(ListPosts);
