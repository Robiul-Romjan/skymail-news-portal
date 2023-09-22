"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../public/skymail-1.png"
import headerCard from "../../public/header_card.jpg"

const UpperNavbar = () => {
    return (
        <div className='hidden md:block'>
            <div className='secondary-background-color text-white'>
                <div className='container mx-auto'>
                    <div className='flex justify-between py-2'>
                        <p>সোমবার, ০৪ সেপ্টেম্বর ২০২৩, ২০ ভাদ্র ১৪৩০</p>
                        <div className='flex gap-4'>
                            <Link href="/"> <FaFacebook /> </Link>
                            <Link href="/"> <FaYoutube /> </Link>
                            <Link href="/"> <FaInstagram /> </Link>
                            <Link href="/"> <FaTwitter /> </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-4'>
                <div className="flex justify-between items-center">
                    <Link href="/"><Image src={logo} height={0} width={250} alt='logo' /></Link>
                    <div>
                        <Image height="auto" width="100%" src={headerCard} alt='add' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpperNavbar;