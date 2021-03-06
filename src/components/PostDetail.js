import React, {Component} from 'react';
import {
    Row, Panel, Col
} from 'react-bootstrap'
import Vote from './Vote'
import {connect} from 'react-redux'
import ListComments from './ListComments'
import {fetchCommentsForPost} from '../actions/comments_actions'
import EditDeleteLinks from './EditDeleteLinks';
import {getRenderContent} from '../utils/helpers'

class PostDetail extends Component {

    componentDidMount() {
        const {dispatch, match} = this.props;
        dispatch(fetchCommentsForPost(match.params.id));
    }

    render() {
        const {posts, comments, match, history} = this.props;

        let post = (match.params.id) ?
            posts.filter(post => post.id === match.params.id && !post.deleted) : [];

        let renderContent =
            <Row className="show-grid">
                {post.map(post =>
                    <Row key={post.id}>
                        <h4 style={{'textAlign': 'center'}}>{post.title}</h4>
                        <Panel>
                            <Row>
                                <Col xs={2} md={1}>
                                    <Vote postID={post.id} voteScore={post.voteScore}/>
                                </Col>
                                <Col xs={10} md={11}>
                                    <Row>

                                        <div style={{'float': 'left', 'textAlign': 'left'}}>{post.body}
                                        </div>
                                    </Row>
                                    <Row>
                                        <div style={{'float': 'right'}}>by {post.author}</div>
                                    </Row>
                                </Col>
                            </Row>
                            <EditDeleteLinks postID={post.id} history={history}/>
                        </Panel>
                        <ListComments comments={comments} postID={post.id}/>
                    </Row>
                )}

            </Row>
        ;

        renderContent = getRenderContent(Boolean(post.length > 0), renderContent);

        return (
            renderContent
        );
    }
}

function mapStateToProps({posts, comments}) {
    return {
        posts, comments
    }

}

export default connect(mapStateToProps)(PostDetail);
