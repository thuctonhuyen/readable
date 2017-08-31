import React, {Component} from 'react';
import {Button, Row, Collapse, Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import CreateEditForm from './CreateEditForm';
import {setFormType, setPostId, setCommentId} from '../actions/filters_actions'
import {deletePostAPI} from '../actions/posts_actions';
import {deleteCommentAPI} from '../actions/comments_actions';

class EditDeleteLinks extends Component {
    handleEdit = () => {
        const {dispatch, postID, commentID} = this.props;
        if(postID) {
            dispatch(setFormType('editPost'));
            dispatch(setPostId(postID));
        }
        else {
            dispatch (setFormType('editComment'));
            dispatch(setCommentId(commentID));
        }
    };



    handleDelete = () => {
        const {dispatch, postID, commentID} = this.props;
        (postID) ? dispatch(deletePostAPI(postID)) : dispatch (deleteCommentAPI(commentID));
    };


    render(){
        const {filters} = this.props;
        return (
            <Row>
                <div style={{float: 'right'}}>
                    <Button bsStyle="link" onClick={() => this.handleEdit()}>Edit</Button>
                    <Button bsStyle="link" onClick={() => this.handleDelete()}>Delete</Button>
                </div>
                <Collapse in={filters.formType === 'editPost'
                || filters.formType === 'editComment'}>
                    <Panel>
                        <CreateEditForm/>
                    </Panel>
                </Collapse>
            </Row>
        );
    }
}

function mapStateToProps({filters}){
    return {
        filters
    }
}

export default connect(mapStateToProps)(EditDeleteLinks);