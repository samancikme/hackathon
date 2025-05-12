import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DA_hi from '../components/animations/DA_hi'

const MainLayout = () => {
    // useEffect(() => {
    //     const tg = window.Telegram.WebApp;
    //     const userId = tg.initDataUnsafe.user?.id;
    //     alert("Sizning ID: " + userId);
    // }, []);
    return (
        <div className='flex h-screen w-screen justify-center select-none bg-white'>
            <Outlet />
        </div>
    )
}

export default MainLayout