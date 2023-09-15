import Image from 'next/image';
import React from 'react';
import { FaCalendarDays } from 'react-icons/fa6';

const ColumnCard = ({ image, title, date, des }) => {
    return (
        <div className='small-card flex flex-col mb-6 shadow-md hover:shadow-xl pb-0'>
            <div className='overflow-hidden'>
                <Image className='w-full' width={200} height={100} src={`${process.env.BASE_URL}/${image}`} alt='top Image' />
            </div>
            <div className='p-4 '>
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className='text-sm flex items-center text-gray-500 gap-2 mt-4'><FaCalendarDays /> <span>{date}</span> </p>
                <p className='mt-3 mr-4 text-[18px]'>{des}</p>
            </div>
        </div>
    );
};

export default ColumnCard;