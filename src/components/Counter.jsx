import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { incremnt, decrement } from "../redux/actions/action"

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.count)
    // console.log(count);

    return (
        <>
            <button onClick={() => dispatch(incremnt())}>+</button>
            {count}
            <button onClick={() => dispatch(decrement())}>-</button>
        </>
    )
}

export default Counter
