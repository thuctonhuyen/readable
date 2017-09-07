import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import {changeCategoriesFilter} from '../actions/filters_actions';
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap';

class NavigationBar extends Component {
    handleClick = (option) => {
        const {dispatch} = this.props;
        dispatch(changeCategoriesFilter(option));
    };

    render() {
        const {categories} = this.props;
        let showingCategories = (categories) ? categories : [];
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"
                              onClick={() => this.handleClick('')}>Readable <Glyphicon
                            glyph="fire"></Glyphicon></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {showingCategories.map((category) =>
                                <LinkContainer key={category.name}
                                               to={`/${category.name}`}
                                               onClick={() => this.handleClick(category.name)}>
                                    <MenuItem>{category.name} </MenuItem>
                                </LinkContainer>
                            )}
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to={`/add/newPost`}>
                            <NavItem eventKey={1} href="#">Add new Post</NavItem>
                        </LinkContainer>
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
