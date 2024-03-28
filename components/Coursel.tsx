// "use client"
// import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export function CarouselSize() {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full max-w-sm"
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-3xl font-semibold">
//                   <div className="card inline-flex flex-col  text-sm rounded-md px-4  gap-4 py-4 bg-[#E8D4ED]">
//             <div className="top-card flex gap-3">
//               <div className="flex flex-col gap-4">
//               <p>Order #F0027</p>
//               <p className='font-bold'>Items: Bx</p>
//               </div>
//               <p>Table 03</p>
//             </div>
            
//             <div className="bottom-card flex gap-6 text-xs">
//             <p className="time">2 min ago</p>
//             <button className='bg-[#642989] px-3 py-2 rounded-full'>Kitchen</button>
//             </div>
//           </div>
//                   </span>
//                 </CardContent>
//               </Card>
              
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }
