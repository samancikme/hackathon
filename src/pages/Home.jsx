import React from 'react'
import logo from '../../public/image/Med.Ai.svg'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex flex-col px-[20px]'>
            <NavLink to={'/'}>
                <div className="flex justify-center items-center mt-[80px]">
                    <img className=' w-[150px] py-3 mx-auto' src={logo} alt="" />
                </div>
            </NavLink >
            <div className='flex flex-col justify-center gap-[24px] items-center mt-[80px]'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <div className="text-[#2B8292] font-medium text-[50px] text-center leading-[50px] gap-0 mt-[32px]">
                        <div className=''>Легко - <br /> но по делу</div>
                    </div>
                    <div className="text-[#2B8292] text-[20px] font-medium font-inter text-center">
                        Первичная оценка симптомов и анализов— в пару кликов.Чтобы ты знал,с чего начать.
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
        </div>
    )
}

export default Home