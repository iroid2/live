import { Grid2X2, HelpCircle, Layout, ListOrdered, LogOut, LogOutIcon, Settings, Store, Table, TowerControl, Users } from 'lucide-react'
import React from 'react'


export default function SideBar() {
  const sideLinks=[
    {
      title:"Dashoboard",
      icon:<Grid2X2/>
    },
    {
      title:"Order Line",
      icon:<ListOrdered/>
    },
    {
      title:"Manage Tools",
      icon:<TowerControl/> 
    },
    {
      title:"Manage Orders",
      icon:<Store/>
    },
    {
      title:"Customers",
      icon:<Users/>
    }
  ]
  return (
    <div className="flex z-100  bg-white h-screen flex-col justify-between w-2/12">
        <div className="upper-sidebar flex  flex-col gap-5">
          {
            sideLinks.map((link,i)=>{
              return(
                <h1 className='flex gap-3'><span>{link.icon}</span>{link.title}</h1>
              )
            })
          }
          
             
        </div>
        <div className="lower-sidebar flex flex-col gap-2">
        <h1 className='flex gap-3'><span><Settings/></span>Settings</h1>
            <h1 className='flex gap-3'><span><HelpCircle/></span>Help Center</h1>
            <h1 className='flex gap-3'><span><LogOutIcon/></span>logout</h1>
        </div>
    </div>
  )}