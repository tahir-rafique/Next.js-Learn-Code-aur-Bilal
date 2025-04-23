import React from 'react'

const QuoteCard = ({ author, quote }) => {
    return (
        <div className='border m-4 border-pink-200 p-4'>
            <h1 className='text-3xl font-semibold'>{quote}</h1>
            <h1 className='text-xl '>Quote by: <span className='underline font-bold'>{author}</span> </h1>

        </div>
    )
}

export default QuoteCard;