import React, { useState } from 'react';
import { Nav } from "react-bootstrap";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap"
import search from './images/search.png'
import './Header.css';


const Header = props => {


    return (


        <Container fluid className="tableHeader">
            <Row>
                <Col xs={9} className="d-flex">
                    <h1>This is a Table</h1>
                </Col>
                <Col xs={3} className="d-flex justify-content-end">
                    <div className="searchSection">


                        <Form inline>
                            <FormControl type="text" placeholder="Enter 'pants'" />
                        </Form>
                        <img src={search} className="searchImg" alt="timelineImg" />
                    </div>

                </Col>
            </Row>

        </Container>

    );
};

export default Header