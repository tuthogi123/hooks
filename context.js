import React, {useContext} from "react"


const myContext  = React.createContext()

function Context (){

    const contextValue  = useContext(myContext)       
return(

    <div>
        context value:  {contextValue}
    </div>
)

}