import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button, Glyphicon} from 'react-bootstrap'
import FilterBar from './FilterBar'

class ListPosts extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={5} mdPush={7}><FilterBar/></Col>
                </Row>
                <br/>
                <Row className="show-grid">
                    <Panel>
                        <Col xs={1} md={1}>
                            <Button bsStyle="link"><Glyphicon glyph="thumbs-up"/> </Button>
                            <br/>
                            <span>1235</span>
                            <br/>
                            <Button bsStyle="link"><Glyphicon glyph="thumbs-down"/> </Button>
                        </Col>
                        <Col xs={11} md={11}>
                            <h3>
                                Is react something worth learning?
                            </h3>
                            <p>
                                Brief intro ........
                            </p>
                        </Col>
                    </Panel>
                </Row>



            </Grid>

        );
    }
}

export default ListPosts;
