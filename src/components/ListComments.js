import React, {Component} from 'react';
import {
    Row, Panel, Button, Col, PanelGroup
} from 'react-bootstrap'
import Vote from './Vote'
import {connect} from 'react-redux'
import {convertTimestampToString} from '../utils/helpers'
import {LinkContainer} from 'react-router-bootstrap';
import {setFormType} from '../actions/filters_actions';

//TODO: filters for comment section (sort by date, by vote)
class ListComments extends Component {

    render() {
        const {comments, postID} = this.props;
        return (
            <Panel header="Comments Section:">
                {comments.map(comment =>
                    <Panel>
                        <Col xs={2} md={1}>
                            <Vote commentID={comment.id} voteScore={comment.voteScore}/>
                        </Col>
                        <Col xs={10} md={11}>
                            <Row> <Col xs={5} xsPush={0}>
                                {comment.author} says: </Col>
                            </Row>
                            <Row> <Col xs={11} xsPush={1}>
                                {comment.body}
                            </Col>
                            </Row>
                            <Row>
                                <div style={{'float': 'right'}}>
                                    {convertTimestampToString(comment.timestamp)}
                                </div>
                            </Row>
                        </Col>
                    </Panel>
                )}
                <div style={{textAlign: 'center'}}>
                    <LinkContainer to={`/add/newComment/${postID}`}>
                        <Button bsStyle="primary">
                            Add New Comment
                        </Button>
                    </LinkContainer>
                </div>
            </Panel>




        );
    }
}

function mapStateToProps({comments}) {
    return {
        comments
    }

}

export default connect(mapStateToProps)(ListComments);
