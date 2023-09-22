
import LargeHomeCard from '@/app/home/HomeCard/LargeHomeCard';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SmallCard from '../SmallCard/SmallCard';

const Section_1 = ({ data }) => {

    return (
        <div>
            <div className='grid md:grid-cols-12 gap-4 md:mt-8 mt-4'>
                <div className="md:col-span-3 col-span-12 bg-rose-500 text-white py-2 px-3">
                    {
                        data?.slice(0, 3).map((ct) =>
                            <Link href={`/detailPage/${ct.id}`} key={ct.id}>
                                <div className='flex gap-4 items-center py-2 border-b-2 border-b-white'>
                                    <Image 
                                    className='w-24 h-24 rounded-full border-2 border-green-500' width={96} 
                                    height={96} 
                                    src={`${process.env.BASE_URL}/${ct.featured_image}`} 
                                    alt={ct?.featured_image_caption} />
                                    <h1 className='text-lg font-medium'>{ct.title}</h1>
                                </div>
                            </Link>)
                    }
                </div>
                <div className="md:col-span-6 col-span-12">
                    <div>
                        {
                            data?.slice(0, 1).map((ct) =>
                                <Link key={ct.id} href={`/detailPage/${ct.id}`}>
                                    <div>
                                        <LargeHomeCard 
                                        title={ct.title} 
                                        image={ct.featured_image} 
                                        date={ct?.updated_at} 
                                        author={ct?.author} 
                                        featured_image_caption={ct.featured_image_caption}
                                         />
                                    </div>
                                </Link>)
                        }
                    </div>
                </div>
                <div className="md:col-span-3 col-span-12 bg-rose-500 text-white py-2 px-3">
                    {
                        data?.slice(2, 5).map((ct) =>
                            <Link href={`/detailPage/${ct.id}`} key={ct.id}>
                                <div className='flex gap-4 items-center py-2 border-b-2 border-b-white'>
                                    <Image 
                                    className='w-24 h-24 rounded-full border-2 border-green-500' 
                                    width={96} 
                                    height={96} 
                                    src={`${process.env.BASE_URL}/${ct.featured_image}`} 
                                    alt={ct.featured_image_caption} />
                                    <h1 className='text-lg font-medium'>{ct.title}</h1>
                                </div>
                            </Link>)
                    }
                </div>
            </div>
            <div className="grid gap-4 bg-white p-3 md:grid-cols-3 mt-8">
                {
                    data?.map((ct) =>
                        <Link href={`/detailPage/${ct.id}`} key={ct.id}>
                            <SmallCard 
                            title={ct.title} 
                            image={ct.featured_image} 
                            date={ct?.updated_at} 
                            featured_image_caption={ct.featured_image_caption} 
                            />
                        </Link>)
                }
            </div>
        </div>
    );
};

export default Section_1;