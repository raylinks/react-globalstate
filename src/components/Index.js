import React,{useContext }from 'react'
import { GlobalContext} from '../context/GlobalState'

export const Index = () => {
    const context = useContext(GlobalContext)
    console.log(context) ;
    return (
        <div>
            <h1>how are you</h1>
        </div>
    )
}
