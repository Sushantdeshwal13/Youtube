import React from 'react'
import Buttonlist from './Buttonlist'
import Videocontainer from './Videocontainer'

const Maincontainer = () => {
  return (
    <div className='col-span-11 overflow-hidden'>
      <Buttonlist/>
      <Videocontainer/>
    </div>
  )
}

export default Maincontainer
