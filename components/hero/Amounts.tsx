import { BadgeDollarSign, CreditCard, Delete, Edit, PrinterIcon, ScanBarcode, Upload } from 'lucide-react'
import React from 'react'

export default function Amounts() {
  return (
    <div className='w-2/12 py-1 pb-3 h-screen flex flex-col justify-between right-4 z-300 px-2 bg-[#F7F8FA]'>
     <div className="top-amout">
     <div className="bg-white">
        <div className="table-header  border-dashed border-b-[4px] gap-4 flex py-3">
          <div className="table-deatils flex flex-col gap-3">
            <p className="font-bold text-xs">Table No #04</p>
            <p className="text-gray-300 text-xs">0rder #F0030</p>
          </div>
          <div className="tables-actions">
            <div className="action-icons  flex">
              <Edit className='text-[10px]'/>
              <Delete/>
            </div>
            <div className="action-numbers">
              <p>2 people</p>
            </div>
          </div>
        </div>
        <div className="order-items border-dashed border-b-[4px] mt-3 text-xs">
          <div className="ordered-header flex justify-between px-1">
         
          <p className="font-bold text-xs">Ordered Items</p>
          <p className="qty">5</p>
          </div>
          <div className="ordered-list flex flex-col gap-2 py-2 px-1">
          <div className="ordered-items details justify-between flex">
            <p className="times">2x</p>
            <p className="details">Pasta with Reaf</p>
            <p className="price">$300</p>
          </div>
          <div className="ordered-items details justify-between flex">
            <p className="times">2x</p>
            <p className="details">Pasta with Reaf</p>
            <p className="price">$300</p>
          </div>
          <div className="ordered-items details justify-between flex">
            <p className="times">2x</p>
            <p className="details">Pasta with Reaf</p>
            <p className="price">$300</p>
          </div>
          <div className="ordered-items details justify-between flex">
            <p className="times">2x</p>
            <p className="details">Pasta with Reaf</p>
            <p className="price">$300</p>
          </div>
          </div>
          <div className="payment-sumary mt-4">
          <p className="font-bold text-xs ">Payment Summary</p>
          <div className="payment-datails mt-2 px-1 flex flex-col  gap-2">
            <div className="transaction flex justify-between">
              <p  >Subtotal</p>
              <p className='font-bold text-black'>$400</p>
            </div>
            <div className="transaction flex justify-between">
              <p  >Subtotal</p>
              <p className='font-bold text-black'>$400</p>
            </div>
            <div className="tax flex justify-between">
              <p  >Subtotal</p>
              <p className='font-bold text-black'>$400</p>
            </div>
            <div className="total border-t-[.6px] border-gray-400 py-2 flex justify-between">
              <p className='font-bold ' >Total Payable</p>
              <p className='font-bold text-black'>$400</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="paymentMethod bg-white rounded-md mt-2 p-2">
      <p className="font-bold text-xs">Payment Method</p>
      <div className="grid grid-cols-3 gap-2 ">
        <p className='border-[.1px]  flex items-center text-xs border-[#808080a9] '><BadgeDollarSign className='text-[2px] '/> Cash</p>
        <p className='border-[.1px] flex items-center text-xs border-[#808080a9] gap-1'><CreditCard className=' '/> Card</p>
        <p className='border-[.1px] px-1 flex items-center text-xs border-[#808080a9] '>< ScanBarcode className='text-[2px] '/> Scam</p>
      </div>
      </div>
     </div>
     <div className="print gap-3 flex justify-between text-xs">
      <p className='flex  px-3 bg-white border-1 border-gray-100 items-center'><PrinterIcon className='text-xs p-1'/> Print</p>
      <p className='bg-[#1AA19D] px-3 flex items-center'><Upload className='text-xs p-1'/> Download</p>
     </div>
    </div>
  )
}
