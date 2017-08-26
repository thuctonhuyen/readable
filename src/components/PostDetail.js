import React, {Component} from 'react';
import {
    Row
} from 'react-bootstrap'

import {connect} from 'react-redux'


class PostDetail extends Component {
    render() {
        const {posts, match} = this.props;
        let post = (match.params.id) ?
            posts.filter(post => post.id === match.params.id) : [];
        return (
            <Row>
                {post.map(post =>
                    <div key={post.id}>
                        <h2>{post['title']}</h2>
                    </div>
                )}
            </Row>
        );
    }
}

function mapStateToProps({posts}) {
    return {
        posts
    }

}

export default connect(mapStateToProps)(PostDetail);
