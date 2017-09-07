import React, {Component} from 'react';
import {
    Button, FormGroup,
    ControlLabel, FormControl
} from 'react-bootstrap'
import {connect} from 'react-redux';
import serializeForm from 'form-serialize';
import {addPostAPI, editPostAPI} from '../actions/posts_actions';
import {addCommentAPI, editCommentAPI} from '../actions/comments_actions';
import {setFormType, setPostId, setCommentId, selectPostCategory} from '../actions/filters_actions';
import {getDefaultValue} from '../utils/helpers'
const uuidv4 = require('uuid/v4');

class NewPost extends Component {
    handleOnSubmit = (e) => {
        e.preventDefault();
        const body = serializeForm(e.target, {hash: true});

        const {dispatch, filters, history} = this.props;
        const {formType, postID, commentID, postCategory} = filters;


        if (formType === 'addPost') {
            this.handleAddNewPost(body, postCategory);
            history.push('/');
        }
        else if (formType === 'editPost') {
            this.handleEditPost(body, postID);
        }

        else if (formType === 'addComment') {
            this.handleAddNewComment(body, postID);
        }

        else if (formType === 'editComment') {
            this.handleEditComment(body, commentID);
        }
        dispatch(setFormType(null));
        e.target.reset();
    };

    handleAddNewPost = (body, category) => {
        const {dispatch} = this.props;
        body['id'] = (uuidv4());
        body['timestamp'] = Date.now();
        body['category'] = category;
        dispatch(addPostAPI(body));
        dispatch(setPostId(null));
        dispatch(selectPostCategory(null));
    };

    handleEditPost = (body, postID) => {
        const {dispatch} = this.props;
        if (this.validationEditBody(body))
            dispatch(editPostAPI(postID, body));
        dispatch(setPostId(null));
    };

    handleAddNewComment = (body, postID) => {
        const {dispatch} = this.props;
        body['id'] = (uuidv4());
        body['timestamp'] = Date.now();
        body['parentId'] = postID;
        dispatch(addCommentAPI(body));
        dispatch(setCommentId(null));
    };

    handleEditComment = (body, commentID) => {
        const {dispatch} = this.props;
        if (this.validationEditBody(body))
            dispatch(editCommentAPI(commentID, body));
        dispatch(setCommentId(null));
    };

    validationEditBody(body) {
        for (let key of Object.keys(body)) {
            if (!body[key])
                delete body[key];
        }
        return (body);
    }


    render() {
        const {filters} = this.props;
        const {formType, postID, commentID} = filters;

        let editingPost = {};
        let editingComment = {};
        if (formType === 'editPost') {
            const {posts} = this.props;
            editingPost = (posts.filter((post) => post.id === postID))[0];

        }
        else if (formType === 'editComment') {
            const {comments} = this.props;
            editingComment = (comments.filter((comment) => comment.id === commentID))[0];
        }

        return (
            <form style={{display: postID || commentID}} onSubmit={(e) =>
                this.handleOnSubmit(e)}>

                <FormGroup style={{
                    'display': (filters.formType === 'addPost'
                    || filters.formType === 'editPost' ? 'block' : 'none')
                }}>
                    <ControlLabel>Title:</ControlLabel>
                    <FormControl
                        defaultValue={getDefaultValue(formType, editingPost, editingComment, 'title')}
                        type="text" name="title"
                        placeholder="Fill in title here..."/>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Body of Content:</ControlLabel>
                    <FormControl
                        defaultValue={getDefaultValue(formType, editingPost, editingComment, 'body')}
                        componentClass="textarea" name="body"
                        placeholder="Fill in content here..."/>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Name of Author:</ControlLabel>
                    <FormControl
                        defaultValue={getDefaultValue(formType, editingPost, editingComment, 'author')}
                        type="text" name="author"
                        placeholder="Fill in name of author here..."/>
                </FormGroup>

                <div style={{textAlign: 'center'}}>
                    <Button bsStyle="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        );
    }
}

function mapStateToProps({filters, posts, comments}) {
    return {
        filters, posts, comments
    }
}

export default connect(mapStateToProps)(NewPost);
