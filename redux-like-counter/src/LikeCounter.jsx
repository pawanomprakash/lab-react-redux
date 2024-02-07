import React, { useState } from 'react'
import {createStore} from 'redux'
import reducer from './Reducers'
import {incrementLike, decrementLike} from './Actions' 

const store = createStore(reducer)

export default function LikeCounter() {
    const [count,setCount]=useState(0)
    const unsubscribe = store.subscribe(()=>{
        setCount(store.getState().count)
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>store.dispatch(incrementLike())}>Like</button>
      <button onClick={()=>store.dispatch(decrementLike())}>unlike</button>

    </div>
  )
}
