import React, {Component} from 'react';
import {Button, Row, Collapse, Well} from 'react-bootstrap';
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
        else if (commentID) {
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
        const {dispatch, postID, commentID, history} = this.props;
        if (postID) {
            dispatch(deletePostAPI(postID));
            history.push("/");
        } else {
            dispatch(deleteCommentAPI(commentID));
        }


    };

    handleCollapse(postID, commentID) {
        const {filters} = this.props;

        if (postID && filters.formType && filters.formType.includes('Post') && postID === filters.postID)
            return true;
        if (commentID && filters.formType && filters.formType.includes('Comment') && commentID === filters.commentID)
            return true;
        return false;

    }

    render() {
        const {postID, commentID, filters} = this.props;

        //only show createEditForm when needed
        let createEditForm = (filters.formType && (filters.formType === 'editPost' || filters.formType === 'editComment'))
            ? <CreateEditForm/> : '';

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
                            {createEditForm}
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