"use client"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { Grid2X2, HelpCircle, ListOrdered, LogOutIcon, Settings, Store, TowerControl, Users } from 'lucide-react'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const sideLinks=[
    {
      title:"Dashoboard",
      icon:<Grid2X2
      
      />
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="  z-300 bg-red-400">
      <nav className="mx-auto flex max-w-7xl border-b-4 border-white w-full fixed top-0 shadow-md  border-blue-200/30 text-black items-center z-50 justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
       
            <h2 className=''>Tasty station</h2>
          </a>
        </div>
        <div className="flex lg:hidden text-black">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden  lg:flex lg:gap-x-12">
          <Popover className="relative ">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black">
              Product
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg text-black ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group  relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2  divide-x divide-gray-50/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm text-black font-semibold leading-6 ">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-black">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-black">
            Company
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm rounded-md px-4 py-3 text-white bg-blue-500 leading-6 font-bold ">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden z-50" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-gray-950 z-50 text text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center text-white justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" width={100} height={100}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="">
          <div className="upper-sidebar flex  flex-col gap-5">
          {
            sideLinks.map((link,i)=>{
              return(
                <h1 key={i} className='flex gap-3'><span>{link.icon}</span>{link.title}</h1>
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
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
