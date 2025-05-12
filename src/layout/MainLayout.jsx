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
        const tg = window.Telegram?.WebApp;
        if (tg && tg.initDataUnsafe?.user) {
            tg.ready();
            alert("Ваш Telegram ID: " + tg.initDataUnsafe.user.id);
        } else {
            alert("❌ Откройте приложение через Telegram");
        }
    }, []);
    return (
        <div className='flex h-screen w-screen justify-center select-none bg-white'>
            <Outlet />
        </div>
    )
}

export default MainLayout