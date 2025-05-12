import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image from '../assets/image/MedAi.svg'
import Home from './Home';
import { useNavigate } from 'react-router-dom';
const Main_load = () => {

    async function saveLang(id) {
        try {
            await Telegram.WebApp.CloudStorage.setItem('ID', id);
            console.log('Til muvaffaqiyatli saqlandi:', id);
        } catch (error) {
            console.error('Saqlashda xatolik:', error);
        }
    }
    const URL = 'http://10.95.4.108:5000/user/consult'
    useEffect(() => {
        const tg = window.Telegram.WebApp;
        const userId = tg.initDataUnsafe.user?.id;
        saveLang(userId)
    }, []);

    const [showMain, setShowMain] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMain(true);
            navigate('/home')
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="w-screen h-screen overflow-hidden select-none">
            <motion.div
                key="med"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex justify-center items-center h-screen w-screen">
                <img src={image} className='w-[300px] h-[60px]' alt="" />
            </motion.div>
        </div>
    );
};

export default Main_load;
