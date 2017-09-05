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
const uuidv4 = require('uuid/v4');

//TODO: check validation for required fields when adding post/comment
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
        if(this.validationEditBody(body))
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
        if(this.validationEditBody(body))
            dispatch(editCommentAPI(commentID, body));
        dispatch(setCommentId(null));
    };

    validationEditBody(body){
        for(let key of Object.keys(body)){
            if(!body[key])
                delete body[key];
        }

        return (body);
    }


    render() {
        const {filters} = this.props;
        return (
            <form onSubmit={(e) =>
                this.handleOnSubmit(e)}>

                <FormGroup style={{
                    'display': (filters.formType === 'addPost'
                    || filters.formType === 'editPost' ? 'block' : 'none')
                }}>
                    <ControlLabel>Title:</ControlLabel>
                    <FormControl type="text" name="title" placeholder="Fill in title here..."/>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Body of Content:</ControlLabel>
                    <FormControl  componentClass="textarea"  name="body" placeholder="Fill in content here..."/>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Name of Author:</ControlLabel>
                    <FormControl type="text" name="author" placeholder="Fill in name of author here..."/>
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

function mapStateToProps({filters}) {
    return {
        filters
    }
}

export default connect(mapStateToProps)(NewPost);
