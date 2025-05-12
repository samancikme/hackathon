import React from "react";
import { NavLink } from "react-router-dom";

const Not_found = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-center p-4">
            <h1 className="text-[80px] font-bold text-[#2B8292]">404</h1>
            <h2 className="text-[24px] font-semibold text-gray-700 mt-2">
                Страница не найдена
            </h2>
            <p className="text-gray-500 mt-2">
                К сожалению, запрашиваемая вами страница не существует.
            </p>
            <NavLink
                to="/"
                className="mt-6 bg-[#2B8292] text-white px-6 py-2 rounded-lg hover:bg-[#256b77] transition duration-300">
                Вернуться на главную
            </NavLink>
        </div>
    );
};

export default Not_found;
