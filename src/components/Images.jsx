import React, { useContext } from 'react'
import { ImageContext } from '../pages/Home'
import Image from './Image'
import Skeleton from './Skeleton'

const Images = () => {

    const {data ,isLoading,searchImage}=useContext(ImageContext)


    return (
        <>
            <h1
            className='text-center underline 
                text-2xl mt-6'>Results for {searchImage || 'Cats'}</h1>
                <div className='
                grid md:grid-cols-2 
                lg:grids-cols-3
                xl:grid-cols-4
                gap-4 my-10 max-w-7xl mx-auto px-4'>
                    {isLoading ?<Skeleton item={10} /> : data.map((data,key)=> <Image key={key} data={data} />)}
                </div>
        </>
    )
}

export default Images