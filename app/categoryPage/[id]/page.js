import { base_url } from '@/api/Base_Url';
import LargeHomeCard from '@/app/home/HomeCard/LargeHomeCard';
import MediumHomeCard from '@/app/home/HomeCard/MediumHomeCard';
import LargeCard from '@/components/LargeCard/LargeCard';
import MediumColumnCard from '@/components/MediumColumnCard/MediumColumnCard';
import SmallCard from '@/components/SmallCard/SmallCard';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }) => {
    const categoryNews = await axios.get(`${base_url}/api/news/category/${params.id}`);
    const res = await axios.get(`${base_url}/api/home`)
    // console.log(categoryNews.data.data.title)
    return (
        <div className="container mx-auto mb-5">

            <div className='grid md:grid-cols-2 gap-4 mt-8'>
                <div>
                    {
                        categoryNews.data.data?.slice(0, 1).map((cn) => <Link key={cn.id} href={`/detailPage/${cn.id}`}>
                            <div>
                                <LargeHomeCard title={cn.title} image={cn?.featured_image.slice(7)} />
                            </div>
                        </Link>)
                    }
                </div>
                <div>
                    <div className='grid md:grid-cols-2 gap-4'>
                        {
                            categoryNews.data.data?.slice(1,5).map((cn) => <Link key={cn.id} href={`/detailPage/${cn.id}`}>
                                <div>
                                    <MediumHomeCard title={cn.title} image={cn?.featured_image.slice(7)} />
                                </div>
                            </Link>)
                        }
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 gap-6 mt-8'>
                <div className='md:col-span-8 col-span-12 bg-white p-4 pb-0'>

                    {categoryNews.data.data.slice(2).map((cn) => <Link key={cn.id} href={`/detailPage/${cn.id}`}>
                        <LargeCard className="text-3xl" image={cn.featured_image.slice(7)} title={cn.title} date={cn.updated_at} des={cn.author} />
                    </Link>)}

                </div>
                <div className='md:col-span-4 col-span-12 px-2'>
                    <h1 className='bg-rose-500 text-white text-center text-3xl'>আরো খবর</h1>
                    <div className='bg-white p-2 border-2 border-x-slate-500 border-b-slate-500'>
                        {
                            res.data?.featured_posts.map((ct) => 
                            <Link key={ct.id} href={`/detailPage/${ct.id}`}>
                                <SmallCard title={ct.title} image={ct?.featured_image} date={ct?.updated_at} />
                            </Link>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default page;