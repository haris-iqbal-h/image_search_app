import React, { useContext, useState } from 'react'
import { ImageContext } from '../pages/Home'

const SearchField = () => {
    const [searchValue,setSearchValue]=useState('')
    const {fetchData,setSearchImage}=useContext(ImageContext)

    

    const handleInputChange=(e)=>{
        setSearchValue(e.target.value)
    }
    const handleButtonChange=()=>{
        setSearchValue("")
        fetchData(`https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_CODE}`)
    }
    const handleEnterSearch=(e)=>{
        if(e.key==='Enter'){
            fetchData(`https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_CODE}`)
            setSearchValue("")
            setSearchImage(searchValue)
        }
    }
    return (
        <>
            <div className='flex'>
                <input
                    className='bg-gray-50 
                        border-gray-300 
                        text-sm 
                        w-full 
                        indent-2
                        p-2.5
                        outline-none
                        focus:border-blue-500
                        focus:ring-2
                        rounded-bl
                        rounded-tl'
                    type="search"
                    value={searchValue}
                    onKeyDown={handleEnterSearch}
                    onChange={handleInputChange}
                    placeholder='Search Anything...'
                    />
                <button
                    onClick={handleButtonChange}
                    disabled={!searchValue}
                    className='
                    bg-blue-600
                        px-5 
                        py-2.5
                        text-white
                        rounded-br
                        rounded-tr
                        focus:ring-2 focus:ring-blue-300
                        disabled:bg-gray-300'
                >Search</button>
            </div>
        </>
    )
}

export default SearchField