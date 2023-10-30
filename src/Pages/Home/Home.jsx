import React from 'react'
import './Home.css'
import Topbar from '../Topbar/Topbar'
import MainPage from '../MainPage/MainPage'

function Home() {
  return (
    <div className='homeContainer'>
      <div className="wrapper">
        <Topbar/>
        <MainPage/>
      </div>
    </div>
  )
}

export default Home