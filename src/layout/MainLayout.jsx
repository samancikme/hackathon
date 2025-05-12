import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DA_hi from '../components/animations/DA_hi'

const MainLayout = () => {
    useEffect(() => {
        if (localStorage.getItem('userId')) {
            const tg = window.Telegram.WebApp;
            const userId = tg.initDataUnsafe.user?.id;
            localStorage.setItem('userId', userId);
        }
    }, []);
    return (
        <div className='flex h-screen w-screen justify-center select-none bg-white'>
            <Outlet />
        </div>
    )
}

export default MainLayout