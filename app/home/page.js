import { base_url } from '@/api/Base_Url';
import axios from 'axios';
import React from 'react';
import Section_1 from '@/components/Sections/Section_1';
import Section_2 from '@/components/Sections/Section_2';
import Section_3 from '@/components/Sections/Section_3';
import Section_4 from '@/components/Sections/Section_4';
import Section_5 from '@/components/Sections/Section_5';
import SubCategorySection from '@/components/Sections/SubCategorySection';

const page = async () => {
    const res = await axios.get(`${base_url}/api/home`)
    const todaysNews = await axios.get(`${base_url}/api/todays-news`)
    return (
        <>
            <Section_1 data={res?.data?.featured_posts} />
            <Section_2 data={res?.data?.featured_posts} />
            <Section_3 data={res?.data?.featured_posts} />
            <Section_4 data={res?.data?.featured_posts} />
            <SubCategorySection data={todaysNews?.data} />
            <Section_5 data={res?.data?.top_videos} />
        </>
    );
};

export default page;