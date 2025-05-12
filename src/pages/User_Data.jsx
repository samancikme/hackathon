import React from 'react'
import logo from '../../public/image/Med.Ai.svg'
import Button from '../components/Button'
import Form from '../components/Form'
import { NavLink } from 'react-router-dom'

const User_Data = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <NavLink to={'/'}>
                    <div className="flex justify-center items-center mt-[80px]">
                        <img className=' w-[150px] py-3 mx-auto' src={logo} alt="" />
                    </div>
                </NavLink>
                <div className='flex flex-col justify-center gap-[24px] items-center'>
                    <h1 className="text-[#2B8292] font-inter font-bold text-[28px] mt-[32px] text-center">
                        Введите данные запрошенные ниже
                    </h1>
                </div>
                <Form />
            </div>
        </div>
    )
}

export default User_Data