import React , {useState} from "react"

function Increment (){

    const [ count, SetCount]  = useState(0);


    return(
        <div>
            <p>count: {count}</p>
            <button onClick={()=>SetCount(count + 1)}> Increment</button>

        </div>
    )
}