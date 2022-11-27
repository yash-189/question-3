import React, { useEffect, useState } from 'react'

const TotalEmpolyee = ({list,onclick,setlist}) => {




    const [availableEmolyee, setavailableEmolyee] = useState(null)
    useEffect(() => {
        const filter = list?.filter((item)=>{
            return item.available == true
        })
        console.log(filter,'jjjkkkk');
        setavailableEmolyee(filter?.length)

    }, [list])
    const [totalemployee, settotalemployee] = useState(list?.length)
    useEffect(() => {
     settotalemployee(list?.length)
    }, [list])
    
    
    return (
        <>

            <div class="flex  justify-between max-w-sm w-[22rem] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className='w-2/3' >


                    <h5 class="mb-2 text-lg font-semibold  text-gray-500 dark:text-white">Total Employees</h5>
                    <p class="font-bold text-gray-900 text-3xl">{list?.length}</p>
                </div>
                <div className='w-1/3 m-2'>


                    <div style={{ background: `conic-gradient(#3ccee4 ${availableEmolyee * 30 }deg, gray 36deg ${totalemployee - availableEmolyee}deg)` }} className=' w-20 h-20 rounded-full relative '>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-[86%] w-[86%]'>
                            <span className='absolute font-medium top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-[#3ccee4]'>{availableEmolyee} </span>
                            <span className=' text-xs absolute font-medium top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[#3ccee4]'>available</span></div>
                    </div>
                </div>
            </div>


            <div onClick={onclick} class="ml-6 mt-4 sm:mt-0 cursor-pointer flex items-center flex-col justify-center max-w-xs w-[10rem] text-center h-28 hover:scale-105 transition-transform p-6 bg-blue-600  rounded-lg shadow-md hover:bg-blue-700 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
<h1 className='text-md font-semibold mt-2  text-white'>Add Employee</h1>

            </div>
        </>
    )
}

export default TotalEmpolyee