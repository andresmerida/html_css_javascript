import React from 'react'

const App = () => {
  return (
    <div className='bg-deepblue container'>
      <h1 className='text-5xl font-bold text-white'>
        This is TailwindCSS v4
      </h1>
      <button className='bg-amber text-alabaster text-2xl font-bold mt-12 rounded px-6 py-4'>
        Click here!
      </button>
      <input type='text' placeholder='Enter your name' 
        className='bg-white text-lg text-amber bottom-2 p-4 rounded ml-4 outline-0'/>
    </div>
  )
}

export default App
