import React, { useState, useEffect } from 'react'
import Popup from '../popups/Popup'

const EmployeesTable = ({ list, setlist }) => {


    const [stateforpopup, setstateforpopup] = useState(false)
    const [deletestate, setdeletestate] = useState(false)

    const [editModal, seteditModal] = useState(false)
    const [deleteModal, setdeleteModal] = useState(false)
    // const [employeeList, setemployeeList] = useState([...list])
    const [particularEmployee, setparticularEmployee] = useState({})
    const [indx, setindx] = useState('')


    const getEmployee = (index, type) => {


        setindx(index)



        if (type == 'delete') {
            setdeleteModal(true)
        } if (type == 'edit') {


            seteditModal(true)

            const search = list?.filter((v, i) => {
                return i == index
            })
            setparticularEmployee(...search)


        }
        if (type == 'checkbox') {

            let items = [...list];
            //   copy of the item 
            let item = { ...items[index] };
            //  Replace the property 
            item.available = (item.available == true ? false : true)
           
            items[index] = item;
           // Set the state to our new copy
            setlist(items);
        }
    }

    const deleteEmployee = () => {
        const search = list?.filter((v, i) => {
            return i !== indx
        })
        setlist(search)
        setdeleteModal(false)
        setstateforpopup(true)

    }

    const onChange = (e) => {
        setparticularEmployee({ ...particularEmployee, [e.target.id]: e.target.value })
        

    }

    const updateEmployeeList = (e) => {
        e.preventDefault()

        const newState = list?.map((obj, idx) => {

            // if id equals 2 replacing object

            if (idx === indx) {
                return { ...particularEmployee };
            }

            //  else return object as is

            return obj;
        });

        
        setlist(newState)
        setstateforpopup(true)
    };

    useEffect(() => {
        setTimeout(() => {
          setdeletestate(false)
          setstateforpopup(false)
        }, 3000);
      }, [stateforpopup,deletestate])


  

    return (


        <>
    
         {stateforpopup && <Popup name={'Successfully Saved'} textcolor={'text-green-600'} />}
         {deletestate && <Popup name={'Successfully Deleted'} textcolor={'text-red-600'} />}

            {editModal &&
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-black/20 w-full h-full flex justify-center items-center'>


                    <form onSubmit={updateEmployeeList} class="w-full max-w-lg bg-white p-8 rounded-lg relative">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => seteditModal(false)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-4 top-4 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>


                        <h1 className='text-gray-700 text-xl font-semibold mb-2'>Add Employee</h1>
                        <hr />
                        <div class="flex flex-wrap -mx-3 mt-4">
                            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                                    Name
                                </label>
                                <input required class="appearance-none block w-full focus:bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-white" id="name" type="text" placeholder="Name" onChange={onChange} defaultValue={particularEmployee?.name} />

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="gender">
                                    Gender
                                </label>
                                <select name='gender' class="block  w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="gender" onChange={onChange} defaultValue={particularEmployee?.gender}>
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
                                <input required class="appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="age" type="number" placeholder="Age" onChange={onChange} defaultValue={particularEmployee?.age} />

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="designation">
                                    Designation
                                </label>
                                <input required name='designation' class="block  w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="designation" placeholder='Designation' type='text' onChange={onChange} defaultValue={particularEmployee?.designation} />


                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-4">

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="department">
                                    Department
                                </label>
                                <select name='department' class="block  w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="department" onChange={onChange} defaultValue={particularEmployee?.department}>
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
                                <input required class="appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="date" type="date" placeholder="date" onChange={onChange} defaultValue={particularEmployee?.date} />

                            </div>
                        </div>

                        <hr />
                        <div className='mt-4 text-end'>

                            <button type='button' onClick={() => seteditModal(false)} className='mr-1.5 text-[#dc3545] border border-[#dc3545] px-2 py-1 rounded hover:bg-[#dc3545] text-sm hover:text-white inline-flex items-center transition-colors'>



                                Cancel
                            </button>

                            <button type='submit' className=' border border-[#28a745] px-2 py-1 rounded hover:bg-[#23933d] hover:border-[#23933d] bg-[#28a745] text-white hover:text-white inline-flex items-center transition-colors text-sm'>


                                Save
                            </button>

                        </div>


                    </form>
                </div>
            }
            {deleteModal &&
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-black/20 w-full h-full flex justify-center items-center'>


                    <div class="w-full max-w-lg bg-white p-8 rounded-lg relative">

                        <h1 className='text-gray-700 text-center mb-6 text-xl font-semibold'>Are you sure you want to delete?</h1>


                        <div className='text-center'>

                            <button type='button' onClick={() => setdeleteModal(false)} className=' border border-[#28a745] px-2 py-1 rounded hover:bg-[#23933d] hover:border-[#23933d] bg-[#28a745] text-white hover:text-white inline-flex items-center transition-colors text-sm'>


                                Cancel
                            </button>

                            <button type='button' onClick={() => deleteEmployee()} className='ml-1.5 text-[#dc3545] border border-[#dc3545] px-2 py-1 rounded hover:bg-[#dc3545] text-sm hover:text-white inline-flex items-center transition-colors'>



                                Delete
                            </button>



                        </div>


                    </div>
                </div>
            }


            <div className='bg-white border border-gray-200 rounded-lg shadow-md'>

                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Department
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Available
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    View Details
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {list?.map(({ name, department, available }, index) => {
                                return <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {name}
                                    </th>
                                    <td class="py-4 px-6">
                                        {department}
                                    </td>
                                    <td class="py-4 px-6 ">
                                        <input type={'checkbox'}onClick={()=>getEmployee(index,'checkbox')} checked={available ? true : false}></input>
                                    </td>
                                    <td class="py-4 px-6">
                                        <button onClick={() => getEmployee(index, 'edit')} className='text-[#17a2b8] border border-[#17a2b8] px-2 py-1 rounded hover:bg-[#3ccee4] hover:text-white inline-flex items-center transition-colors'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>

                                            Edit
                                        </button>
                                        <button onClick={() => getEmployee(index, 'delete')} className='ml-1.5 text-[#dc3545] border border-[#dc3545] px-2 py-1 rounded hover:bg-[#dc3545] hover:text-white inline-flex items-center mt-2 sm:mt-0 transition-colors'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>


                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            })}


                        </tbody>
                    </table>
                </div>

            </div>



        </>
    )
}

export default EmployeesTable