import Image from "next/image";
import Link from "next/link";
import logo from "../../public/skymail-1.png"
import { FaSistrix } from "react-icons/fa";



const Navbar = async () => {


    const navList = <>
        <li className="font-medium text-lg">
            <Link href="/">হোম</Link>
        </li>
        <li className="font-medium text-lg">
            <Link href="/categoryPage/18">জাতীয়</Link>
        </li>
        <li className="font-medium text-lg">
            <Link href="/categoryPage/23">ডেঙ্গু</Link>
        </li>
        <li className="font-medium text-lg">
            <Link href="/categoryPage/24">সারাদেশ</Link>
        </li>
        <li className="font-medium text-lg">
            <Link href="/categoryPage/26">রাজধানী</Link>
        </li>
        <li className="font-medium text-lg">
            <Link href="/categoryPage/20">আন্তর্জাতিক</Link>
        </li>
        <li className="font-medium text-lg">
            <Link href="/categoryPage/28">বিনোদন</Link>
        </li>
        <li className="font-medium text-lg">
            <Link href="/categoryPage/30">খেলা</Link>
        </li>
        <li className="font-medium text-lg">
            <Link href="/categoryPage/38">লাইফস্টাইল</Link>
        </li>
        <li className="font-medium text-lg">
            <Link href="/categoryPage/41">ধর্ম</Link>
        </li> 
    </>
    return (
        <div className="sticky top-0 primary-background-color z-50">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navList}
                            </ul>
                        </div>
                        <Link className="md:hidden" href="/"><Image className="h-[60px] w-[120px]" height={0} width={0} src={logo} alt="logo" /></Link>
                    </div>
                    <div className="navbar-center hidden text-white lg:flex">
                        <ul className="gap-4 menu-horizontal px-1">
                            {navList}
                            
                        </ul>
                    </div>
                    

                        <div className="navbar-end relative">
                         <input className="absolute hidden right-16 w-full" type="text" />
                             <button className="btn btn-circle btn-outline">
                                <span className="">
                                    <FaSistrix />
                                </span>
                            </button>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;