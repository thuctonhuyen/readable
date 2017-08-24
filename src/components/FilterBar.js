import React, {Component} from 'react';
import {ButtonGroup, Button, MenuItem, DropdownButton} from 'react-bootstrap'


class FilterBar extends Component {

    render() {
        return (
            <ButtonGroup justified>
                <Button href="#">Sort by Vote</Button>
                <Button href="#">Sort by Time</Button>
                {/*<DropdownButton title="View by" id="bg-justified-dropdown">*/}
                    {/*<MenuItem eventKey="1">10 items</MenuItem>*/}
                    {/*<MenuItem eventKey="2">20 items</MenuItem>*/}
                {/*</DropdownButton>*/}
            </ButtonGroup>

        );
    }
}

export default FilterBar;
