import React from 'react'

const Popup = ({name,css}) => {
  return (
    <>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-black/20 w-full h-full flex justify-center items-center`}>
        <div className={`${css}`}>
            <h1 className='text-xl text-center py-2'>{name}</h1>
        </div>
        </div>
        </>
  )
}

export default Popup