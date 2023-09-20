import Image from 'next/image';
import React from 'react';

const LargeHomeCard = ({ image, title, featured_image_caption }) => {
    return (
        <div className='relative container overflow-hidden large-home-card'>
            <div className="overlay absolute top-0 left-0 "></div>
            <Image
                className='w-full'
                width={200}
                height={100}
                src={`${process.env.BASE_URL}/${image}`}
                alt={featured_image_caption}
            />
            <div className="absolute bottom-0 left-0 bg-[#00000066] w-full pb-4 pt-4 px-5">
                <h1 className="text-2xl font-semibold text-white transition-all">{title}</h1>
            </div>
        </div>
    );
};

export default LargeHomeCard;