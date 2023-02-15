import React from 'react'
import ListChats from '../../components/main/ListChats/ListChats'
import ListFriends from '../../components/main/ListFriends/ListFriends'
import ListUsers from '../../components/main/ListUsers/ListUsers'
import NavMain from '../../components/main/NavMain/NavMain'
import Profile from '../../components/main/Profile/Profile'
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className='flex-center main'>
      <main className="column wrapper">
        <NavMain />
        <div className='main-side'>
          <Profile />
          {/*<ListFriends />*/}
        </div>
        <div className='desktop-only main-mid'>
          {/* <ListUsers /> */}
          <ListChats />
        </div>
      </main>
    </div>
  )
}

export default Dashboard
