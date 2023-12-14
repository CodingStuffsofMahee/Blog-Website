import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProfileDropDown from '../DropDowns/ProfileDropDown'
import LoggedContext from '../Context/LoginContext'
const navigation = [
    // { name: 'Newsletter', href: '/newsletter' }
]
const isLogged = localStorage.getItem('logged')
function Navbar(props) {
    const { LoginTrue, setLoginTrue } = useContext(LoggedContext)
    if (isLogged) {
        setLoginTrue(true)
    }
    return (
        <>
            <header className="inset-x-0 w-full top-0 p-4  sm:p-6 ">
                <nav className="flex bg-yellow-600 sm:bg-[#AA85C6]  rounded-xl items-center justify-between p-3 lg:px-8" aria-label="Global">

                    <div className="flex lg:flex-1 ">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <div className='bg-white w-full rounded-lg px-2'>

                                <img
                                    className="h-14 w-14"
                                    src={require('../assests/profilePic.webp')}
                                    alt=""
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.href} className="text-lg font-semibold leading-6 text-[#1a1a1a] hover:underline">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className=" text-white lg:flex lg:flex-1 lg:justify-end">
                        {LoginTrue ? <ProfileDropDown />
                            :
                            props.showSignUp ? <Link to="/signUp" className="text-lg text-white font-semibold leading-6  ">
                                SignUp <span aria-hidden="true">&rarr;</span>
                            </Link> : <Link to="/logIn" className="text-lg font-semibold leading-6 text-white">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                        }
                    </div>

                </nav>

            </header>
        </>

    )
}

export default Navbar;