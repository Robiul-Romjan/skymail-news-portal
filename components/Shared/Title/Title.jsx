"use client"
import Link from 'next/link';
import React from 'react';
import { FaForward, FaRightFromBracket } from 'react-icons/fa6';

const Title = ({title, category_id}) => {
    return (
        <div className='primary-background-color md:mt-12 mt-8 px-3 py-2 flex justify-between items-center'>
            <div className="animate-charcter text-3xl"><span className='flex gap-4 items-center'>{title} <FaForward className='secondary-color' /></span> </div>
            <Link className='text-white flex items-center text-lg font-semibold gap-2 px-3 py-1 bg-rose-500 rounded-sm' href={`/categoryPage/${category_id}`}>আরো পড়ুন <FaRightFromBracket /></Link>
        </div>
    );
};

export default Title;