import { base_url } from '@/api/Base_Url';
import React from 'react';
import Section_1 from '@/components/Sections/Section_1';
import Section_2 from '@/components/Sections/Section_2';
import Section_3 from '@/components/Sections/Section_3';
import Section_4 from '@/components/Sections/Section_4';
import Section_5 from '@/components/Sections/Section_5';
import SubCategorySection from '@/components/Sections/SubCategorySection';

const page = async () => {
    const res = await fetch(`${base_url}/api/home`)
    const data = await res.json()
    // console.log(data)
    const todaysNews = await fetch(`${base_url}/api/todays-news`)
    const todaysNewsData = await todaysNews.json()


    return (
        <>
            <Section_1 data={data?.featured_posts} />
            <Section_2 data={data?.featured_posts} />
            <Section_3 data={data?.featured_posts} />
            <Section_4 data={data?.featured_posts} />
            <SubCategorySection data={todaysNewsData} />
            <Section_5 data={data?.top_videos} />
        </>
    );
};

export default page;