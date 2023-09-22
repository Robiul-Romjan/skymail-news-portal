
import Image from 'next/image';
import React from 'react';
import { FaCalendarDays, FaPlay } from 'react-icons/fa6';

const ColumnVideoCard = ({ image, title, date, category_name }) => {
    return (
        <div className='small-card flex flex-col my-3 shadow-md hover:shadow-xl pb-0'>
            <div className='overflow-hidden relative'>
                <Image
                    className='w-full'
                    width={200} height={100}
                    src={`${process.env.BASE_URL}/${image}`}
                    alt='top Image'
                />
                <p className='mt-3 text-[18px] bg-rose-500 absolute bottom-0 right-0 text-white p-2'><FaPlay /></p>
            </div>
            <div className='px-4 py-2 '>
                <div className="flex justify-between items-center">
                    <span className='mt-3 text-[18px] bg-rose-400 bottom-0 right-0 text-white px-2 py-1'>{category_name}</span>
                    <p className='text-sm flex items-center text-gray-500 gap-2'><FaCalendarDays /> <span>{date}</span> </p>
                </div>
                <h1 className="text-xl font-semibold mt-3">{title}</h1>
            </div>
        </div>
    );
};

export default ColumnVideoCard;