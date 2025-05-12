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
        if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe?.user) {
            const tg = window.Telegram.WebApp;
            tg.ready();
            alert("Ваш Telegram ID: " + tg.initDataUnsafe.user.id);
        } else {
            alert("❗️Пожалуйста, откройте приложение через Telegram.");
        }
    }, []);
    return (
        <div className='flex h-screen w-screen justify-center select-none bg-white'>
            <Outlet />
        </div>
    )
}

export default MainLayout