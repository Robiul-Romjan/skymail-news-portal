
import React from 'react';
import Title from '../Shared/Title/Title';
import Link from 'next/link';
import ColumnCard from '../ColumnCard/ColumnCard';

const Section_2 = ({ data }) => {
    return (
        <>
            <Title title=" টপ নিউজ" category_id={24} />
            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 md:mt-8 mt-4'>
                {
                    data?.slice(0, 4).map((ts) =>
                        <Link key={ts?.id} href={`/detailPage/${ts?.id}`} >
                            <ColumnCard
                                title={ts?.title}
                                image={ts.featured_image}
                                date={ts?.updated_at}
                                des={ts?.featured_image_caption}
                                featured_image_caption={ts?.featured_image_caption}
                            />
                        </Link>)
                }
            </div>
        </>
    );
};

export default Section_2;