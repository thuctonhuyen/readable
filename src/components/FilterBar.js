import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap'
import {connect} from 'react-redux'
import {sortPosts} from '../actions/posts_actions'


class FilterBar extends Component {

    handleSelection = (key, event) =>{
        const {dispatch} = this.props;
        dispatch(sortPosts(key));
    };

    //note active:

    render() {
        return (
            <DropdownButton bsStyle={'default'} title="Sort by" id="sort-by-dropdown" onSelect={(eventKey, event) => this.handleSelection(eventKey, event)}>
                <MenuItem eventKey={'vote'}>Vote</MenuItem>
                <MenuItem eventKey={'timestamp'}>Time</MenuItem>
                <MenuItem eventKey={'title'}>Title</MenuItem>
            </DropdownButton>
        );
    }
}

export default connect()(FilterBar);
