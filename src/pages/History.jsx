import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import logo from "../assets/image/MedAi.svg";
import DA_hi from "../components/animations/DA_hi";

const History = () => {
    const [history, setHistory] = useState([
        {
            id: 1,
            title: "Головная боль и насморк",
            date: "12.05.2025 в 16:20",
        },
        {
            id: 2,
            title: "Повышенная температура",
            date: "12.05.2025 в 18:00",
        },
    ]);

    const [modal, setModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleDelete = (id) => {
        const URL = "http://10.95.4.108:5000/user/consult";

        axios
            .delete(`${URL}/${id}`)
            .then((response) => {
                console.log("Удалено:", response.data);
                setHistory((prev) => prev.filter((item) => item.id !== id));
            })
            .catch((error) => {
                console.error("Ошибка при удалении:", error);
            });

        setModal(false);
    };

    return (
        <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-screen flex flex-col px-[20px] relative"
        >
            <NavLink to={"/home"}>
                <div className="flex justify-center items-center mt-[80px]">
                    <img className="w-[150px] py-3 mx-auto" src={logo} alt="logo" />
                </div>
            </NavLink>

            <div className="mt-10 p-4 font-inter">
                <h2 className="text-[30px] md:text-3xl font-bold text-center text-[#2B8292] leading-[38px] mb-6">
                    Ваша история
                    <br />
                    поиска
                </h2>

                <div className="space-y-3">
                    {history.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white shadow-2xs border border-gray-400 rounded-xl px-4 py-3"
                        >
                            <div className="flex items-center space-x-4 text-[#2B8292]">
                                <div className="text-xl font-bold w-6">{index + 1}</div>
                                <div>
                                    <p className="font-medium">{item.title}</p>
                                    <p className="text-sm">{item.date}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setSelectedId(item.id);
                                    setModal(true);
                                }}
                            >
                                <BiTrash className="hover:text-red-500 active:scale-95 text-[24px]" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-[5%] right-[8%] w-max h-max rounded-full">
                <DA_hi />
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modal && (
                    <motion.div
                        key="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center p-4 z-50"
                    >
                        <motion.div
                            key="modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg"
                        >
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Вы действительно хотите удалить выбранную историю?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Все данные, включая вопрос и ответ, будут безвозвратно удалены
                            </p>
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={() => setModal(false)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                                >
                                    Отмена
                                </button>
                                <button
                                    onClick={() => handleDelete(selectedId)}
                                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                                >
                                    Удалить
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default History;
