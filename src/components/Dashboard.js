import React, { useEffect, useState } from 'react'
import TotalEmpolyee from './Cards/TotalEmpolyee'
import Popup from './popups/Popup'
import EmployeesTable from './Table/EmployeesTable'



const list = [
    {
        name: 'John Doe',
        gender: 'male',
        department: 'Testing',
        available: true,
        designation: '',
        age: '',
        date: ''

    },
    {
        name: 'Peter Doe',
        gender: 'male',
        department: 'Deployment',
        available: false,
        designation: '',
        age: '',
        date: ''

    }
]

localStorage.setItem('list', JSON.stringify(list))

const Dashboard = () => {
    const [added, setadded] = useState(false)

    const [modal, setmodal] = useState(false)
    const [employeeList, setemployeeList] = useState(JSON.parse(localStorage.getItem('list')) || false)
    const [formData, setformData] = useState({
        available: false
    })

    const onChange = (e) => {
        setformData({ ...formData, [e.target.id]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(employeeList, 'list');
        
        setfilterlist(prev => [formData, ...prev])
        setmodal(false)
        setadded(true)

    }
    const [filterlist, setfilterlist] = useState(employeeList)


    useEffect(() => {


        if (employeeList) {
            localStorage.setItem('list', JSON.stringify(employeeList))

        }

    }, [employeeList,filterlist])




    const [searchValue, setsearchValue] = useState('')

    const onchange = (e) => {
        setsearchValue(e.target.value)

    }

    const searchFilter = () => {

        // console.log(value, 'search on');



        let results = list?.filter((x) => {

            return x.name.toLocaleLowerCase().includes(searchValue)
        })


        if (searchValue == '') {
            setfilterlist(employeeList)
        }
        else {
            setfilterlist(results)

        }

    }

    useEffect(() => {
        searchFilter(searchValue)
    }, [searchValue])
    useEffect(() => {
      setTimeout(() => {
        setadded(false)
      }, 3000);
    }, [added])
    




    return (
        <>
        {added && <Popup name={'Added Successfully'} textcolor={'text-green-600'} />}
            {modal &&
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-black/20 w-full h-full flex justify-center items-center'>


                    <form onSubmit={onSubmit} class="w-full max-w-lg bg-white p-8 rounded-lg relative">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setmodal(false)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-4 top-4 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>


                        <h1 className='text-gray-700 text-xl font-semibold mb-2'>Add Employee</h1>
                        <hr />
                        <div class="flex flex-wrap -mx-3 mt-4">
                            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                                    Name
                                </label>
                                <input required class="appearance-none block w-full focus:bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-white" id="name" type="text" placeholder="Name" onChange={onChange} />

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="gender">
                                    Gender
                                </label>
                                <select name='gender' class="block  w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="gender" onChange={onChange}>
                                    <option selected>Select</option>
                                    <option value={'male'}>Male</option>
                                    <option value={'female'}>Female</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 ">
                            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="age">
                                    Age
                                </label>
                                <input required class="appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="age" type="number" placeholder="Age" onChange={onChange} />

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="designation">
                                    Designation
                                </label>
                                <input required name='designation' class="block  w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="designation" placeholder='Designation' type='text' onChange={onChange} />


                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-4">

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="department">
                                    Department
                                </label>
                                <select name='department' class="block  w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="department" onChange={onChange}>
                                    <option selected>Select</option>
                                    <option>Frontend Development</option>
                                    <option>Backend Development</option>
                                    <option>Testing</option>
                                    <option>Deployment</option>
                                </select>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="date">
                                    Joining Date
                                </label>
                                <input required class="appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="date" type="date" placeholder="date" onChange={onChange} />

                            </div>
                        </div>

                        <hr />
                        <div className='mt-4 text-end'>

                            <button type='button' onClick={() => setmodal(false)} className='mr-1.5 text-[#dc3545] border border-[#dc3545] px-2 py-1 rounded hover:bg-[#dc3545] text-sm hover:text-white inline-flex items-center transition-colors'>



                                Cancel
                            </button>

                            <button type='submit' className=' border border-[#28a745] px-2 py-1 rounded hover:bg-[#23933d] hover:border-[#23933d] bg-[#28a745] text-white hover:text-white inline-flex items-center transition-colors text-sm'>


                                Save
                            </button>

                        </div>
                      

                    </form>
                </div>
            }



            <section className='grid grid-cols-12 md:h-screen h-auto '>
                <div className='md:col-span-1 col-span-12  bg-slate-800 px-4 py-8'>
                    <img src='https://res.cloudinary.com/www-logic-square-com/image/upload/v1551945805/ls-logo.png'></img>
                </div>
                <div className='md:col-span-11 col-span-12 bg-slate-100 px-6 py-8 md:h-auto h-screen '>
                    <div className='bg-slate-100 flex justify-between items-center'>
                        <h1 className='text-xl font-semibold w-1/3'>
                            Dashboard
                        </h1>

                        <form class="flex items-center w-1/2" >

                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input required onChange={onchange} type="text" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  " placeholder="Search" />
                            </div>
                            <button type="button" onClick={()=>searchFilter()} class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none ">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </form>

                    </div>
                    <div className=' flex flex-col sm:flex-row  items-center mt-5'>
                        <TotalEmpolyee list={filterlist} setlist={setfilterlist} onclick={() => setmodal(true)} />

                    </div>

                    <div className='mt-5'>

                        <EmployeesTable list={filterlist} setlist={setfilterlist} />
                    </div>
                </div>
            </section>




        </>
    )
}

export default Dashboard