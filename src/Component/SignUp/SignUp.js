
import { UserCircleIcon } from '@heroicons/react/24/solid'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const [SignUpFormData, setSignUpFormData] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = () => {

    }
    return (
        <>
            <Navbar />
            <div className="flex min-h-full flex-1  flex-col justify-center items-center mt-14 px-6 py-12 lg:px-8">
                <div className='border-2 rounded-2xl border-indigo-400 shadow-2xl shadow-gray p-10'>

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
                        <img
                            className="mx-auto h-14 w-auto pt-4"
                            src={require('../assests/profilePic.webp')}
                            alt="Your Company"
                        />
                        <h5 className=" text-center text-sm font-bold leading-9 tracking-tight text-gray-900">
                            The Coding Scribe
                        </h5>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Create your New account
                        </h2>
                    </div>

                    <div className=" sm:mx-auto sm:w-full sm:max-w-sm pb-8">
                        <form className='mb-10'>
                            <div className="space-y-8">
                                <div className=" border-gray-900">

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                First name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                                                    placeholder='Jhon'
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Last name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                                                    placeholder='Doe'
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                                                    placeholder='test@example.com'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" border-gray-900">
                                    <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                Password
                                            </label>
                                            <div className="mt-2">
                                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <input
                                                        type="text"
                                                        name="password"
                                                        id="password"
                                                        autoComplete="password"
                                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-4"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-6">
                                            <label htmlFor="Confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                                Confirm password
                                            </label>
                                            <div className="mt-2">
                                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <input
                                                        type="password"
                                                        name="Confirmpassword"
                                                        id="Confirmpassword"
                                                        autoComplete="Confirmpassword"
                                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-4"
                                                        placeholder="Confirm Password"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                               Profile Pic
                                            </label>
                                            <div className="mt-2 flex items-center gap-x-3">
                                                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                                <input
                                                    type="file"
                                                    accept=".jpg, .jpeg, .png, .gif, .pdf"
                                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>

                            <div className="mt-6 flex items-center justify-center gap-x-6">
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 w-full py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                           Already have a Account?{' '}
                            <Link to="/logIn" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Login Here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}
