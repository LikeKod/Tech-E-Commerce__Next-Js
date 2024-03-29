import React from 'react'
import { useState } from 'react'
import { LuUser } from "react-icons/lu";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import {loginUser, registerUser} from '../../../../../redux/slices/userSlice';

export default function AuthPopup() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [isAuthSwitched, setIsAuthSwitched ] = useState(false);
    const [isSignInActive, setIsSignInActive ] = useState(false);
    const [isSignUpActive, setIsSignUpActive ] = useState(false);

    const toggleAuth = () => {
        setIsAuthSwitched(!isAuthSwitched)
        setIsSignInActive(!isSignInActive)
        setIsSignUpActive(!isSignUpActive)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSignUp = (formData) => {
        dispatch(registerUser(formData))
        .then(data => {
            alert(JSON.stringify(data));
        })
        .catch(error => {
            alert(error);
        });
    }

    const handleSignIn = (formData) => {
        dispatch(loginUser(formData))
            .then(data => {
                alert(JSON.stringify(data));
            })
            .catch(error => {
                alert(error);
            });
    }

    return (
        <div className=''>
            <button
                className="block "
                type="button"
                onClick={handleShow}
            >
                <LuUser size={30} />
            </button>

            {!show ? <></>
                :
                <div
                    className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full ms-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    { !isSignInActive ? 'Авторизация' : 'Регистрация' }
                                </h3>
                                <button
                                    type="button"
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={handleClose}
                                >
                                    <CloseIcon />
                                </button>
                            </div>

                            <div className="p-4 md:p-5">
                                <form className="space-y-4" action={isSignInActive ? handleSignUp : handleSignIn} >
                                    <div>
                                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            placeholder="john_doe"
                                            required
                                        />
                                    </div>
                                    { isSignInActive ?
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            placeholder="name@company.com"
                                            required
                                        />
                                    </div>
                                        : null }
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                        <input
                                            type="text"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                                                />
                                            </div>
                                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                        </div>
                                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full border border-gray-300 text-slate hover:text-white hover:bg-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    // onClick={handleClose}
                                    >
                                        { !isSignInActive ?  'Войти' : 'Зарегистрироваться' }
                                    </button>
                                </form>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-3">
                                    { !isSignInActive ? 'Нет акаунта? ' : 'Уже зарегистрированы? ' }
                                    <button onClick={toggleAuth} className="text-blue-700 hover:underline dark:text-blue-500">
                                        { !isSignInActive ?  ' Создать акаунт' : ' Авторизоваться' }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

