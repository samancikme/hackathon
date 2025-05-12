import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

import Loading from "../components/Loading";
import Button from "../components/Button";
import logo from "../assets/image/MedAi.svg";

const schema = yup.object().shape({
    gender: yup.string().required("Пол обязателен"),
    age: yup
        .number()
        .typeError("Введите возраст")
        .required("Возраст обязателен"),
    height: yup
        .number()
        .typeError("Введите рост")
        .required("Рост обязателен"),
    weight: yup
        .number()
        .typeError("Введите вес")
        .required("Вес обязателен"),
    life_style: yup.string().required("Опишите ваш образ жизни"),
});

const UserData = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    async function getLang() {
        try {
            const userId = await Telegram.WebApp.CloudStorage.getItem('ID');
            return userId;
        } catch (error) {
            alert('O‘qishda xatolik:', error);
            return null;
        }
    }
    const onSubmit = async (data) => {
        const id = await getLang();
        console.log(getLang());
        const URL = "http://10.95.4.108:5000/user/consult";
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                URL,
                {
                    ...data,
                    user_id: userId || "321312",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            navigate("/consultation"); // Sahifani o'zgartirish
        } catch (err) {
            setError(
                err.response?.data?.message ||
                err.message ||
                "Noma'lum xato yuz berdi"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="flex flex-col">
                    <NavLink to="/home">
                        <div className="flex justify-center items-center mt-[80px]">
                            <img
                                className="w-[150px] py-3 mx-auto"
                                src={logo}
                                alt="Logo"
                            />
                        </div>
                    </NavLink>

                    <div className="flex flex-col justify-center gap-[24px] items-center">
                        <h1 className="text-[#2B8292] font-inter font-bold text-[28px] mt-[32px] text-center leading-[30px]">
                            Введите данные запрошенные ниже
                        </h1>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex justify-center flex-col w-full max-w-md mx-auto space-y-4 p-4 text-sm text-[#228ca6] h-max bg-white"
                    >
                        <div>
                            <select
                                {...register("gender")}
                                className="w-full border rounded px-3 py-2 focus:outline-none"
                            >
                                <option value="">Пол</option>
                                <option value="male">Мужской</option>
                                <option value="female">Женский</option>
                            </select>
                            {errors.gender && (
                                <p className="text-red-500 mt-1">
                                    {errors.gender.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="Возраст"
                                {...register("age")}
                                className="w-full border rounded px-3 py-2 focus:outline-none"
                            />
                            {errors.age && (
                                <p className="text-red-500 mt-1">
                                    {errors.age.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="Рост (см)"
                                {...register("height")}
                                className="w-full border rounded px-3 py-2 focus:outline-none"
                            />
                            {errors.height && (
                                <p className="text-red-500 mt-1">
                                    {errors.height.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="Вес (кг)"
                                {...register("weight")}
                                className="w-full border rounded px-3 py-2 focus:outline-none"
                            />
                            {errors.weight && (
                                <p className="text-red-500 mt-1">
                                    {errors.weight.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <textarea
                                placeholder="Образ жизни (например: активный образ жизни, умеренные физические нагрузки, работа за компьютером...)"
                                {...register("life_style")}
                                className="w-full border rounded px-3 py-2 focus:outline-none h-32"
                            />
                            {errors.life_style && (
                                <p className="text-red-500 mt-1">
                                    {errors.life_style.message}
                                </p>
                            )}
                        </div>

                        {error && (
                            <p className="text-red-600 text-sm text-center">
                                {error}
                            </p>
                        )}

                        <Button type="submit">Отправить</Button>
                    </form>
                </div>
            )}
        </>
    );
};

export default UserData;
