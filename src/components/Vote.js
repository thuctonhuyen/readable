import React, {Component} from 'react';
import {votePostAPI} from '../actions/posts_actions'
import {connect} from 'react-redux'
import {Button, Glyphicon} from 'react-bootstrap'
import {voteCommentAPI } from '../actions/comments_actions';
import '../css/Vote.css';



class Vote extends Component {
    handleOnClick = (postID, commentID, option) => {
        const {dispatch} = this.props;
        (typeof postID !== 'undefined') ? dispatch(votePostAPI(postID, option))
            : dispatch(voteCommentAPI(commentID, option));
    };


    render() {
        const {postID, commentID, voteScore} = this.props;
        return (
            <div className="voteWrapper">
                <Button bsStyle="link"
                        onClick={() => this.handleOnClick(postID, commentID, 'upVote')}>
                    <Glyphicon glyph="thumbs-up"/>
                </Button>
                <span>{voteScore}</span>
                <Button bsStyle="link"
                        onClick={() => this.handleOnClick(postID, commentID, 'downVote')}>
                    <Glyphicon glyph="thumbs-down"/>
                </Button>
            </div>
        );
    }
}


export default connect()(Vote);
