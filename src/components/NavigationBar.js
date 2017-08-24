import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';


class NavigationBar extends Component {
    handleSelect(e) {
        //e.preventDefault();
    }

    render() {
        let {categories} = this.props;
        categories = (categories[0]) ? categories[0] : [];
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
                        <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
                            {categories.map((category) =>
                                <MenuItem key={category.name}>{category.name}</MenuItem>
                            )}
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Add new Post</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps({categories}) {
    return {
        categories
    }
}

export default connect(mapStateToProps)(NavigationBar);
