import React, { useState } from 'react'

const Search = () => {


    const cafes = [
        {
            "name": "Bazaar Cafe",
            "place_id": "kjk234g4gcvfx8usg1l33pi"
        }, {
            "name": "Ashley's Cafe",
            "place_id": "12hydbdf76sljfts87sbfis"
        }, {
            "name": "Avenue Cafe",
            "place_id": "skjd86svvfdrsv55svbvf3f"
        }, {
            "name": "Hi-Lo Cafe",
            "place_id": "mjdhgetr4pojfyts22fzfsh"
        }, {
            "name": "California Chicken Cafe",
            "place_id": "12hydbdf76sljfts87sbfis"
        }, {
            "name": "Avenue Bakery Cafe",
            "place_id": "jahgde7wgdiau8ewsahgosd"
        }, {
            "name": "Philz Coffee",
            "place_id": "urhw3837ehalod7w02b7835"
        }
    ]


    const places = [

        {
            "id": "jahgde7wgdiau8ewsahgosd",
            "street_no": "60H",
            "locality": "Solomos Island Road",
            "postal_code": "20688",
            "lat": "36.7783 N",
            "long": "119.4179 W"
        }, {
            "id": "12hydbdf76sljfts87sbfis",
            "street_no": "1B",
            "locality": "Macarthur Blvd",
            "postal_code": "20619",
            "lat": "38.1781 N",
            "long": "118.4171 W"
        }, {
            "id": "kjk234g4gcvfx8usg1l33pi",
            "street_no": "45250",
            "locality": "Worth Avenue, Unit A",
            "postal_code": "20619",
            "lat": "36.1152",
            "long": "117.521"
        }, {
            "id": "saswe3s6yydtdr52hsd72yst",
            "street_no": "1X",
            "locality": "Macarthur Blvd",
            "postal_code": "20687",
            "lat": "36.7783",
            "long": "119.4179"
        }, {
            "id": "skjd86svvfdrsv55svbvf3f",
            "street_no": "7S",
            "locality": "Three Notch Road",
            "postal_code": "20619",
            "lat": "36.83",
            "long": "119.6"
        }, {
            "id": "mjdhgetr4pojfyts22fzfsh",
            "street_no": "22803",
            "locality": "Gunston Dr Lexington Park",
            "postal_code": "20688",
            "lat": "35.7788",
            "long": "119.979"
        }, {
            "id": "urhw3837ehalod7w02b7835",

            "street_no": "225",
            "locality": "Macarthur Blvd",
            "postal_code": "20687",
            "lat": "35.77813",
            "long": "119.41791"
        }
    ]

    const [result, setresult] = useState([])
    const [searchValue, setsearchValue] = useState('')

    const findCaliforniaCafes = (string) => (e) => {

        e.preventDefault()

        const search = cafes?.filter((elem) => {
            return elem.name.toLowerCase().includes(string?.toLowerCase())
        })
        console.log(search, 'ss')




        const find = search.map(elem => ({ ...elem, ...places.find(val => val.id === elem.place_id) }))
        console.log(find, '333')
        setresult(find)

    }


    const onchange = (e) => {
        setsearchValue(e.target.value)
    }






    return (
        <div className='container  bg-slate-200 mx-auto'>
            <div className='flex flex-col h-screen justify-center items-center'>



                <form className='w-2/5' onSubmit={findCaliforniaCafes(searchValue)}>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={onchange} type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0  focus:outline-none" placeholder="Search Cafe..." required />
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-purple-400 hover:bg-purple-500 focus:border-0 focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                    </div>
                </form>
                <div className=' border-purple-600 mt-6 w-2/5 rounded-lg overflow-y-scroll h-1/2'>
                    {result?.map((elem=>{
                        return  <div className='bg-purple-100 mt-2 hover:bg-purple-200 cursor-pointer px-4 rounded-md py-2'>
                        <div className='flex'>
                            <h1 className='w-1/3'>Name:</h1>
                            <h1 className='w-1/2'>{elem.name}</h1>
                        </div>
                        <div className='flex'>
                            <h1 className='w-1/3'>Street_no:</h1>
                            <h1 className='w-1/2'>{elem.street_no}</h1>
                        </div>
                        <div className='flex'>
                            <h1 className='w-1/3'>Locality:</h1>
                            <h1 className='w-1/2'>{elem.locality}</h1>
                        </div>
                        <div className='flex'>
                            <h1 className='w-1/3'>Postal_code:</h1>
                            <h1 className='w-1/2'>{elem.postal_code}</h1>
                        </div>
                        <div className='flex'>
                            <h1 className='w-1/3'>Lat:</h1>
                            <h1 className='w-1/2'>{elem.lat}</h1>
                        </div>
                        <div className='flex'>
                            <h1 className='w-1/3'>Long:</h1>
                            <h1 className='w-1/2'>{elem.long}</h1>
                        </div>
                    </div>
                    }))}
                   
                </div>

            </div>


        </div>
    )
}

export default Search