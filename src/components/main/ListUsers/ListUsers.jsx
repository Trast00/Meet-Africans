import React from 'react'
import { listUsersTest } from '../../../_test_/testConstants'
import './ListUsers.css'
import UserOverview from '../UserOverview/UserOverview'

const ListUsers = () => {
  
  return (
    <ul className='row no-styling list-users'>
      {listUsersTest.map(user => {
        return <li key={user.idChat}>
          <UserOverview user={user}/>
        </li>
      })}
    </ul>
  )
}

export default ListUsers