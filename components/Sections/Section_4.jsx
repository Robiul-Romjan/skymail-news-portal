"use client"
import React from 'react';
import Title from '../Shared/Title/Title';
import Link from 'next/link';
import LargeCard from '../LargeCard/LargeCard';
import SmallCard from '../SmallCard/SmallCard';

const Section_4 = ({ data }) => {
    return (
        <>
            <Title title={"সারাদেশ"} category_id={24} />
            <div className='grid grid-cols-12 gap-4 md:mt-8 mt-4'>
                <div className="md:col-span-8 col-span-12 bg-white px-3">
                    {
                        data.slice(0, 3).map((ts) =>
                            <Link key={ts.id} href={`/detailPage/${ts.id}`} >
                                <LargeCard
                                    title={ts.title}
                                    image={ts.featured_image}
                                    date={ts.updated_at}
                                    des={ts.featured_image_caption}
                                    featured_image_caption={ts?.featured_image_caption}
                                />
                            </Link>
                        )}
                </div>
                <div className="md:col-span-4 col-span-12 px-2">
                    <div className="p-2 bg-white border-2 border-x-slate-500 border-y-slate-500">
                        <h1 className="text-2xl secondary-color font-semibold border-b-2 pb-1 border-b-slate-500 mb-4">সর্বশেষ</h1>
                        {
                            data?.map((ct) =>
                                <Link key={ct.id} href={`/detailPage/${ct.id}`}>
                                    <SmallCard 
                                    title={ct?.title} 
                                    image={ct?.featured_image} 
                                    date={ct?.updated_at} 
                                    featured_image_caption={ct?.featured_image_caption}
                                    />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section_4;