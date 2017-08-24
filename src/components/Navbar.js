import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';

class NavigationBar extends Component {
    handleSelect(e) {
        //e.preventDefault();
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Readable</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Hot <Glyphicon glyph="fire"></Glyphicon></NavItem>
                        <NavItem eventKey={2} href="#">Weekly</NavItem>
                        <NavDropdown eventKey={3} title="View by Categories" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>CAT1</MenuItem>
                            <MenuItem eventKey={3.2}>CAT2</MenuItem>
                            <MenuItem eventKey={3.3}>CAT3</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Add new Post</NavItem>
                        <NavItem eventKey={2} href="#">Add ....</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
