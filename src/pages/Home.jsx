import React from 'react'
import Jumbutron from '../components/Jumbutron'
import SearchField from '../components/SearchField'
import Images from '../components/Images'
import useAxios from '../hooks/useAxios'


const Home = () => {

  const {data,error,isLoading,fetchData}=
    useAxios(`/search/photos?page=1&query=office&client_id=xhoxxbQyPpiWJYoXu7u418Vf2ol10sPATvhPJPYFQfw`)
  
    console.log(data);
  
    return (
    <>
      <Jumbutron>
        <SearchField/>
      </Jumbutron>
      <Images />
    </>
  )
}

export default Home