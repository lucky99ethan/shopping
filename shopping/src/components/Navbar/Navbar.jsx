import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-blue-500 text-white shadow-lg'>
        <div className='container mx-auto p-4'>
         <div className="flex justify-between">
            <div className="">
                <h1 className="font-bold text-xl">Shopping</h1>
            </div>
            <div className="flex justify-between items-center">
                <ul className="flex space-x-12">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Products</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Navbar