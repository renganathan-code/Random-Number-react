import { useState } from "react";

function Random()
{
    var [number,setnumber] = useState(0);

    function RandomNumber()
    {
        var randomnumber = Math.floor(Math.random()*100)
        setnumber(randomnumber)
    }
    return(
        <>
        <div className="container">
            <h1>Random Number</h1>
            <h3>Generate a random number between 1 to 100</h3>
            <h1>{number}</h1>
            <h3>Generate random number is: {number}</h3>
            <button onClick={RandomNumber}>Generate</button>
        </div>
        </>
    )
}

export default Random;