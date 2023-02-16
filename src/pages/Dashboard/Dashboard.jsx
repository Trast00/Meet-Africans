import React from 'react'
import { useLocation } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import ListChats from '../../components/main/ListChats/ListChats'
import ListFriends from '../../components/main/ListFriends/ListFriends'
import ListUsers from '../../components/main/ListUsers/ListUsers'
import NavMain from '../../components/main/NavMain/NavMain'
import Profile from '../../components/main/Profile/Profile'
import Setting from '../../components/main/Setting/Setting';
import './dashboard.css'

let defaultMidContent = (<ListUsers />) 
const Dashboard = () => {
  const currentLocation = useLocation().pathname
  if (currentLocation.includes("/dashboard/chats")) {
    defaultMidContent = (<ListChats />)
  }
  if (currentLocation.includes("/dashboard/discover")){
    defaultMidContent = (<ListUsers />)
  }
  
  return (
    <div className='flex-center main'>
      <main className="column wrapper">
        <NavMain />
        <div className='column main-side'>
          <Routes>
            <Route exact path='profile' element={<Profile />}/>
            <Route exact path='setting' element={<Setting />}/>
            <Route exact path='chats' element={<ListFriends />}/>
            <Route path='*' element={
              <div className='max-content column'>
                <ListFriends />
                <div className='mobile-only'>
                  <ListUsers />
                </div>
              </div>
            }/>
          </Routes>

        </div>
        <div className='desktop-only main-mid'>
          <Routes>
            <Route exact path='discover' element={<ListUsers />} />
            <Route exact path='chats' element={<ListChats />} />
            <Route path='*' element={defaultMidContent} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
