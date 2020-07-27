
import React, { useState } from 'react';
import { Container, Row } from "react-bootstrap";

import TableComponent from '../table/TableComponent'
import Header from '../header/Header';

import './Dashboard.css'


const Dashboard = props => {

    // Below is the way to gather the "search word" information from the Header Component
    // and pass it as a props to the Table Compoent

    const [filterWord, setFilterWord] = useState()
    const searchedWord = (word) => {
        let searchWord = word
        setFilterWord(searchWord)
    }

    // --------------------------------------------

    return (
        <>
            <Container fluid className="dashboard-body">
                <Row>


                    <Header searchWordFromHeader={searchedWord} />
                    <TableComponent filteredEntries={filterWord} />

                </Row>

            </Container>
        </>
    );
};

export default Dashboard