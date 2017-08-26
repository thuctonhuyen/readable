import React, {Component} from 'react';
import {
    Row, Panel, Button, Col
} from 'react-bootstrap'
import Vote from './Vote'
import {connect} from 'react-redux'


class ListComments extends Component {
    render() {
        const {comments} = this.props;
        return (
            <Panel>
                {comments.map(comment =>
                    <Panel>
                        <div>{comment.body}</div>
                    </Panel>
                )}
            </Panel>




        );
    }
}

function mapStateToProps({comments}) {
    return {
        comments
    }

}

export default connect(mapStateToProps)(ListComments);
