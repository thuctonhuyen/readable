import React, {Component} from 'react';
import {Button, Row, Collapse, Panel, Well} from 'react-bootstrap';
import {connect} from 'react-redux';
import CreateEditForm from './CreateEditForm';
import {setFormType, setPostId, setCommentId} from '../actions/filters_actions'
import {deletePostAPI} from '../actions/posts_actions';
import {deleteCommentAPI} from '../actions/comments_actions';

class EditDeleteLinks extends Component {
    handleEdit = () => {
        const {dispatch, postID, commentID, filters} = this.props;
        if (postID) {
            if (filters.formType !== 'editPost') {
                dispatch(setFormType('editPost'));
                dispatch(setPostId(postID));
            } else {
                dispatch(setFormType(null));
                dispatch(setPostId(null));
            }
        }
        else {
            if (filters.formType !== 'editComment') {
                dispatch(setFormType('editComment'));
                dispatch(setCommentId(commentID));
            } else {
                dispatch(setFormType(null));
                dispatch(setCommentId(null));
            }
        }
    };


    handleDelete = () => {
        const {dispatch, postID, commentID} = this.props;
        (postID) ? dispatch(deletePostAPI(postID)) : dispatch(deleteCommentAPI(commentID));
    };

    handleCollapse(postID, commentID) {
        const {filters} = this.props;
        return (filters.postID === postID || filters.commentID === commentID);
    }


    render() {
        const {filters, postID, commentID} = this.props;
        return (
            <div>
                <Row>
                    <div style={{float: 'right'}}>
                        <Button bsStyle="link" onClick={() => this.handleEdit()}>Edit</Button>
                        <Button bsStyle="link" onClick={() => this.handleDelete()}>Delete</Button>
                    </div>
                </Row>

                <Row>
                    <Collapse in={this.handleCollapse(postID, commentID)}>
                        <Well>
                            <CreateEditForm/>
                        </Well>
                    </Collapse>
                </Row>
            </div>
        );
    }
}

function mapStateToProps({filters}) {
    return {
        filters
    }
}

export default connect(mapStateToProps)(EditDeleteLinks);