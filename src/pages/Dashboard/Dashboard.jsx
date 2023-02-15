import React from 'react'
import { useLocation } from 'react-router-dom'
import ListChats from '../../components/main/ListChats/ListChats'
import ListFriends from '../../components/main/ListFriends/ListFriends'
import ListUsers from '../../components/main/ListUsers/ListUsers'
import NavMain from '../../components/main/NavMain/NavMain'
import Profile from '../../components/main/Profile/Profile'
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
          {(currentLocation==="/dashboard/profile") && <Profile />}

          {(currentLocation==="/dashboard/discover" 
            || currentLocation==="/dashboard/events" 
            || currentLocation==="/dashboard/chats") 
          && <ListFriends />}
          
          {/* For mobile version there is no main-mid */}
          {(currentLocation==="/dashboard/discover") && (
            <div className='mobile-only'>
              <ListUsers />
            </div>
          )}
        </div>
        <div className='desktop-only main-mid'>
          {(currentLocation==="/dashboard/discover")?  <ListUsers />
          : (currentLocation==="/dashboard/chats")? <ListChats /> 
          : defaultMidContent}

        </div>
      </main>
    </div>
  )
}

export default Dashboard
