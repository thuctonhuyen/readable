import React, {Component} from 'react';
import {
    Row,
    Button, FormGroup,
    ControlLabel, FormControl
} from 'react-bootstrap'


class NewPost extends Component {

    render() {
        return (
            <form>

                <FormGroup>
                    <ControlLabel>Title:</ControlLabel>
                    <FormControl></FormControl>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Body of Content:</ControlLabel>
                    <FormControl></FormControl>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Name of Author:</ControlLabel>
                    <FormControl></FormControl>
                </FormGroup>

                <div style={{textAlign: 'center'}}>
                    <Button bsStyle="primary" type="submit">
                        Submit
                    </Button>
                </div>

            </form>
        );
    }
}

export default NewPost;
