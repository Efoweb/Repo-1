import React from 'react'
import '../../App.css'
import {useState, useEffect} from 'react';


var counter = 0;
export default function Games(){

    
    var [count, setCount] = useState("")
    var [valueWin, setWin] = useState("")
    var [valueLose, setLose] = useState("")
    
    
    const getWin =() => {
        
        setWin("You Win!")
        setLose("")
        counter = 0;
        
        
    }
    const getLose =() => {
    
        setLose("You have lost "+counter + " times -_-")
        setWin("")
        counter = counter + 1;
    }

    return (

        < >
            <h1 className='Games'>
                <h2></h2>
                <h2 >{valueWin}</h2> <h2 >{valueLose}</h2>
                <button onClick={getWin}>Win</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <h3></h3>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <h3></h3>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <h3></h3>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <h3></h3>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <h3></h3>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <h3></h3>

                

            </h1>
        </>
        
    )
}

// background-image: url('../public/images/img-2.jpg');