import React, {Component} from 'react';
import {
    Row,
    Button, FormGroup,
    ControlLabel, FormControl
} from 'react-bootstrap'
import {connect} from 'react-redux';
import serializeForm from 'form-serialize';
import {addPostAPI} from '../actions/posts_actions';
import {addCommentAPI} from '../actions/comments_actions';
import {LinkContainer} from 'react-router-bootstrap'

const uuidv4 = require('uuid/v4');
class NewPost extends Component {
    handleOnSubmit = (e) => {
        e.preventDefault();
        const body = serializeForm(e.target, {hash: true});

        const {filters, history} = this.props;
        const {formType, postID, postCategory} = filters;


        if (formType === 'addPost') {
            this.handleAddNewPost(body, postCategory);
            history.push('/');
        }
        else if (formType === 'editPost') {


        }

        else if (formType === 'addComment') {
            this.handleAddNewComment(body, postID);
            history.goBack();
        }

        else if (formType === 'editComment') {

        }



    };

    //HISTORY PUSH TO GO BACK:
    handleAddNewPost = (body, category) => {
        const {dispatch} = this.props;
        body['id'] = (uuidv4());
        body['timestamp'] = Date.now();
        body['category'] = category;
        dispatch(addPostAPI(body));
    };

    handleAddNewComment = (body, postID) => {
        const {dispatch} = this.props;
        body['id'] = (uuidv4());
        body['timestamp'] = Date.now();
        body['parentId'] = postID;
        dispatch(addCommentAPI(body));
    };


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
                    <FormControl type="text" name="body" placeholder="Fill in content here..."/>
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
