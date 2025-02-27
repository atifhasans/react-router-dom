import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
}

export default Layout