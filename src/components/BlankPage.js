import React, {Component} from 'react';
import '../css/App.css';
import {Link} from 'react-router-dom'

class BlankPage extends Component {

    render() {
        return (
            <div><h2>NO ACTIVITY YET.</h2>
                <p>CLICK <Link to={`/add/newPost`}>HERE</Link> TO ADD A NEW POST.</p></div>
        );
    }
}

export default (BlankPage);
