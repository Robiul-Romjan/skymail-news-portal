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
import Section_1 from '@/components/Sections/Section_1';
import Section_2 from '@/components/Sections/Section_2';
import Section_3 from '@/components/Sections/Section_3';
import Section_4 from '@/components/Sections/Section_4';
import Section_5 from '@/components/Sections/Section_5';

const page = async () => {
    const res = await axios.get(`${base_url}/api/home`)
    return (
        <>
            <Section_1 data={res?.data?.featured_posts} />
            <Section_2 data={res?.data?.featured_posts} />
            <Section_3 data={res?.data?.featured_posts} />
            <Section_4 data={res?.data?.featured_posts} />
            <Section_5 data={res?.data?.top_videos} />
        </>
    );
};

export default page;