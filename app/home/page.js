import { base_url } from '@/api/Base_Url';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import LargeHomeCard from './HomeCard/LargeHomeCard';
import MediumHomeCard from './HomeCard/MediumHomeCard';
import ColumnCard from '@/components/ColumnCard/ColumnCard';
import LargeCard from '@/components/LargeCard/LargeCard';
import SmallCard from '@/components/SmallCard/SmallCard';
import ColumnVideoCard from '@/components/ColumnVideoCard/ColumnVideoCard';
import Title from '@/components/Shared/Title/Title';
import Image from 'next/image';

const page = async () => {
    const res = await axios.get(`${base_url}/api/home`)
    return (
        <>
            {/* section-1 */}
            <div className='grid grid-cols-12 gap-4 mt-8'>
                <div className="col-span-3 bg-rose-500 text-white py-2 px-3">
                    {
                        res.data?.featured_posts.slice(0, 3).map((ct) => <Link href={`/detailPage/${ct.id}`} key={ct.id}>
                            <div className='flex gap-4 items-center py-2 border-b-2 border-b-white'>
                                <Image className='w-24 h-24 rounded-full border-2 border-green-500' width={96} height={96} src={`${process.env.BASE_URL}/${ct.featured_image}`} alt='top Image' />
                                <h1 className='text-lg font-medium'>{ct.title}</h1>
                            </div>
                        </Link>)
                    }
                </div>
                <div className="col-span-6">
                    <div>
                        {
                            res.data?.featured_posts.slice(0, 1).map((ct) => <Link key={ct.id} href={`/detailPage/${ct.id}`}>
                                <div>
                                    <LargeHomeCard title={ct.title} image={ct?.featured_image} date={ct?.updated_at} author={ct?.author} />
                                </div>
                            </Link>)
                        }
                    </div>
                </div>
                <div className="col-span-3 bg-rose-500 text-white py-2 px-3">
                    {
                        res.data?.featured_posts.slice(2, 5).map((ct) => <Link href={`/detailPage/${ct.id}`} key={ct.id}>
                            <div className='flex gap-4 items-center py-2 border-b-2 border-b-white'>
                                <Image className='w-24 h-24 rounded-full border-2 border-green-500' width={96} height={96} src={`${process.env.BASE_URL}/${ct.featured_image}`} alt='top Image' />
                                <h1 className='text-lg font-medium'>{ct.title}</h1>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
            <div className="grid gap-4 bg-white p-3 grid-cols-3 mt-8">
                {
                    res.data?.featured_posts.map((ct) => <Link href={`/detailPage/${ct.id}`} key={ct.id}>
                        <SmallCard title={ct.title} image={ct?.featured_image} date={ct?.updated_at} />
                    </Link>)
                }
            </div>

            {/* section-2 */}
            <div>
                <Title title=" টপ নিউজ" />
                <div className='grid grid-cols-4 gap-4 mt-8'>
                    {
                        res.data?.featured_posts.slice(0, 4).map((ts) =>
                            <Link key={ts.id} href={`/detailPage/${ts.id}`} >
                                <ColumnCard title={ts.title} image={ts.featured_image} date={ts.updated_at} des={ts.featured_image_caption} />
                            </Link>)
                    }
                </div>
            </div>

            {/* section-4 */}
            <Title title={"আন্তর্জাতিক"} />
            <div className='grid grid-cols-2 gap-4 mt-8'>
                <div>
                    {
                        res.data?.featured_posts.slice(0, 1).map((ct) => <Link key={ct.id} href={`/detailPage/${ct.id}`}>
                            <div>
                                <LargeHomeCard title={ct.title} image={ct?.featured_image} date={ct?.updated_at} author={ct?.author} />
                            </div>
                        </Link>)
                    }
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-4'>
                        {
                            res.data?.featured_posts.slice(1, 6).map((ct) => <Link key={ct.id} href={`/detailPage/${ct.id}`}>
                                <div>
                                    <MediumHomeCard title={ct.title} image={ct?.featured_image} date={ct?.updated_at} author={ct?.author} />
                                </div>
                            </Link>)
                        }
                    </div>
                </div>
            </div>


            {/* section-3 */}
            <Title title={"সারাদেশ"} />
            <div className='grid grid-cols-12 gap-4 mt-8'>
                <div className="col-span-8 bg-white px-3">
                    {res.data.featured_posts?.slice(0, 3).map((ts) =>
                        <Link key={ts.id} href={`/detailPage/${ts.id}`} >
                            <LargeCard title={ts.title} image={ts.featured_image} date={ts.updated_at} des={ts.featured_image_caption} />
                        </Link>
                    )}
                </div>
                <div className="col-span-4 bg-white p-3">
                    <h1 className="text-2xl secondary-color font-semibold">সর্বশেষ</h1>
                    <div className="mt-4">
                        {
                            res.data?.featured_posts.map((ct) => 
                            <Link key={ct.id} href={`/detailPage/${ct.id}`}>
                                <SmallCard title={ct.title} image={ct?.featured_image} date={ct?.updated_at} />
                            </Link>
                            )
                        }
                    </div>
                </div>
            </div>


            {/* section-5 */}
            <Title title={"ভিডিও"} />
            <div className='grid grid-cols-12 gap-4 mt-8 mb-8'>
                <div className="col-span-8 bg-black text-white">
                    <div className="grid grid-cols-2 gap-6  p-3">
                        {res.data.top_videos?.map((tv) => <ColumnVideoCard key={tv.id} title={tv.title} image={tv.featured_image} date={tv.updated_at} category_name={tv.category_name} />)}
                    </div>
                </div>
                <div className="col-span-4 bg-white p-3">
                    <h1 className="text-2xl secondary-color font-semibold">সর্বশেষ ভিডিও</h1>
                    <div className="mt-4">
                        {
                            res.data?.top_videos.map((tv) => <div key={tv.id}>
                                <SmallCard title={tv.title} image={tv?.featured_image} date={tv?.updated_at} />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;