import Image from 'next/image';
import React from 'react';
import { FaCalendarDays } from "react-icons/fa6";

const SmallCard = ({ title, image, date }) => {
    return (
        <div className='small-card grid grid-cols-12 gap-4 mb-6 shadow-md hover:shadow-xl pb-0'>
            <div className='overflow-hidden col-span-5'>
                <Image className='w-full' width={200} height={100} src={`${process.env.BASE_URL}/${image}`} alt='Featured Image' />
            </div>
            <div className='col-span-7'>
                <h1 className="text-base font-semibold">{title}</h1>
                <p className='text-sm flex items-center text-gray-500 gap-2 mt-3'><FaCalendarDays /> <span>{date}</span> </p>
            </div>
        </div>
        
    );
};

export default SmallCard;