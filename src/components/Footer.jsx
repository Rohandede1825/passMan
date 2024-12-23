import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col  justify-center items-center  w-full h-[10vh] gap-0'>
            <div className="logo font-bold text-white text-2xl m-[-68px] mt-[-1.75rem]">
                <span className='text-green-500'> &lt;</span>
                <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
            </div>
            <div className='flex justify-center items-center gap-0'> Created with <img className='w-5 mx-2' src="icons/heart.png" alt="" /> by Rohan </div>
        </div>
    )
}

export default Footer
