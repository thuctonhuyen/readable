import React, {Component} from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap'
import {connect} from 'react-redux'
import {changeSortByFilter} from '../actions/filters_actions'
import {sortPosts} from '../actions/posts_actions'


class FilterBar extends Component {

    handleSelection = (key, event) =>{
        const {dispatch} = this.props;
        dispatch(sortPosts(key));
        dispatch(changeSortByFilter(key));

    };

    render() {
        const {filters} = this.props;
        return (
            <SplitButton  bsSize="small" pullRight bsStyle={'default'} title="Sort by" id="sort-by-dropdown" onSelect={(eventKey, event) => this.handleSelection(eventKey, event)}>
                <MenuItem eventKey={'vote'} active={filters.sortBy === 'vote'}>Popular Vote</MenuItem>
                <MenuItem eventKey={'timestamp'} active={filters.sortBy === 'timestamp'}>Most Recent</MenuItem>
                <MenuItem eventKey={'title'} active={filters.sortBy === 'title'}>Title</MenuItem>
            </SplitButton>
        );
    }

}

function mapStateToProps(state) {
    return {
        filters: state.filters
    }
}


export default connect(mapStateToProps)(FilterBar);
