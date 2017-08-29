import React, {Component} from 'react';
import {
    Row,
    Button, FormGroup,
    ControlLabel, FormControl
} from 'react-bootstrap'
import {connect} from 'react-redux';
import serializeForm from 'form-serialize';
import {addPostAPI} from '../actions/posts_actions';
import uuid from 'uuid'

const uuidv4 = require('uuid/v4');
class NewPost extends Component {
    handleOnSubmit = (e, formType, category) => {
        e.preventDefault();
        const body = serializeForm(e.target, { hash: true });

        if(formType === 'addPost'){
            this.handleAddNewPost(body);
        }
        else if(formType === 'editPost'){

        }

        else if(formType === 'addComment'){

        }

        else if(formType === 'editComment'){
            
        }
    };

    handleAddNewPost = (body, category) => {
        const {dispatch} = this.props;
        body['id'] = (uuidv4());
        body['timestamp'] = Date.now();
        body['category'] = category;
        body['voteScore'] = 0;
        dispatch(addPostAPI(body));
    };


    render() {
        const {filters} = this.props;
        return (
            <form onSubmit={(e) =>
                this.handleOnSubmit(e, filters.formType, filters.postCategory)}>
                <FormGroup>
                    <ControlLabel>Title:</ControlLabel>
                    <FormControl type="text" name="title" placeholder="Fill in title..."/>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Body of Content:</ControlLabel>
                    <FormControl  type="text" name="body" placeholder="Fill in content..."/>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Name of Author:</ControlLabel>
                    <FormControl type="text" name="author" placeholder="Fill in author..."/>
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
