import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const schema = yup.object().shape({
    gender: yup.string().required("Пол обязателен"),
    age: yup.number().typeError("Введите возраст").required("Возраст обязателен"),
    height: yup.number().typeError("Введите рост").required("Рост обязателен"),
    weight: yup.number().typeError("Введите вес").required("Вес обязателен"),
    life_style: yup.string().required("Опишите ваш образ жизни"),
});
const Form = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        navigate("/test");
        console.log(data);
        // const postData = async (data) => {
        //     try {
        //         const response = await axios.post(
        //             'http://10.95.4.108:5000/user',
        //             { ...data , user_id: '12375876879'},
        //             {
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                 }
        //             }
        //         );
        //         console.log('Response:', response.data);
        //     } catch (error) {
        //         console.error('Error:', error.response?.data || error.message);
        //     }
        // };
        // postData(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center flex-col w-full mx-auto space-y-4 p-4 text-sm text-[#228ca6] h-max bg-white">
            <div>
                <select
                    {...register("gender")}
                    className="w-full border rounded px-3 py-2 focus:outline-none">
                    <option value="">Пол</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
                {errors.gender && (<p className="text-red-500 mt-1">{errors.gender.message}</p>)}
            </div>

            <div>
                <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Возраст"
                    {...register("age")}
                    className="w-full border rounded px-3 py-2 focus:outline-none" />
                {errors.age && (<p className="text-red-500 mt-1">{errors.age.message}</p>)}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Рост (см)"
                    inputMode="numeric"
                    {...register("height")}
                    className="w-full border rounded px-3 py-2 focus:outline-none" />
                {errors.height && (<p className="text-red-500 mt-1">{errors.height.message}</p>)}
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Вес (кг)"
                    inputMode="numeric"
                    {...register("weight")}
                    className="w-full border rounded px-3 py-2 focus:outline-none" />
                {errors.weight && (<p className="text-red-500 mt-1">{errors.weight.message}</p>)}
            </div>

            <div>
                <textarea
                    placeholder="Образ жизни 
например:Активный образ жизни, умеренные физические нагрузки 3–4 раза в неделю, работа за компьютером, питание сбалансированное, но с периодическим перекусами. Сон 6–7 часов, стресс — умеренный, алкоголь — по праздникам, курения нет."{...register("life_style")}
                    className="w-full border rounded px-3 py-2 focus:outline-none h-32"
                />
                {errors.life_style && (<p className="text-red-500 mt-1">{errors.life_style.message}</p>)}
            </div>
            <Button type={'submit'}>
                Отправить
            </Button>
        </form>
    );
}

export default Form
