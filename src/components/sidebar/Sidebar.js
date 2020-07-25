import React, { useState } from 'react';
import { Nav } from "react-bootstrap";


import './Sidebar.css';


const Sidebar = props => {


    return (
        <Nav variant="pills" defaultActiveKey="/table" className="flex-column">
            <Nav.Link href="/table">Table</Nav.Link>
            <Nav.Link href="/category2">Category 2</Nav.Link>
            <Nav.Link href="/category3">Category 3</Nav.Link>
            <Nav.Link href="/category4">Category 4</Nav.Link>
            <Nav.Link href="/category5">Category 5</Nav.Link>
        </Nav>
    );
};

export default Sidebar