import React from 'react'


export const SectionBannerSkeleton = () => {

    return (
        <section className="h-full w-full p-2">
            <div className="mb-10 mt-10 grid md:gap-2 md:grid-cols-2">
                <span className='h-80 md:rounded-s-lg  bg-gray-300 animate-pulse' />
                <span className="flex max-h-80 w-full items-center justify-center gap-2 md:rounded-e-lg bg-gray-300 uppercase text-white animate-pulse">
                    
                </span>
            </div>
        </section>
    )
}
