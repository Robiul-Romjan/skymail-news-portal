"use client"
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ColumnCard from '../ColumnCard/ColumnCard';
import Image from 'next/image';
import Link from 'next/link';
import SmallCard from '../SmallCard/SmallCard';

const SubCategorySection = ({ data }) => {

    return (
        <div className='grid grid-cols-12 mt-12 gap-4'>
            <Tabs className="col-span-8">
                <TabList className="flex gap-4 bg-white p-2">
                    <div className='text-2xl font-semibold mr-12 pt-1'>দেশের খবর</div>
                    <Tab className='text-white p-2 font-semibold rounded-sm cursor-pointer bg-rose-500'>ঢাকা</Tab>
                    <Tab className='text-white p-2 font-semibold rounded-sm cursor-pointer bg-rose-500'>চট্টগ্রাম</Tab>
                    <Tab className='text-white p-2 font-semibold rounded-sm cursor-pointer bg-rose-500'>রাজশাহী</Tab>
                    <Tab className='text-white p-2 font-semibold rounded-sm cursor-pointer bg-rose-500'>সিলেট</Tab>
                    <Tab className='text-white p-2 font-semibold rounded-sm cursor-pointer bg-rose-500'>যশোর</Tab>
                    <Tab className='text-white p-2 font-semibold rounded-sm cursor-pointer bg-rose-500'>দিনাজপুর</Tab>
                    <Tab className='text-white p-2 font-semibold rounded-sm cursor-pointer bg-rose-500'>ময়মনসিংহ</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-2 gap-4 bg-white p-2 mt-4'>
                        <div>
                            {
                                data?.slice(0, 1).map((sc) =>
                                    <ColumnCard
                                        key={sc.id}
                                        title={sc?.title}
                                        image={sc?.featured_image.slice(7)}
                                        date={sc?.updated_at}
                                        des={sc?.featured_image_caption}
                                        featured_image_caption={sc?.featured_image_caption}
                                    />)
                            }
                        </div>
                        <div>
                            {
                                data?.slice(1, 5).map((sc) =>
                                    <div key={sc.id} className='flex gap-4 items-center py-2 border-b-2 border-b-white'>
                                        <Image
                                            className='w-24 h-24 rounded-full border-2 border-green-500' width={96}
                                            height={96}
                                            src={`${process.env.BASE_URL}/${sc.featured_image.slice(7)}`}
                                            alt={sc?.featured_image_caption} />
                                        <h1 className='text-lg font-medium'>{sc?.title}</h1>
                                    </div>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 gap-4 bg-white p-2 mt-4'>
                        <div>
                            {
                                data?.slice(5, 6).map((sc) =>
                                    <ColumnCard
                                        key={sc.id}
                                        title={sc?.title}
                                        image={sc?.featured_image.slice(7)}
                                        date={sc?.updated_at}
                                        des={sc?.featured_image_caption}
                                        featured_image_caption={sc?.featured_image_caption}
                                    />)
                            }
                        </div>
                        <div>
                            {
                                data?.slice(6, 10).map((sc) =>
                                    <div key={sc.id} className='flex gap-4 items-center py-2 border-b-2 border-b-white'>
                                        <Image
                                            className='w-24 h-24 rounded-full border-2 border-green-500' width={96}
                                            height={96}
                                            src={`${process.env.BASE_URL}/${sc.featured_image.slice(7)}`}
                                            alt={sc?.featured_image_caption} />
                                        <h1 className='text-lg font-medium'>{sc?.title}</h1>
                                    </div>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 gap-4 bg-white p-2 mt-4'>
                        <div>
                            {
                                data?.slice(10, 11).map((sc) =>
                                    <ColumnCard
                                        key={sc.id}
                                        title={sc?.title}
                                        image={sc?.featured_image.slice(7)}
                                        date={sc?.updated_at}
                                        des={sc?.featured_image_caption}
                                        featured_image_caption={sc?.featured_image_caption}
                                    />)
                            }
                        </div>
                        <div>
                            {
                                data?.slice(11, 15).map((sc) =>
                                    <div key={sc.id} className='flex gap-4 items-center py-2 border-b-2 border-b-white'>
                                        <Image
                                            className='w-24 h-24 rounded-full border-2 border-green-500' width={96}
                                            height={96}
                                            src={`${process.env.BASE_URL}/${sc.featured_image.slice(7)}`}
                                            alt={sc?.featured_image_caption} />
                                        <h1 className='text-lg font-medium'>{sc?.title}</h1>
                                    </div>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 gap-4 bg-white p-2 mt-4'>
                        <div>
                            {
                                data?.slice(15, 16).map((sc) =>
                                    <ColumnCard
                                        key={sc.id}
                                        title={sc?.title}
                                        image={sc?.featured_image.slice(7)}
                                        date={sc?.updated_at}
                                        des={sc?.featured_image_caption}
                                        featured_image_caption={sc?.featured_image_caption}
                                    />)
                            }
                        </div>
                        <div>
                            {
                                data?.slice(16, 20).map((sc) =>
                                    <div key={sc.id} className='flex gap-4 items-center py-2 border-b-2 border-b-white'>
                                        <Image
                                            className='w-24 h-24 rounded-full border-2 border-green-500' width={96}
                                            height={96}
                                            src={`${process.env.BASE_URL}/${sc.featured_image.slice(7)}`}
                                            alt={sc?.featured_image_caption} />
                                        <h1 className='text-lg font-medium'>{sc?.title}</h1>
                                    </div>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 gap-4 bg-white p-2 mt-4'>
                        <div>
                            {
                                data?.slice(0, 1).map((sc) =>
                                    <ColumnCard
                                        key={sc.id}
                                        title={sc?.title}
                                        image={sc?.featured_image.slice(7)}
                                        date={sc?.updated_at}
                                        des={sc?.featured_image_caption}
                                        featured_image_caption={sc?.featured_image_caption}
                                    />)
                            }
                        </div>
                        <div>
                            {
                                data?.slice(1, 5).map((sc) =>
                                    <div key={sc.id} className='flex gap-4 items-center py-2 border-b-2 border-b-white'>
                                        <Image
                                            className='w-24 h-24 rounded-full border-2 border-green-500' width={96}
                                            height={96}
                                            src={`${process.env.BASE_URL}/${sc.featured_image.slice(7)}`}
                                            alt={sc?.featured_image_caption} />
                                        <h1 className='text-lg font-medium'>{sc?.title}</h1>
                                    </div>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 gap-4 bg-white p-2 mt-4'>
                        <div>
                            {
                                data?.slice(0, 1).map((sc) =>
                                    <ColumnCard
                                        key={sc.id}
                                        title={sc?.title}
                                        image={sc?.featured_image.slice(7)}
                                        date={sc?.updated_at}
                                        des={sc?.featured_image_caption}
                                        featured_image_caption={sc?.featured_image_caption}
                                    />)
                            }
                        </div>
                        <div>
                            {
                                data?.slice(1, 5).map((sc) =>
                                    <div key={sc.id} className='flex gap-4 items-center py-2 border-b-2 border-b-white'>
                                        <Image
                                            className='w-24 h-24 rounded-full border-2 border-green-500' width={96}
                                            height={96}
                                            src={`${process.env.BASE_URL}/${sc.featured_image.slice(7)}`}
                                            alt={sc?.featured_image_caption} />
                                        <h1 className='text-lg font-medium'>{sc?.title}</h1>
                                    </div>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 gap-4 bg-white p-2 mt-4'>
                        <div>
                            {
                                data?.slice(0, 1).map((sc) =>
                                    <ColumnCard
                                        key={sc.id}
                                        title={sc?.title}
                                        image={sc?.featured_image.slice(7)}
                                        date={sc?.updated_at}
                                        des={sc?.featured_image_caption}
                                        featured_image_caption={sc?.featured_image_caption}
                                    />)
                            }
                        </div>
                        <div>
                            {
                                data?.slice(1, 5).map((sc) =>
                                    <div key={sc.id} className='flex gap-4 items-center py-2 border-b-2 border-b-white'>
                                        <Image
                                            className='w-24 h-24 rounded-full border-2 border-green-500' width={96}
                                            height={96}
                                            src={`${process.env.BASE_URL}/${sc.featured_image.slice(7)}`}
                                            alt={sc?.featured_image_caption} />
                                        <h1 className='text-lg font-medium'>{sc?.title}</h1>
                                    </div>)
                            }
                        </div>
                    </div>
                </TabPanel>

            </Tabs>
            <div className='col-span-4'>
                <div className="p-2 bg-white border-2 border-x-slate-500 border-y-slate-500">
                    <h1 className="text-2xl secondary-color font-semibold border-b-2 pb-1 border-b-slate-500 mb-4">দেশের আরো খবর</h1>
                    {
                        data?.slice(0, 4).map((ct) =>
                            <Link key={ct.id} href={`/detailPage/${ct.id}`}>
                                <SmallCard
                                    title={ct?.title}
                                    image={ct?.featured_image.slice(7)}
                                    date={ct?.updated_at}
                                    featured_image_caption={ct?.featured_image_caption}
                                />
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SubCategorySection;