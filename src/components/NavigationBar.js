import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import {fetchAllCategories} from '../actions/categories_actions';
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

class NavigationBar extends Component {


    componentDidMount() {
        const {dispatch, posts, categories, filters} = this.props;
        dispatch(fetchAllCategories());
    }

    handleSelect(e) {
        //e.preventDefault();
    }

    render() {
        const {categories} = this.props;
        let showingCategories = (categories) ? categories : [];
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Readable</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Hot <Glyphicon glyph="fire"></Glyphicon></NavItem>
                        <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
                            {showingCategories.map((category) =>
                                <LinkContainer to={`/${category.name}`}>
                                    <MenuItem>{category.name} </MenuItem>
                                </LinkContainer>
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
