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
                            <Glyphicon glyph="thumbs-up"/>
                            <br/>
                            <span>1235</span>
                            <br/>
                            <Glyphicon glyph="thumbs-down"/>
                        </Col>
                        <Col xs={11} md={11}>
                            <h3>
                                Is react something worth learning?
                            </h3>
                        </Col>
                    </Panel>
                </Row>

                <Row className="show-grid">
                    <Panel>
                        <Col xs={1} md={1}>
                            <Glyphicon glyph="thumbs-up"/>
                            <br/>
                            <span>1235</span>
                            <br/>
                            <Glyphicon glyph="thumbs-down"/>
                        </Col>
                        <Col xs={11} md={11}>
                            <h3>
                                Is react something worth learning?
                            </h3>
                        </Col>
                    </Panel>
                </Row>

                <Row className="show-grid">
                    <Panel>
                        <Col xs={1} md={1}>
                            <Glyphicon glyph="thumbs-up"/>
                            <br/>
                            <span>1235</span>
                            <br/>
                            <Glyphicon glyph="thumbs-down"/>
                        </Col>
                        <Col xs={11} md={11}>
                            <h3>
                                Is react something worth learning?
                            </h3>
                        </Col>
                    </Panel>
                </Row>

                <Row className="show-grid">
                    <Panel>
                        <Col xs={1} md={1}>
                            <Glyphicon glyph="thumbs-up"/>
                            <br/>
                            <span>1235</span>
                            <br/>
                            <Glyphicon glyph="thumbs-down"/>
                        </Col>
                        <Col xs={11} md={11}>
                            <h3>
                                Is react something worth learning?
                            </h3>
                        </Col>
                    </Panel>
                </Row>

                <Row className="show-grid">
                    <Panel>
                        <Col xs={1} md={1}>
                            <Glyphicon glyph="thumbs-up"/>
                            <br/>
                            <span>1235</span>
                            <br/>
                            <Glyphicon glyph="thumbs-down"/>
                        </Col>
                        <Col xs={11} md={11}>
                            <h3>
                                Is react something worth learning?
                            </h3>
                        </Col>
                    </Panel>
                </Row>

                <Row className="show-grid">
                    <Panel>
                        <Col xs={1} md={1}>
                            <Glyphicon glyph="thumbs-up"/>
                            <br/>
                            <span>1235</span>
                            <br/>
                            <Glyphicon glyph="thumbs-down"/>
                        </Col>
                        <Col xs={11} md={11}>
                            <h3>
                                Is react something worth learning?
                            </h3>
                        </Col>
                    </Panel>
                </Row>

            </Grid>

        );
    }
}

export default ListPosts;
