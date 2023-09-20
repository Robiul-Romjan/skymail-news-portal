
import { base_url } from '@/api/Base_Url';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import authorImg from "../../../public/author-1.jpg"
import Link from 'next/link';

const page = async () => {
    const res = await axios.get(`${base_url}/api/todays-news`)

    return (
        <>
            <div className='flex gap-4 items-center justify-center mt-6 md:mb-12 mb-6'>
                <Image className='h-16 w-16 rounded-full border-sky-400' src={authorImg} height={56} width={56} alt='author image' />
                <div>
                    <h1 className='md:text-xl text-sm font-semibold'>মাহফুজুল ইসলাম</h1>
                    <p>জ্যেষ্ঠ প্রতিবেদক</p>
                </div>
            </div>
            <div className="grid grid-cols-12 px-3">
                <div className="md:col-span-2"></div>
                <div className="md:col-span-8 col-span-12">
                    {
                        res.data.slice(0, 8).map((an) =>
                            <Link key={an.id} href={`/detailPage/${an.id}`}>
                                <div className="grid grid-cols-12 gap-8 mb-4 border-b-2 border-b-sky-400 pb-3">
                                    <div className="md:col-span-8 col-span-12">
                                        <h1 className="text-2xl font-semibold">{an.title}</h1>
                                        <p className='my-3 text-sm'>{an.updated_at}</p>
                                        <p className='text-base'>{an.author}</p>
                                    </div>
                                    <div className="md:col-span-4 hidden md:block">
                                        <Image
                                            className='w-full'
                                            height="200"
                                            width="300"
                                            src={`${process.env.BASE_URL}/${an.featured_image.slice(7)}`}
                                            alt='author image'
                                        />
                                    </div>
                                </div>
                            </Link>)
                    }
                </div>
                <div className="md:col-span-2"></div>
            </div>
        </>
    );
};

export default page;