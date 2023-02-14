import React from 'react'
import { listFriends } from '../../../_test_/testConstants'
import Friend from './Friend'
import './ListFriends.css'

const ListFriends = () => {
  
  return (
    <ul className='max-width column no-styling listfriends'>
      {listFriends.map(friend => {
        return <li key={friend.idChat}><Friend friend={friend} /></li>
      })}
    </ul>
  )
}

export default ListFriends
