import React from 'react'
import logo from '/image/Med.Ai.svg'
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom'
import DA_load from './animations/DA_load'

const Loading = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex flex-col px-[15px] relative h-screen w-screen bg-white'>
                <div className='flex-1'>
                    <NavLink to={'/'}>
                        <div className="flex justify-center items-center mt-[80px]">
                            <img className=' w-[150px] py-3 mx-auto' src={logo} alt="" />
                        </div>
                    </NavLink >
                    <div className="text-[#2B8292] font-semibold text-[32px] text-center leading-[34px] gap-0 mt-[32px]">
                        Секунду... <br />Мы анализируем ваши данные!
                    </div>
                </div>
                <div className=" flex-2 flex justify-center items-center">
                    <DA_load className={'w-70 h-70'} />
                </div>
            </div>
        </motion.div>
    )
}
export default Loading