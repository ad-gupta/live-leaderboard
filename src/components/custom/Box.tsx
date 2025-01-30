import React from 'react'

const Box = ({ teamName }: {teamName: string}) => {
    return (
        <div className="p-3 cursor-pointer h-16 m-auto bg-slate-950 text-slate-400 rounded-lg shadow-xl">
            <p className='text-center mt-1 font-semibold'>{teamName}</p>
        </div>
    )
}

export default Box
