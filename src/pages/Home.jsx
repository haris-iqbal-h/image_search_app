import React from 'react'
import JumbButton from '../components/JumbButton'
import SearchField from '../components/SearchField'
import Images from '../components/Images'

const Home = () => {
  return (
    <>
      <JumbButton>
        <SearchField/>
      </JumbButton>
      <Images/>
    </>
  )
}

export default Home