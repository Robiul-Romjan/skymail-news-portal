"use client"
import React from 'react';
import Title from '../Shared/Title/Title';
import ColumnVideoCard from '../ColumnVideoCard/ColumnVideoCard';
import SmallCard from '../SmallCard/SmallCard';

const Section_5 = ({ data }) => {
    return (
        <>
            <Title title={"ভিডিও"} category_id={28} />
            <div className='grid grid-cols-12 gap-4 mt-8 mb-8'>
                <div className="md:col-span-8 col-span-12 bg-black text-white">
                    <div className="grid md:grid-cols-2 gap-6  p-3">
                        {
                            data?.map((tv) =>
                                <ColumnVideoCard
                                    key={tv?.id}
                                    title={tv?.title}
                                    image={tv?.featured_image}
                                    date={tv?.updated_at}
                                    category_name={tv?.category_name}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="md:col-span-4 px-2 md:px-0 col-span-12">
                    <div className="p-2 bg-white border-2 border-x-slate-500 border-y-slate-500">
                        <h1 className="text-2xl secondary-color font-semibold border-b-2 pb-1 border-b-slate-500 mb-3">সর্বশেষ ভিডিও</h1>
                        {
                            data?.map((tv) => <div key={tv.id}>
                                <SmallCard
                                    title={tv?.title}
                                    image={tv?.featured_image}
                                    date={tv?.updated_at}
                                    featured_image_caption={tv?.featured_image_caption}
                                />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section_5;