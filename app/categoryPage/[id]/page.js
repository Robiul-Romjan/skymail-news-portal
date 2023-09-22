import { base_url } from '@/api/Base_Url';
import LargeHomeCard from '@/app/home/HomeCard/LargeHomeCard';
import MediumHomeCard from '@/app/home/HomeCard/MediumHomeCard';
import LargeCard from '@/components/LargeCard/LargeCard';
import SmallCard from '@/components/SmallCard/SmallCard';
import Link from 'next/link';
import React from 'react';
import { FaRightFromBracket } from 'react-icons/fa6';

const page = async ({ params }) => {
    const categoryNews = await fetch(`${base_url}/api/news/category/${params.id}`)
    const categoryNewsData = await categoryNews.json()

    const res = await fetch(`${base_url}/api/home`)
    const data = await res.json()

    return (
        <div className="container mx-auto mb-5">

            <div className='grid md:grid-cols-2 gap-4 mt-8'>
                <div>
                    {
                        categoryNewsData?.data?.slice(0, 1).map((cn) =>
                            <Link key={cn.id} href={`/detailPage/${cn.id}`}>
                                <>
                                    <LargeHomeCard
                                        title={cn.title}
                                        image={cn.featured_image.slice(7)}
                                    />
                                </>
                            </Link>)
                    }
                </div>
                <div>
                    <div className='grid md:grid-cols-2 gap-4'>
                        {
                            categoryNewsData?.data?.slice(1, 5).map((cn) => 
                            <Link key={cn.id} href={`/detailPage/${cn.id}`}>
                                <>
                                    <MediumHomeCard 
                                    title={cn.title} 
                                    image={cn.featured_image.slice(7)} />
                                </>
                            </Link>)
                        }
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 gap-6 mt-8'>
                <div className='md:col-span-8 col-span-12 bg-white p-4 pb-0'>
                    {
                        categoryNewsData?.data.slice(2).map((cn) =>
                            <Link key={cn.id} href={`/detailPage/${cn.id}`}>
                                <LargeCard
                                    className="text-3xl"
                                    image={cn.featured_image.slice(7)}
                                    title={cn.title} date={cn.updated_at}
                                    des={cn.author} />
                            </Link>)
                    }
                    <Link className='text-white flex items-center text-lg font-semibold gap-2 px-3 py-1 mb-4 justify-center bg-rose-500 rounded-sm' href={`http://barta24.com/api/news/category/18?page=2`}>আরো পড়ুন <FaRightFromBracket /></Link>

                </div>
                <div className='md:col-span-4 col-span-12 px-2'>
                    <h1 className='bg-rose-500 text-white text-center text-3xl'>আরো খবর</h1>
                    <div className='bg-white p-2 border-2 border-x-slate-500 border-b-slate-500'>
                        {
                            data?.featured_posts.map((ct) =>
                                <Link key={ct.id} href={`/detailPage/${ct.id}`}>
                                    <SmallCard 
                                    title={ct.title} 
                                    image={ct.featured_image} 
                                    date={ct?.updated_at} 
                                    />
                                </Link>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;