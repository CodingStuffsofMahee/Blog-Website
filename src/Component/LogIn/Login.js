import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import Toast from '../Toast/Toast';
import LoggedContext from '../Context/LoginContext';
function Login() {
    const { setLoginTrue } = useContext(LoggedContext)
    const [serverResponse, setServerResponse] = useState({
        isLogging: false,
        serverData: {}
    })
    const [LoginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    })
    console.log(LoginFormData);
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://mongo-dbloginblog-production.up.railway.app/auth/login', LoginFormData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {

                console.log(response.data);
                setServerResponse({ ...LoginFormData, serverData: response.data })
                console.log("Server", serverResponse.serverData);
                if (response.data.statusCode === 200) {
                    setLoginFormData({ email: '', password: '' })
                    localStorage.setItem('logged', 'true')
                    setLoginTrue(true)
                }
            } else {
                console.error('Received an unexpected response:', response);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
    return (
        <>
            <Navbar showSignUp={true} />
            <div className="flex min-h-full flex-1  flex-col justify-center items-center mt-14 px-6 py-12 lg:px-8">
                <div className='border-2 rounded-2xl border-indigo-400 shadow-2xl shadow-gray p-10'>

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm px-14 ">
                        <img
                            className="mx-auto h-14 w-auto pt-4"
                            src={require('../assests/profilePic.webp')}
                            alt="Your Company"
                        />
                        <h5 className=" text-center text-sm font-bold leading-9 tracking-tight text-gray-900">
                            The Coding Scribe
                        </h5>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className=" sm:mx-auto sm:w-full sm:max-w-sm pt-8 ">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12 pl-4"
                                        value={LoginFormData.email} onChange={(e) => {
                                            setLoginFormData({ ...LoginFormData, email: e.target.value })
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <Link to="#" className="font-semibold  text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12 pl-4"
                                        value={LoginFormData.password} onChange={(e) => {
                                            setLoginFormData({ ...LoginFormData, password: e.target.value })
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full  justify-center rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Don't have a Account?{' '}
                            <Link to="/signUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Create a account now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            {console.log(serverResponse.serverData)}
            {serverResponse.serverData.statusCode ? <Toast msg={serverResponse.serverData.message} type={serverResponse.serverData.statusCode === 200 ? true : false} /> : null}

        </>
    )
}

export default Login