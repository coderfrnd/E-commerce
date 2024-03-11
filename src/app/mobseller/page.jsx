import React from 'react'
import Nav from '../Component/Moblie_seller/Nav'
import MainBody from '../Component/Moblie_seller/MainBody'
import SuccessStories from '../Component/Moblie_seller/SuccessStories'
import CreateAccount from '../Component/Moblie_seller/CreateAccount'
import Footer from '../Component/Moblie_seller/Footer'
Nav

function page() {
  return (
    <div>
        <Nav />
        <MainBody />
        <SuccessStories />
        <hr />
        <CreateAccount />
        <Footer />
    </div>
  )
}

export default page