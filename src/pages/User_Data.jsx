import React from 'react'
import logo from '../assets/image/MedAi.svg'
import Form from '../components/Form'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';


const User_Data = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}>
            <div className='flex flex-col'>
                <NavLink to={'/'}>
                    <div className="flex justify-center items-center mt-[80px]">
                        <img className=' w-[150px] py-3 mx-auto' src={logo} alt="" />
                    </div>
                </NavLink>
                <div className='flex flex-col justify-center gap-[24px] items-center'>
                    <h1 className="text-[#2B8292] font-inter font-bold text-[28px] mt-[32px] text-center leading-[30px]">
                        Введите данные запрошенные ниже
                    </h1>
                </div>
                <Form />
            </div>
        </motion.div>
    )
}

export default User_Data