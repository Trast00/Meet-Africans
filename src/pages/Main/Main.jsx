import React from 'react'
import DetailInfo from '../../components/main/DetailInfo/DetailInfo'
import ListChats from '../../components/main/ListChats/ListChats'
import ListFriends from '../../components/main/ListFriends/ListFriends'
import ListUsers from '../../components/main/ListUsers/ListUsers'
import NavMain from '../../components/main/NavMain/NavMain'
import Profile from '../../components/main/Profile/Profile'
import './main.css'

const Main = () => {
  return (
    <div className='flex-center main'>
      <main className="column wrapper">
        <NavMain />
        <div className='main-side'>
          {/* <Profile /> */}
          <ListFriends />
        </div>
        <div className='desktop-only main-mid'>
          <ListUsers />
          {/*<ListChats /> <DetailInfo />*/}
        </div>
      </main>
    </div>
  )
}

export default Main
