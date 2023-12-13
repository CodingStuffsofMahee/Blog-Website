import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import Toast from '../Toast/Toast';
import LoggedContext from '../Context/LoginContext';
import LoaderButton from '../Loaders/LoaderButton';
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
    const handleSubmit = async (e) => {
        e.preventDefault()
        setServerResponse({ ...serverResponse, isLogging: true })

        try {
            const response = await axios.post('https://interesting-faithful-title.glitch.me/api/account/login', LoginFormData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {

                setServerResponse({ ...serverResponse, serverData: response.data })
                if (response.data.status === 200) {
                    setLoginFormData({ email: '', password: '' })
                    localStorage.setItem('logged', 'true')
                    setLoginTrue(true)
                    if (response.data.role==='admin') {
                        localStorage.setItem('adminLogged','true')
                    }
                    setServerResponse({ ...serverResponse, isLogging: false })
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
            <div className="flex min-h-full flex-1  flex-col justify-center items-center mt-6 px-6 lg:px-8">
                <div className='border-2 rounded-2xl border-yellow-700 sm:border-[#AA85C6] shadow-2xl shadow-gray p-10'>

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
                                        <Link to="#" className="font-semibold text-[#AA85C6] hover:text-[#c298e2]">
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
                                {serverResponse.isLogging ? <LoaderButton /> :
                                    <button
                                        type="submit"
                                        className="rounded-md  w-full py-3 text-lg font-semibold text-white shadow-sm bg-[#D05270] hover:bg-[#eb5d7e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb5d7e]"

                                    >
                                        Sign in
                                    </button>}
                            </div>
                        </form>

                        <p className="mt-10 text-center font-medium text-sm text-gray-700">
                            Don't have a Account?{' '}
                            <Link to="/signUp" className="font-semibold leading-6 text-[#AA85C6] hover:text-[#c298e2]">
                                Create a account now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            {serverResponse.serverData.status ? <Toast msg={serverResponse.serverData.message} type={serverResponse.serverData.status === 200 ? true : false} /> : null}

        </>
    )
}

export default Login