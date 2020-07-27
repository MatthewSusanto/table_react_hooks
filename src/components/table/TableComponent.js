import React, { useState, useEffect } from 'react';

import { Container } from "react-bootstrap";

import './TableComponent.css'
import axios from 'axios'

import DeleteButton from './images/delete.png'
import SaveButton from './images/save.png'
import FavouriteButton from './images/favourite.png'
import ArrowNeutral from './images/arrowNeutrals.png'
import ArrowUp from './images/arrowUps.png'
import ArrowDown from './images/arrowDowns.png'

import Pagination from '../pagination/Pagination'
import Table from 'react-bootstrap/Table'



const TableComponent = ({ filteredEntries }) => {

    const [entries, setEntries] = useState([]); // this will be for the initial entries from the server
    const [loading, setLoading] = useState(false);

    // This is for search
    const [searchWord, setSearchWord] = useState(filteredEntries); // this will take the filteredEntries props as the search keyword value
    const [filteredEntry, setFilteredEntry] = useState([]) // this will be an empty array reserved for filtered entries

    // This is for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(20);

    // This is for sorting
    const [sortedEntries, setSortedEntries] = useState([]); //this is an empty array reserved for sorted entries
    const [sorting, setSorting] = useState('');  //this will be the sorting input type such as (index, name, id, etc)
    const [order, setOrder] = useState(true); //if order is true = Ascending, false = Descending


    //fetching the data
    useEffect(() => {
        const fetchEntries = async () => {
            setLoading(true);
            const res = await axios.get('https://cors-anywhere.herokuapp.com/https://www.tabtu.top/pic/100.json');
            //There was an error I encountered, needed to use proxy (package.json)
            setEntries(res.data);
            setFilteredEntry(res.data);
            setLoading(false)
        }

        fetchEntries();


    }, [])


    //for search feature
    useEffect(() => {

        if (filteredEntry) {
            setSearchWord(filteredEntries)
            setFilteredEntry(
                entries.filter(e => {
                    return (e.name.toString().toLowerCase().includes(searchWord) ||
                        e._id.toString().toLowerCase().includes(searchWord) ||
                        e.isActive.toString().toLowerCase().toString().includes(searchWord) ||
                        e.index == searchWord ||
                        e.tags.toString().toLowerCase().includes(searchWord))
                })
            )
        }

    }, [searchWord, entries, filteredEntries])


    // to delete entries
    const deleteEntry = (itemToBeDeleted) => {
        const filteredItem = entries.filter(item => {
            return item !== itemToBeDeleted;
        });
        setEntries(filteredItem)
    }

    //sorting algorithm for the index (for now)
    const sortBy = (input) => {
        setSorting(input)
        setOrder(!order)
        let sorted

        switch (true) {
            case (order === true):
                sorted = entries.sort((a, b) => (b.index - a.index))
                break;
            case (order === false):
                sorted = entries.sort((a, b) => (a.index - b.index))
                break;

            default:
        }

        setSortedEntries(sorted)

    }

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    //This will be the current entries of the table
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    let currentEntries = []


    //IF STATEMENTS FOR ENTRIES
    //--------------------------------------------------------------------------------------------

    //If statement for sorting
    if (sorting === 'index') {
        currentEntries = sortedEntries.slice(indexOfFirstEntry, indexOfLastEntry);
    }
    //If statement for search feature
    if (searchWord) {
        currentEntries = filteredEntry.slice(indexOfFirstEntry, indexOfLastEntry);
    } else {
        currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);
    }


    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================

    // Will display Loading when gathering data from server
    if (loading) {
        return <h2> Loading... </h2>
    }

    return (

        <Container>

            <Table responsive striped bordered className="my-5" >

                <thead>
                    <tr>
                        <th></th>
                        <th onClick={() => sortBy('index')}> Index <img src={(order ? ArrowUp : ArrowDown)} alt="" /> </th>
                        <th>Name </th>
                        <th>Tags  </th>
                        <th>Active Status </th>
                        <th>ID </th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {currentEntries.map(e => (
                        <tr className={((e.isActive) ? '' : 'notActive')} key={e._id}>
                            <td>
                                <img src={e.picture} alt="imageIcon" />
                            </td>
                            <td>
                                {e.index}
                            </td>
                            <td>
                                {e.name}
                            </td>
                            <td>
                                {e.tags.join(', ')}
                            </td>
                            <td >

                                {e.isActive.toString()}
                            </td>
                            <td>
                                {e._id}
                            </td>
                            <td>
                                <img src={DeleteButton} className="m-1" alt="deleteBtn" onClick={() => deleteEntry(e)} />
                                <img src={SaveButton} className="m-1" alt="saveBtn" />
                                <img src={FavouriteButton} className="m-1" alt="favBtn" />
                            </td>
                        </tr>
                    )

                    )}
                </tbody>

            </Table>

            {/* The pagination section */}
            <Pagination entriesPerPage={entriesPerPage} totalEntries={entries.length} paginate={paginate} setEntriesPerPage={setEntriesPerPage} />

        </Container>

    );
};

export default TableComponent