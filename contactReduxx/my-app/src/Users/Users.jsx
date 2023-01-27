import React, {useState} from 'react'
import UserForm from '../UserForm/UserForm'
import User from './User'
import {
  useGetUsresQuery,
  useAddUserMutation,
  useDeleteUserMutation,
} from './UsersAI'

function Users() {
  const [user, setUser] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const usersGetUsresData = useGetUsresQuery()
  const [addUser] = useAddUserMutation()
  const [remove] = useDeleteUserMutation()
  
  const addNewUser = () => {
    setIsOpen(!isOpen)
  }

  const createNewUser = async (item) => {
    setUser(item)
    if (user) {
      await addUser({ ...user }).unwrap()
      setIsOpen(false)
    }
  }
  const cancelUserCreate = () => {
    // console.log('cancelUserCreate')
     setIsOpen(false)
  }
  
  const deleteUser =async (id) => {
    // console.log('deleteUser', id)
    await remove(id).unwrap()
  }
  
  return (
        <div className="Users">
              <ul className="usersList">
                {usersGetUsresData.isFetching && <li>loading...</li>}  
                {!usersGetUsresData.isFetching && usersGetUsresData.data.map(item =>
                  <User key={item.id} user={item} deleteUser={deleteUser} />
                )}
              </ul>   
        <button className='button add' onClick={addNewUser} >Add new user</button>
      {isOpen ? <UserForm createNewUser={createNewUser} cancelUser={ cancelUserCreate} isOpen={isOpen} /> :null}
        
              
      </div>
  )
}

export default Users;