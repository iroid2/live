import React from 'react'


 

import {
  Card,
 
} from "@/components/ui/card"
import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'
// import {CarouselSize } from '../Coursel'


export default function Main() {
  
  return (
    <div className='md:w-10/12 z-30 w:full mx-auto  p-3 shadow-md overflow-y-scroll '>
      <div className="order-line ">
        <h1 className='font-bold py-2 text-2xl'>Order Line</h1>
        <div className="order-menus flex-wrap flex  gap-4">
          <p className='px-4 py-2  flex items-center rounded-full border-2 border-green-600'>All <span className='p-1 rounded-full text-[.4rem] bg-green-500 text-white'>28</span> </p>
          <p className='px-3 py-2 rounded-full border-2 flex items-center border-green-600'>Dine In <span className='p-1 rounded-full text-[.4rem] bg-green-500 text-white'>28</span> </p>
          <p className='px-3 py-2 flex items-center rounded-full border-2 border-green-600'>Wait List <span className='p-1 rounded-full text-[.4rem] bg-green-500 text-white'>28</span> </p>
          <p className='px-3 py-2 flex items-center rounded-full border-2 border-green-600'>Take Away <span className='p-1 rounded-full text-[.4rem] bg-green-500 text-white'>28</span> </p>
          <p className='px-3 py-2 flex items-center rounded-full border-2 border-green-600'>Saved
          <span className='p-1 rounded-full text-[.4rem] bg-green-500 text-white'>28</span> </p>
        </div>
        <div className="order-cards mt-4 items-center flex flex-col md:flex-row  gap-6 md:gap-3   md:grid-col-1 md:grid-cols-3">
         {/* <CarouselSize/> */}
         
          <div className="card md:w-1/3 w-full inline-flex flex-col  text-sm rounded-md px-4  gap-4 py-4 bg-[#E8D4ED]">
            <div className="top-card justify-between flex gap-3">
              <div className="flex flex-col gap-4">
              <p>Order #F0027</p>
              <p className='font-bold'>Items: Bx</p>
              </div>
              <p>Table 03</p>
            </div>
            
            <div className="bottom-card flex gap-6 text-xs justify-between items-center justify-between items-center">
            <p className="time">2 min ago</p>
            <button className='bg-[#642989] px-3 py-2 rounded-full'>Kitchen</button>
            </div>
          </div>
          <div className="card md:w-1/3 w-full inline-flex flex-col  text-sm rounded-md px-4  gap-4 py-4 bg-[#FFE2DE]">
            <div className="top-card justify-between flex gap-3">
              <div className="flex flex-col gap-4">
              <p>Order #F0027</p>
              <p className='font-bold'>Items: Bx</p>
              </div>
              <p>Table 03</p>
            </div>
            
            <div className="bottom-card flex gap-6 text-xs justify-between items-center">
            <p className="time">2 min ago</p>
            <button className='bg-[#EEC0A7] px-3 py-2 rounded-full'>Kitchen</button>
            </div>
          </div>
          <div className="card md:w-1/3 w-full inline-flex flex-col  text-sm rounded-md px-4  gap-4 py-4 bg-[#C1EAE4]">
            <div className="top-card justify-between flex gap-3">
              <div className="flex flex-col gap-4">
              <p>Order #F0027</p>
              <p className='font-bold'>Items: Bx</p>
              </div>
              <p>Table 03</p>
            </div>
            
            <div className="bottom-card flex gap-6 text-xs justify-between items-center">
            <p className="time">2 min ago</p>
            <button className='bg-green-800 px-3 py-2 rounded-full'>Kitchen</button>
            </div>
          </div>
        </div>
      </div>
      <div className="top-amount w-full ">
      <h1 className='font-bold py-2 text-2xl'>Ordered Items</h1>
      <div className="foodCategories py-6 border-dashed border-b-[4px] border-[#F7F8FA] gap-2 grid grid-cols-2 md:grid-cols-5">
        <div className="cat-card border-green-200   p-2 rounded-md border-[1px]  flex gap-4">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={60} height={30} className='p-2 bg-[#F7F8FA] rounded-md'/>
          <div className="cat-details">
            <h2>All Media</h2>
            <p className='text-xs'>Available </p>
          </div>
        </div>
       <div className="cat-card border-green-200   p-2 rounded-md border-[1px]  flex gap-4">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={60} height={30} className='p-2 bg-[#F7F8FA] rounded-md'/>
          <div className="cat-details">
            <h2>All Media</h2>
            <p className='text-xs'>Available </p>
          </div>
        </div>
       <div className="cat-card border-green-200   p-2 rounded-md border-[1px]  flex gap-4">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={60} height={30} className='p-2 bg-[#F7F8FA] rounded-md'/>
          <div className="cat-details">
            <h2>All Media</h2>
            <p className='text-xs'>Available </p>
          </div>
        </div>
       <div className="cat-card border-green-200   p-2 rounded-md border-[1px]  flex gap-4">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={60} height={30} className='p-2 bg-[#F7F8FA] rounded-md'/>
          <div className="cat-details">
            <h2>All Media</h2>
            <p className='text-xs'>Available </p>
          </div>
        </div>
       <div className="cat-card border-green-200   p-2 rounded-md border-[1px]  flex gap-4">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={60} height={30} className='p-2 bg-[#F7F8FA] rounded-md'/>
          <div className="cat-details">
            <h2>All Media</h2>
            <p className='text-xs'>Available </p>
          </div>
        </div>
      </div>
      <div className="foods-cards  w-full flex-wrap py-10 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
        <div className="food-card border-[.7px] border-gray-200 rounded-md overflow-hidden p-2">
          <div className="img-cont rounded-md bg-[#F7F8FA] w-full">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={100} height={30} className='p-2 bg-[#F7F8FA] rounded-md mx-auto'/>
          </div>
          <div className="food-details">
            <p className="text-xs">Lunch</p>
            <p className="text-md font-bold">Grilled Swimon Steak</p>
            <div className="price flex justify-between">
              <p className="card">$15.00</p>
              <div className="counter gap-2 flex">
                <Minus className='p-1 bg-gray-400 rounded-full'/>
                <p>2</p>
                <Plus className='p-1 bg-green-400 text-white rounded-full'/>

              </div>
            </div>
            
          </div>
        </div>
        <div className="food-card border-[.7px] border-gray-200 rounded-md overflow-hidden p-2">
          <div className="img-cont rounded-md bg-[#F7F8FA] w-full">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={100} height={30} className='p-2 bg-[#F7F8FA] rounded-md mx-auto'/>
          </div>
          <div className="food-details">
            <p className="text-xs">Lunch</p>
            <p className="text-md font-bold">Grilled Swimon Steak</p>
            <div className="price flex justify-between">
              <p className="card">$15.00</p>
              <div className="counter gap-2 flex">
                <Minus className='p-1 bg-gray-400 rounded-full'/>
                <p>2</p>
                <Plus className='p-1 bg-green-400 text-white rounded-full'/>

              </div>
            </div>
            
          </div>
        </div>
        <div className="food-card border-[.7px] border-gray-200 rounded-md overflow-hidden p-2">
          <div className="img-cont rounded-md bg-[#F7F8FA] w-full">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={100} height={30} className='p-2 bg-[#F7F8FA] rounded-md mx-auto'/>
          </div>
          <div className="food-details">
            <p className="text-xs">Lunch</p>
            <p className="text-md font-bold">Grilled Swimon Steak</p>
            <div className="price flex justify-between">
              <p className="card">$15.00</p>
              <div className="counter gap-2 flex">
                <Minus className='p-1 bg-gray-400 rounded-full'/>
                <p>2</p>
                <Plus className='p-1 bg-green-400 text-white rounded-full'/>

              </div>
            </div>
            
          </div>
        </div>
        <div className="food-card border-[.7px] border-gray-200 rounded-md overflow-hidden p-2">
          <div className="img-cont rounded-md bg-[#F7F8FA] w-full">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={100} height={30} className='p-2 bg-[#F7F8FA] rounded-md mx-auto'/>
          </div>
          <div className="food-details">
            <p className="text-xs">Lunch</p>
            <p className="text-md font-bold">Grilled Swimon Steak</p>
            <div className="price flex justify-between">
              <p className="card">$15.00</p>
              <div className="counter gap-2 flex">
                <Minus className='p-1 bg-gray-400 rounded-full'/>
                <p>2</p>
                <Plus className='p-1 bg-green-400 text-white rounded-full'/>

              </div>
            </div>
            
          </div>
        </div>
        <div className="food-card border-[.7px] border-gray-200 rounded-md overflow-hidden p-2">
          <div className="img-cont rounded-md bg-[#F7F8FA] w-full">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={100} height={30} className='p-2 bg-[#F7F8FA] rounded-md mx-auto'/>
          </div>
          <div className="food-details">
            <p className="text-xs">Lunch</p>
            <p className="text-md font-bold">Grilled Swimon Steak</p>
            <div className="price flex justify-between">
              <p className="card">$15.00</p>
              <div className="counter gap-2 flex">
                <Minus className='p-1 bg-gray-400 rounded-full'/>
                <p>2</p>
                <Plus className='p-1 bg-green-400 text-white rounded-full'/>

              </div>
            </div>
            
          </div>
        </div>
        <div className="food-card border-[.7px] border-gray-200 rounded-md overflow-hidden p-2">
          <div className="img-cont rounded-md bg-[#F7F8FA] w-full">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={100} height={30} className='p-2 bg-[#F7F8FA] rounded-md mx-auto'/>
          </div>
          <div className="food-details">
            <p className="text-xs">Lunch</p>
            <p className="text-md font-bold">Grilled Swimon Steak</p>
            <div className="price flex justify-between">
              <p className="card">$15.00</p>
              <div className="counter gap-2 flex">
                <Minus className='p-1 bg-gray-400 rounded-full'/>
                <p>2</p>
                <Plus className='p-1 bg-green-400 text-white rounded-full'/>

              </div>
            </div>
            
          </div>
        </div>
        <div className="food-card border-[.7px] border-gray-200 rounded-md overflow-hidden p-2">
          <div className="img-cont rounded-md bg-[#F7F8FA] w-full">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={100} height={30} className='p-2 bg-[#F7F8FA] rounded-md mx-auto'/>
          </div>
          <div className="food-details">
            <p className="text-xs">Lunch</p>
            <p className="text-md font-bold">Grilled Swimon Steak</p>
            <div className="price flex justify-between">
              <p className="card">$15.00</p>
              <div className="counter gap-2 flex">
                <Minus className='p-1 bg-gray-400 rounded-full'/>
                <p>2</p>
                <Plus className='p-1 bg-green-400 text-white rounded-full'/>

              </div>
            </div>
            
          </div>
        </div>
        <div className="food-card border-[.7px] border-gray-200 rounded-md overflow-hidden p-2">
          <div className="img-cont rounded-md bg-[#F7F8FA] w-full">
          <Image src={'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1711616121~exp=1711619721~hmac=e47db02aac23d429edee8eb7d43954901e697830abe7e5a3c82cfe7b75c92eca&w=740'} alt='' width={100} height={30} className='p-2 bg-[#F7F8FA] rounded-md mx-auto'/>
          </div>
          <div className="food-details">
            <p className="text-xs">Lunch</p>
            <p className="text-md font-bold">Grilled Swimon Steak</p>
            <div className="price flex justify-between">
              <p className="card">$15.00</p>
              <div className="counter gap-2 flex">
                <Minus className='p-1 bg-gray-400 rounded-full'/>
                <p>2</p>
                <Plus className='p-1 bg-green-400 text-white rounded-full'/>

              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
