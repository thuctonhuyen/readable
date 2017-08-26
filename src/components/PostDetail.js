import React, {Component} from 'react';
import {
    Row, Panel, Button, Col
} from 'react-bootstrap'
import Vote from './Vote'
import {connect} from 'react-redux'
import ListComments from './ListComments'


class PostDetail extends Component {
    render() {
        const {posts, comments, match} = this.props;
        let post = (match.params.id) ?
            posts.filter(post => post.id === match.params.id) : [];
        return (
            <Row className="show-grid">
                {post.map(post =>
                    <Row>
                        <h4>{post.title}</h4>
                        <Panel>
                            <Col xs={2} md={1}>
                                <Vote postID={post.id} voteScore={post.voteScore}/>
                            </Col>
                            <Col xs={10} md={11}>
                                <Row>
                                    <div style={{'float': 'left', 'text-align': 'left'}}>{post.body}
                                    </div>
                                </Row>
                                <Row>
                                    <div style={{'float': 'right'}}>by {post.author}</div>
                                </Row>
                            </Col>
                        </Panel>
                        <ListComments comments={comments}/>
                    </Row>
                )}

            </Row>
        );
    }
}

function mapStateToProps({posts, comments}) {
    return {
        posts, comments
    }

}

export default connect(mapStateToProps)(PostDetail);
