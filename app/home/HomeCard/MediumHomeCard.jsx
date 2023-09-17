import Image from 'next/image';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaCalendarDays } from "react-icons/fa6";

const MediumHomeCard = ({ image, title, date, author }) => {
    return (
        <div className='relative container overflow-hidden large-home-card'>
            <div className="overlay absolute top-0 left-0 "></div>
            <Image className='w-full h-auto' width={200} height={100} src={`${process.env.BASE_URL}/${image}`} alt='Featured Image' />

            <div className="absolute bottom-0 left-0 bg-[#00000066] w-full py-4 px-3">
                <h1 className="text-base font-semibold text-white transition-all">{title}</h1>
                {/* <p className='text-white text-sm font-semibold mt-2 flex gap-2 items-center'><FaUserCircle /> {author}</p> */}
                <p className='text-xm font-medium flex text-gray-200 gap-2 mt-2'><FaCalendarDays /> <span>{date}</span> </p>
            </div>
        </div>
    );
};

export default MediumHomeCard;