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

const page = async () => {
    const res = await axios.get(`${base_url}/api/home`)
    return (
        <>
            {/* section 1 */}
            <div className='grid grid-cols-2 gap-4 mt-12'>
                <div>
                    {
                        res.data?.featured_posts.slice(0, 1).map((ct) => <div key={ct.id}>
                            <LargeHomeCard title={ct.title} image={ct?.featured_image} date={ct?.updated_at} author={ct?.author} />
                        </div>)
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

            {/* section-2 */}
            <div>
                <h1 className="text-3xl text-white primary-background-color p-2 font-semibold mt-12">টপ নিউজ</h1>
                <div className='grid grid-cols-4 gap-4 mt-8'>
                    {
                        res.data?.featured_posts.slice(0, 4).map((ts) =>
                            <ColumnCard key={ts.id} title={ts.title} image={ts.featured_image} date={ts.updated_at} des={ts.featured_image_caption} />)
                    }
                </div>
            </div>


            {/* section-3 */}
            <h1 className="text-3xl text-white primary-background-color p-2 font-semibold mt-12">সারাদেশ</h1>
            <div className='grid grid-cols-12 gap-4 mt-8'>
                <div className="col-span-8 bg-white p-3">
                    {res.data.featured_posts?.slice(0, 3).map((ts) => <LargeCard key={ts.id} title={ts.title} image={ts.featured_image} date={ts.updated_at} des={ts.featured_image_caption} />)}
                </div>
                <div className="col-span-4 bg-white p-3">
                    <h1 className="text-2xl secondary-color font-semibold">সর্বশেষ</h1>
                    <div className="mt-4">
                        {
                            res.data?.featured_posts.map((ct) => <div key={ct.id}>
                                <SmallCard title={ct.title} image={ct?.featured_image} date={ct?.updated_at} />
                            </div>)
                        }
                    </div>
                </div>
            </div>

            {/* section-4 */}
            <h1 className="text-3xl primary-background-color p-2 text-white font-semibold mt-12">ভিডিও</h1>
            <div className='grid grid-cols-12 gap-4 mt-8 '>
                <div className="col-span-8">
                    <div className="grid grid-cols-2 gap-6 bg-white p-3">
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