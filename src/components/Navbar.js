import React, {Component} from 'react';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Navbar extends Component {
    handleSelect(e) {
        //e.preventDefault();
    }
    render() {
        return (
            <Nav bsStyle="pills" activeKey="1" onSelect={(e) => this.handleSelect(e)}>
                <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
                <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
                <NavItem eventKey="3" >NavItem 3 content</NavItem>
                <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                    <MenuItem eventKey="4.1">Action</MenuItem>
                    <MenuItem eventKey="4.2">Another action</MenuItem>
                    <MenuItem eventKey="4.3">Something else here</MenuItem>
                    <MenuItem divider/>
                    <MenuItem eventKey="4.4">Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        );
    }
}

export default Navbar;
