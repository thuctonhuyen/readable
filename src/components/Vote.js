import React, {Component} from 'react';
import {votePostAPI} from '../actions/posts_actions'
import {connect} from 'react-redux'
import {Button, Glyphicon} from 'react-bootstrap'
import '../css/Vote.css';



class Vote extends Component {
    handleOnClick = (id, option) => {
        const {dispatch} = this.props;
        dispatch(votePostAPI(id, option));
    };


    render() {
        const {postID, voteScore} = this.props;
        return (
            <div className="voteWrapper">
                <Button bsStyle="link"
                        onClick={() => this.handleOnClick(postID, 'upVote')}>
                    <Glyphicon glyph="thumbs-up"/>
                </Button>
                <span>{voteScore}</span>
                <Button bsStyle="link"
                        onClick={() => this.handleOnClick(postID, 'downVote')}>
                    <Glyphicon glyph="thumbs-down"/>
                </Button>
            </div>
        );
    }
}


export default connect()(Vote);
