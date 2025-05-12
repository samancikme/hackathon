import React from 'react'
import logo from '../assets/image/MedAi.svg'
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const Consultation = () => {
    const htmlContent = 'consultation';
    return (
        <div className='flex flex-col px-[20px] w-screen h-max pb-[40px]'>
            <NavLink to={'/home'}>
                <div className="flex justify-center items-center mt-[80px]">
                    <img className=' w-[150px] py-3 mx-auto' src={logo} alt="" />
                </div>
            </NavLink>
            <div className='text-[18px] font-inter text-[#2B8292] leading-[24px] text-center mt-[32px]'>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
            <NavLink to={'/history'} className={'w-full flex justify-center items-center font-inter'}>
                <Button className={'text-2xl mt-[32px] w-full'}>
                    Назад
                </Button>
            </NavLink>
        </div>
    )
}

export default Consultation