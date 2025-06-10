import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Maincontainer from './Maincontainer'
import Head from './Head'

const Body = () => {
  return (
     <div>
      <Head/>
      
       <div className='grid grid-flow-col mt-16'>
      <Sidebar/>
      <Outlet/>
      </div>
 </div>
  )
}

export default Body
