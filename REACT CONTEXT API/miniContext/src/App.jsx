import React from 'react'
import UserContext from './Context/UserContext'
import Login from './MyComponents/Login'
import Profile from './MyComponents/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
      
      
      </UserContextProvider>
    
  )
}

export default App