import React, {Component} from 'react';
import {
    Row, ButtonGroup, DropdownButton,
    Button, MenuItem, Grid,
} from 'react-bootstrap'
import {connect} from 'react-redux'
import {selectPostCategory} from '../actions/filters_actions'
import CreateEditForm from './CreateEditForm'

class NewComment extends Component {

    handleOnSelection = (category) => {
        const {dispatch} = this.props;
        dispatch(selectPostCategory(category));

    };

    render() {
        const {categories, filters} = this.props;
        return (
            <Row>
                <Grid>

                    <Row>
                        <form style={{'padding-top': '10px'}}>
                            <CreateEditForm/>
                        </form>
                    </Row>
                </Grid>
            </Row>
        );
    }
}

function mapStateToProps(state) {
    const {categories, filters} = state;
    return {
        categories, filters
    }
}

export default connect(mapStateToProps)(NewComment);
