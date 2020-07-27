import React, { useState } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap"

import search from './images/search.png'

import './Header.css';


const Header = ({ searchWordFromHeader }) => {

    const [searchKeyword, setSearchKeyword] = useState()

    // search input handler
    const handleChange = (e) => {
        setSearchKeyword(e.target.value)
    }

    // submit button handler
    const handleSubmit = (e) => {
        e.preventDefault()
        searchWordFromHeader(searchKeyword)

    }


    return (


        <Container fluid className="tableHeader">
            <Row>

                {/* header title section */}
                <Col xs={6} className="d-flex p-0">
                    <h1 className="font-weight-bolder">This is a Table</h1>
                </Col>

                {/* search section of the header */}
                <Col xs={6} className="d-flex justify-content-end">
                    <div className="searchSection">
                        <Form inline onSubmit={handleSubmit}>
                            <FormControl type="text" placeholder="Search..." onChange={handleChange} />
                        </Form>
                        <img src={search} className="searchImg" alt="timelineImg" onClick={handleSubmit} />
                    </div>
                </Col>


            </Row>

        </Container>

    );
};

export default Header