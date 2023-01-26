import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, fetchUserById } from './counterSlice'
import {
    useGetUsresQuery,
    useGetUsersByIdQuery,
    useLazyGetUsersByIdQuery,
    useDeleteUserByIdMutation,
    usePatchUserByIdMutation,} from './UsersAI'

function Counter (){
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const usersGetUsresData = useGetUsresQuery()
    // const [fetch, data] = usePatchUserByIdMutation()
    // const [fetch, data] = usePatchUserByIdMutation()
    const  [fetch, data] = useDeleteUserByIdMutation()
    console.log('value', value) 
    console.log('usersGetUsresData', usersGetUsresData.data) 
    // console.log('useDeleteUserByIdMutation', data) 

    const handlerOnClick = () => {
    // dispatch(fetchUserById({ userID: value }))
        fetch(value)
    }

    const handlerOnClickDelete = () => {
    // dispatch(fetchUserById({ userID: value }))
        fetch({id:value})
    }

  return (
    <div>
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                +
            </button>
            <span>count: {value}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
            -
            </button>
            <button
                onClick={handlerOnClick}>
            Users
              </button>
              
                <button
                onClick={handlerOnClickDelete}>
            Delete
            </button>
              <ul>
                {usersGetUsresData.isFetching && <li>loading...</li>}  
                {!usersGetUsresData.isFetching && usersGetUsresData.data.map(item => <li>{item.id} + {item.name}</li>)}
              </ul>   
              <button onClick={()=>usersGetUsresData.refetch()}>refetch</button>
              
      </div>
    </div>
  )
}

export default Counter;