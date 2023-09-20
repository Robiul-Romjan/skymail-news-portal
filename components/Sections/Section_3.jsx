import React from 'react';
import Title from '../Shared/Title/Title';
import LargeHomeCard from '@/app/home/HomeCard/LargeHomeCard';
import MediumHomeCard from '@/app/home/HomeCard/MediumHomeCard';
import Link from 'next/link';

const Section_3 = ({ data }) => {
    return (
        <div>
            <Title title={"আন্তর্জাতিক"} />
            <div className='grid md:grid-cols-2 gap-4 mt-4 md:mt-8'>
                <div>
                    {
                        data?.slice(0, 1).map((ct) =>
                            <Link key={ct.id} href={`/detailPage/${ct.id}`}>
                                <div>
                                    <LargeHomeCard
                                        title={ct.title}
                                        image={ct?.featured_image}
                                        date={ct?.updated_at}
                                        author={ct?.author}
                                        featured_image_caption={ct?.featured_image_caption}
                                    />
                                </div>
                            </Link>)
                    }
                </div>
                <div>
                    <div className='grid md:grid-cols-2 gap-4'>
                        {
                            data?.slice(1, 6).map((ct) =>
                                <Link key={ct.id} href={`/detailPage/${ct.id}`}>
                                    <div>
                                        <MediumHomeCard
                                            title={ct.title}
                                            image={ct?.featured_image}
                                            date={ct?.updated_at}
                                            author={ct?.author}
                                            featured_image_caption={ct?.featured_image_caption}
                                        />
                                    </div>
                                </Link>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section_3;