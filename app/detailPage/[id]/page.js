import { base_url } from '@/api/Base_Url';
import SmallCard from '@/components/SmallCard/SmallCard';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }) => {
    const singleNews = await axios.get(`${base_url}/api/v2/detail/${params.id}`)
    const todaysNews = await axios.get(`${base_url}/api/todays-news`)

    return (
        <div className="container mx-auto ps-4">
            <h1 className="md:text-3xl text-xl font-semibold mt-8">{singleNews.data.title}</h1>
            <div className='flex gap-4 items-center mt-4'>
                <Image
                    className='w-12 h-12 rounded-full'
                    width={48} height={48}
                    src={`${process.env.BASE_URL}/${singleNews.data.featured_image}`}
                    alt='top Image'
                />
                <div>
                    <Link href={"/authorPage/1"}>
                        <h1 className='md:text-lg text-sm font-semibold'>{singleNews.data.title}</h1>
                    </Link>
                    <p>{singleNews.data.author}</p>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-6'>
                <div className='md:col-span-8 col-span-12 mr-3'>
                    <Image
                        className='w-full my-5'
                        width={200} height={100}
                        src={`${process.env.BASE_URL}/${singleNews.data.featured_image}`}
                        alt={singleNews?.data?.featured_image_caption}
                    />
                    <p className='text-lg mb-4' dangerouslySetInnerHTML={{ __html: singleNews.data.content }} />
                </div>
                <div className='md:col-span-4 col-span-12 mt-4 mr-3 mb-8 md:mb-0'>
                    <h1 className='bg-rose-500 text-white text-center text-3xl'>সর্বশেষ খবর</h1>
                    <div className='bg-white px-2 py-1 border-2 border-x-slate-500 border-b-slate-500'>
                        {
                            todaysNews.data?.slice(0, 6).map((tn) =>
                                <Link key={tn.id} href={`/detailPage/${tn.id}`}>
                                    <SmallCard title={tn.title} image={tn?.featured_image.slice(7)} date={tn?.updated_at} />
                                </Link>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;