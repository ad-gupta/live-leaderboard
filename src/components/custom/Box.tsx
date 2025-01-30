import React from 'react'

const Box = ({ teamName }: {teamName: string}) => {
    return (
        <div className="p-3 cursor-pointer h-16 bg-green-500 text-white rounded-lg shadow-md">
            {teamName}
        </div>
    )
}

export default Box
