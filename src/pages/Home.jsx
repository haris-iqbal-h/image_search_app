import React, { createContext, useState } from 'react'
import Jumbutron from '../components/Jumbutron'
import SearchField from '../components/SearchField'
import Images from '../components/Images'
import useAxios from '../hooks/useAxios'


export const ImageContext=createContext();

const Home = () => {
  const [searchImage,setSearchImage]=useState('')
  

  const {data,error,isLoading,fetchData}=
    useAxios(`/search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_CODE}`)
  
    console.log(data);
    const value={
      data,
      isLoading,
      error,
      fetchData,
      searchImage,
      setSearchImage
    }
  
    return (
    <>
    <ImageContext.Provider value={value}>
        <Jumbutron>
          <SearchField/>
        </Jumbutron>
        <Images />
    </ImageContext.Provider>
    </>
  )
}

export default Home