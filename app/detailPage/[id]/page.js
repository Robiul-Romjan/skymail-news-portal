import { base_url } from '@/api/Base_Url';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
    const singleNews = await axios.get(`${base_url}/api/news/details/${params.id}`)

    return (
        <div className="container mx-auto">
            <div className='grid grid-cols-12 mt-8'>
                <div className='col-span-8'>
                    <h2 className="text-3xl">{singleNews.data.title}</h2>
                    <Image className='w-full' width={200} height={100} src={`https://bucket.barta24.com/uploads/news/2020/Jan/26/1580048911773.jpg`} alt='top Image' />
                    <p className='text-lg text-justify'>‘তিনটি পণ্যের মূল্য বেধে দিয়ে কোনো লাভ হবে না, দ্রব্যমূল্য নিয়ন্ত্রণে সরকার সম্পূর্ণভাবে ব্যর্থ হয়েছে। দ্রব্যমূল্য সহনীয় পর্যায়ে রাখতে আমি ব্যবস্থা নিয়েছিলাম। যখন বেড়েছে, তখন জনগণ জানতো যে বেড়েছে। যখম কমেছে বা কমা উচিত ছিল তখনও তা জনগণ জেনেছে। তখন মানুষের আস্থা ছিল।’

                        শুক্রবার (১৫ সেপ্টেম্বর) বেলা পৌনে ১টায় রংপুর নগরীর দর্শনাস্থ পল্লী নিবাসে জাতীয় পার্টির প্রতিষ্ঠাতা ও সাবেক রাষ্ট্রপতি হুসেইন মুহম্মদ এরশাদের কবর জিয়ারত শেষে সাংবাদিকদের একথা বলেন জাতীয় পার্টির চেয়ারম্যান জিএম কাদের।

                        জি এম কাদের বলেন, ‘আমার মনে হয় বাণিজ্য মন্ত্রণালয় সম্পূর্ণভাবে ব্যর্থ হয়েছে। সরকার সম্পূর্ণভাবে দ্রব্যমূল্য নিয়ন্ত্রণে ব্যর্থ হয়েছে। এখন নানান অজুহাত দিয়ে দাম একেবারেই নিয়ন্ত্রণহীন করা হচ্ছে।’

                        তিনি বলেন, ‘এখন বিশ্ববাজারের চেয়ে আমাদের দেশে পণ্যের দাম অনেক অনেক বেশি। এমনকি শ্রীলঙ্কা- যেটাকে আমরা ব্যর্থ রাষ্ট্র বলেছিলাম, যারা ঘোষণা দিয়ে দেউলিয়া হয়ে গেছে। আর পাকিস্তান যেটাও ব্যর্থ রাষ্ট্রের মতো ঘোষণা হয়ে গেছে। যাকে আমরা খারাপের উদাহরণ হিসেবে সব সময়ে বলে থাকি। তারাও আমাদের চেয়ে দ্রব্যমূল্য নিয়ন্ত্রণে অনেকে অনেক ভালো অবস্থানে আছে। তাদের দেশে নিত্যপণ্যের দাম আমাদের চেয়ে অনেক কম। বিশ্ববাজারের তুলনায় এখন আমাদের দেশের পণ্যে মূল্য অনেক অনেক বেশি।’

                        সরকারিভাবে তিন পণ্যের দাম বেধে দেয়া প্রসঙ্গে সাবেক এই বাণিজ্যমন্ত্রী বলেন, ‘দাম যেটা বেধে দেয়া হয়েছে, আমি মনে করি এটা কখনোই সফল হওয়া সম্ভব নয়। দাম বেধে দেয়ার একটা নিয়ম ছিল, কতটুকু দাম রিজেনবেল হতে পারে। হিসাব-নিকাশ করে সেটা জানানো হয়। রিজেনবলের বাইরে কেউ নিলে একটা শাস্তিমূলক ব্যবস্থা নিতে হয়। রিজেনবেল যেটাকে বলা হবে তা যুক্তিসঙ্গত দাম। সেটার জন্য অনেক পরিশ্রম করতে হয়, যথেষ্ট ঘাটঘাটি করতে হয়, ডাটা নিতে হয়, ইভেন ডিমান্ড অ্যান্ড সাপ্লাইয়ের ওপর তা নির্ধারণ হয়। যদি সেটা ঠিক না থাকে, তাহলে আমি যতই চাপাচাপি করি এটা স্বাভাবিকভাবে ঠিক হবে না।’

                        যাছাই-বাছাই না করেই তিন পন্যের দাম বেধে দেয়া হয়েছে উল্লেখ করে জি এম কাদের বলেন, ‘ওনারা এসব যাচাই-বাছাই করেছেন কি-না আমি জানি না। আমার সন্দেহ, এটা ওনারা করেননি। সঠিকভাবে না বুঝেই কিছু একটা দাম নির্ধারণ করেছেন। প্রয়োজন সাপ্লাই ঠিক রাখা। রিজেনবেল প্রাইজ দাও। প্রাইজ ততটুকু নিচে নামাও ঠিক নয়, যাতে ব্যবসায়ীরা লোকসান করবে। আবার বেশি হওয়ায় ঠিক নয়, তাতে ব্যবাসীয়ারা অধিক মুনাফা করবে এবং জনগণ সাফার করবে। এটা দেখার যাদের দায়িত্ব তারা সঠিকভাবে করছেন বলে আমার মনে হচ্ছে না। এ কারণে দ্রব্যমূল্য নিয়ন্ত্রিত হচ্ছে না। আমার সময়ে এটা রিফলেকশন হতো। কিন্তু এখন তারা জিনিসটাকে সঠিকভাবে হ্যান্ডেল করতে পারছে না।’</p>
                </div>
                <div className='col-span-4'></div>
            </div>
        </div>
    );
};

export default page;