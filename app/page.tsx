import React from 'react'

export default function page() {
  return (


<div className="bg-gray-500 flex items-center justify-center min-h-screen">
  <div className="bg-black rounded-lg shadow-lg p-6 w-80">
  
    <div id="display" className="text-white text-right text-5xl font-mono p-4 rounded-md my-4">0</div>

    
    <div className="grid grid-cols-4 gap-3">
     
      <button className="bg-gray-300 hover:bg-gray-200 text-white text-2xl py-3 rounded-full" >C</button>
      <button className="bg-gray-300 hover:bg-gray-200 text-white text-2xl py-3 rounded-full">%</button>
      <button className="bg-gray-300 hover:bg-gray-200 text-white text-2xl py-3 rounded-full">&larr;</button>
      <button className="bg-orange-500 hover:bg-orange-400 text-white text-2xl py-3 rounded-full">&divide;</button>

      
      <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl py-3 rounded-full">7</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl py-3 rounded-full">8</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl py-3 rounded-full">9</button>
      <button className="bg-orange-500 hover:bg-orange-400 text-white text-2xl py-3 rounded-full">&times;</button>

      <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl py-3 rounded-full">4</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl py-3 rounded-full">5</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl py-3 rounded-full">6</button>
      <button className="bg-orange-500 hover:bg-orange-400 text-white text-2xl py-3 rounded-full">&minus;</button>

      
      <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl py-3 rounded-full">1</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl py-3 rounded-full">2</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl py-3 rounded-full">3</button>
      <button className="bg-orange-500 hover:bg-orange-400 text-white text-2xl py-3 rounded-full">+</button>

      <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl py-3 rounded-full col-span-2">0</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl py-3 rounded-full">.</button>
      <button className="bg-green-600 hover:bg-green-500 text-white text-2xl py-3 rounded-full">=</button>
    </div>
  </div>

 

  </div>
  )
}
