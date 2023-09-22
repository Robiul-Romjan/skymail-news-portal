import React from 'react';
import Marquee from "react-fast-marquee";
import { base_url } from '@/api/Base_Url';
import Link from 'next/link';


const MarqueeTitle = async () => {
  const res = await fetch(`${base_url}/api/home`)
  const data = await res.json()

  return (
    <div className='flex items-center bg-white'>
      <button className='px-4 py-3 font-semibold text-white bg-sky-500'>শিরোনাম</button>
      <Marquee className="text-black" speed={80} pauseOnHover>
        {
          data?.featured_posts.map((ct) => <Link href={`/detailPage/${ct.id}`} className='px-2' key={ct.id}>{ct.title} | </Link>)
        }
      </Marquee>
    </div>
  );
};

export default MarqueeTitle;