'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)

    }, [error])

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h2>Something went wrong!</h2>

            {/*  .messege kar ky error nikal laing y */}
            <h1 className='font-bold  text-4xl'>Showing Error on Frontend: {error.message}</h1>

            <button
                className='bg-purple-300 p-3 rounded-md cursor-pointer'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}