import React, {Component} from 'react';
import {
    Row, Panel, Button, Col, Collapse, Well
} from 'react-bootstrap'
import Vote from './Vote'
import {connect} from 'react-redux'
import {convertTimestampToString} from '../utils/helpers'
import {LinkContainer} from 'react-router-bootstrap';
import {setFormType} from '../actions/filters_actions';
import CreateEditForm from './CreateEditForm'
import EditDeleteLinks from './EditDeleteLinks';

//TODO: filters for comment section (sort by date, by vote)
class ListComments extends Component {

    handleAddComment = () => {
        const {dispatch, filters} = this.props;

        (filters.formType !== 'addComment') ? dispatch(setFormType('addComment'))
            : dispatch(setFormType(null));
    };

    render() {
        const {comments, postID, filters} = this.props;
        return (
            <Panel header="Comments Section:">
                {comments.map(comment =>
                    <Panel>
                        <Row>
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
                        </Row>
                        <EditDeleteLinks commentID={comment.id}/>
                    </Panel>
                )}

                <div style={{textAlign: 'center'}}>
                    <Button bsStyle="primary" onClick={() => this.handleAddComment()}>
                        Add New Comment
                    </Button>
                </div>
                <Collapse in={filters.formType && filters.formType === 'addComment'}>
                    <Well>
                        <CreateEditForm postID={postID}/>
                    </Well>
                </Collapse>
            </Panel>
        );
    }
}

function mapStateToProps({comments, filters}) {
    return {
        comments, filters
    }

}

export default connect(mapStateToProps)(ListComments);
