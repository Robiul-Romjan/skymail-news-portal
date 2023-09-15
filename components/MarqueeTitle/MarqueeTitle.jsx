import React from 'react';
import Marquee from "react-fast-marquee";
import axios from "axios"
import { base_url } from '@/api/Base_Url';


const MarqueeTitle = async () => {
  const res = await axios.get(`${base_url}/api/home`)
  return (
    <div className='flex items-center'>
      <button className='px-4 py-3 font-semibold text-white bg-sky-500'>শিরোনাম</button>
      <Marquee className="text-white" speed={100} pauseOnHover>
        {
          res.data?.featured_posts.map((ct) => <p className='px-2' key={ct.id}>{ct.title} | </p>)
        }
      </Marquee>
    </div>
  );
};

export default MarqueeTitle;