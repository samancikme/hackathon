import { BiTrash } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import logo from '../assets/image/MedAi.svg'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import DA_hi from '../components/animations/DA_hi'

const History = () => {
    const [history, setHistory] = useState([]);

    const data = [
        {
            "id": 1,
            "title": "Головная боль и насморк",
            "date": "12.05.2025 в 16:20"
        },
        {
            "id": 2,
            "title": "Головная боль и насморк",
            "date": "12.05.2025 в 16:20"
        }
    ]

    return (
        <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='w-screen flex flex-col px-[20px] relative'>
            <NavLink to={'/home'}>
                <div className="flex justify-center items-center mt-[80px]">
                    <img className=' w-[150px] py-3 mx-auto' src={logo} alt="" />
                </div>
            </NavLink >
            <div className="mt-10 p-4 font-inter">
                <h2 className="text-[30px] md:text-3xl font-bold text-center text-[#2B8292] leading-[38px] mb-6">
                    Ваша история<br />поиска
                </h2>
                <div className="space-y-3">
                    {data.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white shadow-2xs border border-gray-400 rounded-xl px-4 py-3 ">
                            <div className="flex items-center space-x-4 text-[#2B8292]">
                                <div className="text-xl font-bold w-6">
                                    {index + 1}
                                </div>
                                <div>
                                    <p className=" font-medium">{item.title}</p>
                                    <p className=" text-sm">{item.date}</p>
                                </div>
                            </div>
                            <button onClick={() => handleDelete(item.id)}>
                                <BiTrash />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className=' absolute bottom-[5%] right-[8%] w-max h-max rounded-full'>
                <DA_hi />
            </div>
        </motion.div>
    )
}

export default History