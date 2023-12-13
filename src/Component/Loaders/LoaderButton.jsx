import React from 'react'

function LoaderButton() {
    return (
        <>
            <button type="button" className="flex w-full  justify-center rounded-md  px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm bg-[#ed5f80]" disabled>
                <div className="flex items-center justify-center m-[10px]">
                    <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                    <div className="ml-2"> Processing... </div>
                </div>
            </button>
        </>
    )
}

export default LoaderButton