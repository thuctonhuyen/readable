import React, {Component} from 'react';
import {
    Row,
    Button, FormGroup,
    ControlLabel, FormControl
} from 'react-bootstrap'


class NewPost extends Component {

    render() {
        return (
            <Row>
                <form>

                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </Row>
        );
    }
}

export default NewPost;
