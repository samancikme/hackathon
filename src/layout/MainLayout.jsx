import React from 'react'
import { Outlet } from 'react-router-dom'
import DA_hi from '../components/animations/DA_hi'

const MainLayout = () => {

    return (
        <div className='flex h-screen w-screen justify-center select-none relative'>
            <Outlet />
            <div className=' absolute bottom-[5%] right-[8%] w-max h-max bg-red-400 rounded-full'> 
                <DA_hi/>
            </div>
        </div>
    )
}

export default MainLayout