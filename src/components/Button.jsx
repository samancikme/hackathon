import React from 'react'

const Button = ({ className, children ,type}) => {
    return (
        <button type={type} className={`${className} bg-[#FF7B00] text-xl font-medium font-inter text-white text-center rounded-lg px-[32px] py-[12px] transition duration-300 ease-in-out hover:bg-[#ff8800] active:scale-95`}>
            {children}
        </button>
    )
}

export default Button