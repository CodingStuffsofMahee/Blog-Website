import React from 'react'
import Navbar from './Navbar/Navbar'
import { Link } from 'react-router-dom'
import Newsletter from './NewsLetter/NewsLetter'
import AllBlogs from './Blogs/AllBlogs'


function Home() {

    return (
        <>
            <Navbar />
            <div className="mx-auto lg:max-w-7xl md:max-w-2xl max-w-sm lg:mt-12 max-md:mt-8 max-lg:mt-8 flex lg:gap-x-36 md:gap-x-16 items-center justify-center ">
                <div className="w-[64rem]">
                    <h1 className="text-4xl text-center md:text-5xl font-bold  text-[#1a1a1a] tracking-tight p-3 rounded-2xl lg:text-6xl">
                        Welcome to, <span className='text-[#D05270] text-'>
                            The Coding Scribe
                        </span>
                    </h1>
                    <div className="mt-6 lg:text-xl md:text-lg text-lg leading-8 text-gray-700">
                        Welcome to The Coding Scribe, your go-to destination for everything related to technology, coding, and beyond. Whether you're a seasoned developer, a tech enthusiast, or just someone curious about the world of technology, our blog has something for everyone.
                        

                            <p className='mt-4'>
                                Ready to embark on your tech journey? Start exploring our blog today and unlock the world of possibilities that technology has to offer.
                            </p>
                        
                    </div>
                    <div className="mt-10">
                        <Link
                            to="/newsletter"
                            className="rounded-md bg-[#D05270] px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-[#eb5d7e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Subscribe to my Newsletter
                        </Link>
                    </div>
                </div>
                <div className=''>
                    <img className='w-full hidden md:block' src={require('./blog-title-page.png')} alt='title' />
                </div>
            </div>
            <AllBlogs />
            <Newsletter noNavbar={'true'} />
        </>
    )
}

export default Home