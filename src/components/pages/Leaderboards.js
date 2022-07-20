import React, {Component, useState, useMemo} from 'react';
import '../../App.css';
import axios from 'axios'
import {useTable} from 'react-table'





export default function Leaderboards(){

    const [columnNames, setTable] = useState("")
    const getTable =() => {
        axios.get('/leaderboards').then(
            (response) => {
                console.log(response);
                setTable(Object.keys(response.data[0]).map(Attr => <th key={Attr}>{Attr.toUpperCase()}</th>))
            }
        );
    };
    
    const [rows, setRows] = useState("")
    const getRows =() => {
        axios.get('/leaderboards').then(
            (response) => {
                console.log(response);
                setRows(Object.keys(response.data[0].leaderboardid).map(Attr => <th key={Attr}>{Attr.toUpperCase()}</th>))
            }
        );
    }

    //response.data[0].id
    return (
    
    <div className='Leaderboards'> 
        <button onClick={getTable}>
            View Leaderboard Coloumn Names
        </button>
        <button onClick={getRows}>
            View Leaderboard Row Enteries
        </button>
        {columnNames}
        {rows}
    </div>
    )
}