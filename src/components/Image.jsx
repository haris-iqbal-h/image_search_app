import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({data}) => {
    return (
        <>
            <Link to={data.urls.regular} target="_blank" rel='noreferrer'>
                <img className='h-72 w-full object-cover rounded shadow-md' src={data.urls.small} alt={data.alt_description} />
            </Link>
        </>
    )
}

export default Image