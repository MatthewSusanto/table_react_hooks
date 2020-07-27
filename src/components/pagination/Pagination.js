import React, { useState } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import './Pagination.css';


const Paginations = ({ entriesPerPage, totalEntries, paginate, setEntriesPerPage }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const pageNumbers = [];

    // this is a loop to display how many pages for 20 entries per page (or more)
    for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
        pageNumbers.push(i);
    }


    //handler for entries per page selection
    const handleEntriesSelect = (e) => {
        setEntriesPerPage(e.target.value)
    }

    //handler for selected active page, plus showing the blue background of the page
    const handleActiveClick = (e) => {
        setCurrentPage(e)
    }






    return (



        <Container className="tablePagination ">
            <Row className="d-flex justify-content-lg-end py-5">

                <Col className="d-flex justify-content-lg-end p-0 mt-2">
                    Entries per page:
                </Col>

                {/* allows you to select how many entries per page */}
                <Col className="mt-2">
                    <Form.Control
                        size="sm"
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        custom
                        onChange={handleEntriesSelect}
                    >
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                    </Form.Control>
                </Col>

                {/* the pagination itself */}
                <Col md={4} className="p-0 mt-2" >
                    <nav className="text-center">
                        <ul className='pagination'>
                            {pageNumbers.map(number => (
                                <li key={number} onClick={() => handleActiveClick(number)} className={`page-item ${(currentPage === number) ? 'active' : ''}`}>
                                    <a onClick={() => paginate(number)} className='page-link'>
                                        {number}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Col>

            </Row>

        </Container>

    );
};

export default Paginations