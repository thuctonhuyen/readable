import React, {Component} from 'react';
import {
    Row, ButtonGroup, DropdownButton, MenuItem, Grid,
} from 'react-bootstrap'
import {connect} from 'react-redux'
import {selectPostCategory, setFormType} from '../actions/filters_actions'
import CreateEditForm from './CreateEditForm'

class NewPost extends Component {

    handleOnSelection = (category) => {
        const {dispatch} = this.props;
        dispatch(selectPostCategory(category));

    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(setFormType('addPost'));
    }

    render() {
        const {categories, filters, history} = this.props;

        return (
            <Row>
                <Grid>
                    <Row>
                        <ButtonGroup>
                            <DropdownButton
                                title={'Select Category'}
                                id="category-selector"
                                onSelect={(eventKey) => this.handleOnSelection(eventKey)}>
                                {categories.map(category =>
                                    <MenuItem key={category.name} eventKey={category.name}
                                              active={filters.postCategory === category.name}>
                                        {category.name}
                                    </MenuItem>
                                )}
                            </DropdownButton>
                        </ButtonGroup>
                    </Row>
                    <Row style={{'display': filters.postCategory !== null ? 'grid' : 'none'}}>

                        <CreateEditForm history={history}/>

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

export default connect(mapStateToProps)(NewPost);
