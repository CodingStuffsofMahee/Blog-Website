import React from 'react'
import Navbar from './Navbar/Navbar'
import { Link } from 'react-router-dom'
import TopPickBlogs from './Blogs/TopPickBlogs'
import Newsletter from './NewsLetter/NewsLetter'



function Home() {

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-4xl lg:mt-32 max-md:mt-24 max-lg:mt-24 flex items-center ">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Welcome to The Coding Scribe
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Welcome to The Coding Scribe, your go-to destination for everything related to technology, coding, and beyond. Whether you're a seasoned developer, a tech enthusiast, or just someone curious about the world of technology, our blog has something for everyone.

                        <p>
                            Ready to embark on your tech journey? Start exploring our blog today and unlock the world of possibilities that technology has to offer.
                        </p>
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            View All Blogs
                        </Link>
                    </div>
                </div>
            </div>
            <TopPickBlogs />
            <Newsletter noNavbar={'true'}/>
        </>
    )
}

export default Home