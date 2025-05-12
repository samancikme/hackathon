import React from 'react'
import logo from '../assets/image/MedAi.svg'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import DA_hi from '../components/animations/DA_hi'

const Home = () => {
    return (
        <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='flex flex-col px-[20px] relative'>
            <NavLink to={'/home'}>
                <div className="flex justify-center items-center mt-[80px]">
                    <img className=' w-[150px] py-3 mx-auto' src={logo} alt="" />
                </div>
            </NavLink >
            <div className='flex flex-col justify-center gap-[24px] items-center mt-[80px]'>
                <div className='flex flex-col justify-center items-center gap-[18px]'>
                    <div className="text-[#2B8292] font-medium text-[50px] text-center leading-[44px] gap-0 mt-[32px]">
                        <div className=''>Легко - <br /> но по делу</div>
                    </div>
                    <div className="text-[#2B8292] text-[20px] font-medium font-inter leading-[24px] text-center">
                        Первичная оценка симптомов и анализов — в пару кликов.Чтобы ты знал,с чего начать.
                    </div>
                </div>
                <div className="flex justify-center items-end font-inter">
                    <NavLink to={'/user_data'}>
                        <Button className={'text-2xl'}>
                            Провериться
                        </Button>
                    </NavLink>
                </div>
            </div>
            <div className=' absolute bottom-[5%] right-[8%] w-max h-max rounded-full'>
                <DA_hi />
            </div>
        </motion.div>
    )
}

export default Home