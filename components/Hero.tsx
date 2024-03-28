import React from 'react'
import SideBar from './hero/Sidebar'
import Main from './hero/Main'
import Amounts from './hero/Amounts'

export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row  mt-[100px] z-100 justoify-center relative gap-2'>
        <SideBar/>
        <Main/>
        <Amounts/>
    </div>
  )
}
