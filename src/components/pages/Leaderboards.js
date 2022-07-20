import React, {Component, useState, useMemo} from 'react';
import '../../App.css';
import axios from 'axios'
import {useTable} from 'react-table'



export default function Leaderboards(){

    const [joke, setJoke] = useState("")
    const getJoke =() => {
        axios.get('/players').then(
            (response) => {
                console.log(response);
                setJoke(Object.keys(response.data[0]).map(Attr => <th key={Attr}>{Attr.toUpperCase()}</th>))
            }
        );
    };
    //response.data[0].id
    return (
    
    <div className='Bdef'> 
        <button onClick={getJoke}>
            View Leaderboards
        </button>
        {joke}
    </div>
    )
}