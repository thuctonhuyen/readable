import React, {Component} from 'react';
import {
    Row, Panel, Button, Col
} from 'react-bootstrap'
import Vote from './Vote'
import {connect} from 'react-redux'


class PostDetail extends Component {
    render() {
        const {posts, match} = this.props;
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
                    </Row>
                )}
                <Row>
                    <Panel>
                        comment section
                    </Panel>
                </Row>
            </Row>
        );
    }
}

function mapStateToProps({posts}) {
    return {
        posts
    }

}

export default connect(mapStateToProps)(PostDetail);
