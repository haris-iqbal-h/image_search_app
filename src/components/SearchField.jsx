import React from 'react'

const SearchField = () => {
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
                    placeholder='Search Anything...'
                    />
                <button
                    disabled
                    className='bg-blue-600
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