import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DA_hi from '../components/animations/DA_hi'

const MainLayout = () => {
    // const request = async () => {
    //     const response = await fetch("http://10.95.4.108:5000/user/123456", {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     const data = await response.json();
    //     console.log(data);
    // };
    // useEffect(() => {
    //     request()
    // },[])
    // 
    useEffect(() => {
        const tg = window.Telegram.WebApp;
        const userId = tg.initDataUnsafe.user?.id;
        alert('Telegram User ID:', userId);
        // const user = window.Telegram;
        // if (user) {
        //     alert("User ID:", user.id);
        // }
    }, []);
    return (
        <div className='flex h-screen w-screen justify-center select-none bg-white'>
            <Outlet />
        </div>
    )
}

export default MainLayout