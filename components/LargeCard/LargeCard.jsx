import Image from 'next/image';
import React from 'react';
import { FaCalendarDays } from 'react-icons/fa6';


const LargeCard = ({ image, title, date, des }) => {
    // console.log(process.env.BASE_URL_2, image)

    return (
        <div className='small-card grid grid-cols-12 gap-4 my-6 shadow-md hover:shadow-xl pb-0'>
            <div className='overflow-hidden col-span-5'>
                <Image className='w-full' width={200} height={100} src={`${process.env.BASE_URL}/${image}`} alt='top Image' />
            </div>
            <div className='col-span-7'>
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p className='text-sm flex items-center text-gray-500 gap-2 mt-4'><FaCalendarDays /> <span>{date}</span> </p>
                <p className='mt-3 mr-4 text-[19px]'>{des}</p>
            </div>
        </div>
    );
};

export default LargeCard;