import React from 'react'
import Nav from '../Component/Moblie_seller/Nav'
import MainBody from '../Component/Moblie_seller/MainBody'
import SuccessStories from '../Component/Moblie_seller/SuccessStories'
Nav

function page() {
  return (
    <div>
        <Nav />
        <MainBody />
        <SuccessStories />
    </div>
  )
}

export default page