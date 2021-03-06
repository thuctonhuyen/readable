import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap'
import FilterBar from './FilterBar'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getDetailPost} from '../actions/filters_actions';
import Vote from './Vote'
import EditDeleteLinks from './EditDeleteLinks';
import {getBriefBody, sortList, getRenderContent} from '../utils/helpers'
import {changeSortByFilter} from '../actions/filters_actions'
import BlankPage from './BlankPage';

class ListPosts extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(changeSortByFilter('voteScore'));
    }

    handlePostDetail = (id) => {
        const {dispatch} = this.props;
        dispatch(getDetailPost(id));

    };

    getShowingPosts = (posts, category) => {
        return (!category || category.trim() === '')
            ? posts.filter((post) => !post.deleted)
            : posts.filter((post) => !post.deleted && post.category === category);
    };

    render() {
        const {posts, filters, match, categories} = this.props;
        let category = (match.params.category) ? match.params.category : '';

        let showingPosts = (posts) ? this.getShowingPosts(posts, category) : [];
        showingPosts = sortList(showingPosts, filters.sortBy);

        let new_categories = categories.reduce((accumulator, currentValue) => {
            accumulator.push(currentValue.name);
            return accumulator;
        }, ['']);

        let renderContent = (showingPosts.length === 0)
            ? <BlankPage/>
            :
            <Row>
                <Grid>
                    <Row className="show-grid">
                        <div style={{float: 'right'}}><FilterBar/></div>
                    </Row>
                    <br/>
                    {showingPosts.map((post) =>
                        <Row className="show-grid" key={post.id}>
                            <Panel>
                                <Row>
                                    <Col xs={2} md={1}>
                                        <Vote postID={post.id} voteScore={post.voteScore}/>
                                    </Col>
                                    <Col xs={10} md={11}>
                                        <Link to={`/${post.category}/${post.id}`}
                                              onClick={() => this.handlePostDetail(post.id)}>
                                            <h4>{post.title} by {post.author}</h4>
                                        </Link>
                                        <p>{getBriefBody(post.body)} </p>
                                    </Col>
                                </Row>

                                <EditDeleteLinks postID={post.id}/>

                            </Panel>
                        </Row>
                    )}
                </Grid>
            </Row>;

        renderContent = getRenderContent(Boolean(new_categories.includes(category)), renderContent);

        return (
            renderContent
        );
    }
}

function mapStateToProps(state) {
    const {posts, categories, filters} = state;
    return {
        posts, categories, filters
    }
}

export default connect(mapStateToProps)(ListPosts);
