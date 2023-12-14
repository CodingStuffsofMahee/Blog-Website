import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import BlogsJson from '../../BlogsJson'
import axios from 'axios'
import BlogLoader from '../Loaders/BlogLoader'

function AllBlogs() {
    const [category, setCategory] = useState('all')
    const [blogs, setBlogs] = useState(BlogsJson)
    const [loader, setLoader] = useState(true)
    useEffect(() => {

        axios.get('https://interesting-faithful-title.glitch.me/api/allblogs').then((response) => {
            if ((response.data.Blogsdata).length !== 0) {
                const showBlogs = response.data.Blogsdata.filter((ele) => {
                    if (category === 'all') {
                        return response.data.Blogsdata
                    } else {

                        return (ele.blogCategory).includes(category)
                    }
                })
                setBlogs(showBlogs)
            }

        }).catch((err) => {
            console.error(err);
        }).finally(() => {
            setLoader(false)
        })


    }, [category])

    return (
        <>
            <section className="lg:max-w-7xl md:max-w-2xl sm:max-w-sm mx-auto px-4 sm:px-6 lg:px-4 mb-12 mt-12">
                <div className='flex w-full gap-x-8'>
                    <button className={`font-medium ${category === 'all' ? 'underline text-[#D05270]' : ''} `} onClick={() => { setCategory('all') }}>All</button>
                    <button className={`font-medium ${category === 'Tech' ? 'underline text-[#D05270]' : ''} `} onClick={() => { setCategory('Tech') }}>Tech Blogs</button>
                    <button className={`font-medium ${category === 'Web Development' ? 'underline text-[#D05270]' : ''} `} onClick={() => { setCategory('Web Development') }}>Web Development</button>
                    <button className={`font-medium ${category === 'Coding' ? 'underline text-[#D05270]' : ''} `} onClick={() => { setCategory('Coding') }}>Coding Problems</button>
                </div>
                <article>
                    {console.log(blogs.length)}
                    <section className="mt-6 flex flex-wrap gap-x-10 gap-y-8 justify-evenly">
                        {loader ? <BlogLoader /> :
                            blogs.length===0?
                            "No Blogs of this category found":blogs.map((post) => (
                                <div key={post._id} tabIndex="0" className="focus:outline-none mx-2 w-72 h-full xl:mb-0 mb-8 rounded-xl border-2 p-3 shadow-xl  ">
                                    <div>
                                        <img alt="person capturing" src={post.blogImage===''?"https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png":post.blogImage} tabIndex="0" className="focus:outline-none w-full h-44 " />
                                    </div>
                                    <div className="bg-white ">
                                        <div className="flex items-center justify-between px-4 pt-4">
    
                                            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                                <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">{post.blogCategory}</p>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex items-center">
                                                <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">{post.blogName}</h2>
                                            </div>
                                            
                                            {/* <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 mt-2">{post.blogContent.substring(0, 200)}</p> */}
                                            <div className="flex mt-4">
                                                <div>
                                                    <Link
                                                        to={`/allblogs/${post._id}`}
                                                        className="rounded-md bg-[#D05270] p-2 font-semibold text-white shadow-sm hover:bg-[#eb5d7e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb5d7e] text-sm"
                                                    >
                                                        Read more
                                                    </Link>
                                                </div>
    
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                            ))}
                       
                        
                    </section>

                </article>
            </section>
        </>
    )
}

export default AllBlogs