
import Image from 'next/image';
import React from 'react';

const MediumHomeCard = ({ image, title, featured_image_caption }) => {
    return (
        <div className='relative container overflow-hidden large-home-card'>
            <div className="overlay absolute top-0 left-0 "></div>
            <Image
                className='w-full h-auto'
                width={200} height={100}
                src={`${process.env.BASE_URL}/${image}`}
                alt={featured_image_caption}
            />
            <div className="absolute bottom-0 left-0 bg-[#00000066] w-full py-2 px-3">
                <h1 className="text-base font-semibold text-white transition-all">{title}</h1>
            </div>
        </div>
    );
};

export default MediumHomeCard;