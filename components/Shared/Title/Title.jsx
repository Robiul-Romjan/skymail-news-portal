import React from 'react';
import { FaForward } from 'react-icons/fa6';

const Title = ({title}) => {
    return (
        <div className='primary-background-color mt-12 px-3 py-2'>
            <div className="animate-charcter text-3xl"><span className='flex gap-4 items-center'>{title} <FaForward className='secondary-color' /></span> </div>
        </div>
    );
};

export default Title;