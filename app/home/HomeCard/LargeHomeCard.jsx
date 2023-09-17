import Image from 'next/image';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaCalendarDays } from "react-icons/fa6";

const LargeHomeCard = ({ image, title, date, author }) => {
    return (
        <div className='relative container overflow-hidden large-home-card'>
            <div className="overlay absolute top-0 left-0 "></div>
            <Image className='w-full' width={200} height={100} src={`${process.env.BASE_URL}/${image}`} alt='top Image' />

            <div className="absolute bottom-0 left-0 bg-[#00000066] w-full pb-6 pt-4 px-5">
                <h1 className="text-2xl font-semibold text-white transition-all">{title}</h1>
                <p className='text-white text-base font-semibold mt-4 flex gap-2 items-center'><FaUserCircle /> {author}</p>
                <p className='text-sm font-medium flex text-gray-200 gap-2 mt-3'><FaCalendarDays /> <span>{date}</span> </p>
            </div>
        </div>
    );
};

export default LargeHomeCard;