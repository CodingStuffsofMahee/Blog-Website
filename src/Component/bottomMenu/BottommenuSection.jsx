import React from 'react'

function BottomMenuSection({ likes, comments }) {
    return (
        <div class="fixed bottom-0 left-0 z-50 w-full h-16 mb-4">
            <div class="grid h-full max-w-lg grid-cols-3 border-2 drop-shadow-xl rounded-xl border-gray-400 mx-auto font-medium bg-white">
                <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group rounded-2xl">



                    <svg class="w-6 h-6 mb-1 text- dark:text-gray-400 group-focus:text-[#D05270]  group-hover:text-[#D05270]" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                    <span class="text-sm text-gray-700 group-hover:text-gray-800 ">{likes} Likes</span>
                </button>
                <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">

                    <svg class="w-6 h-6 mb-1 text-black dark:text-gray-400 group-hover:text-gray-800" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                    </svg>
                    <span class="text-sm text-gray-700 group-hover:text-gray-800 ">{comments.length} Comment</span>
                </button>

                <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group rounded-2xl">


                    <svg class="w-6 h-6 mb-1 text-black dark:text-gray-400 group-hover:text-[#5282d0] group-focus:text-[#5282d0]" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                    </svg>
                    <span class="text-sm text-gray-700 group-hover:text-gray-800 ">Share</span>
                </button>


            </div>
        </div>
    )
}

export default BottomMenuSection