import React, {Component} from 'react';
import {
    Row, ButtonGroup, DropdownButton,
    Button, MenuItem, Grid,
} from 'react-bootstrap'
import {connect} from 'react-redux'
import CreateEditForm from './CreateEditForm'
import {setFormType, setPostId} from '../actions/filters_actions'

class NewComment extends Component {
    componentDidMount(){
        const {dispatch, match} = this.props;
        dispatch(setFormType('addComment'));
        dispatch(setPostId(match.params.id));
    }


    render() {
        const {categories, filters, history} = this.props;
        return (
            <Row>
                <Grid>
                    <Row>
                        <form style={{'padding-top': '10px'}}>
                            <CreateEditForm history={history}/>
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
