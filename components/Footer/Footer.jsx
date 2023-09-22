"use client"
import Image from 'next/image';
import React from 'react';
import logo from "../../public/skymail-1.png"

const Footer = () => {
    return (
        <div className='mb-12'>
            <footer className="footer p-10 bg-black text-white">
                <aside>
                   <Image src={logo} height={0} width={200} alt='Logo' />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav cl>
                    <header className="footer-title">Services</header>
                    <p className="link link-hover">Branding</p>
                    <p className="link link-hover">Design</p>
                    <p className="link link-hover">Marketing</p>
                    <p className="link link-hover">Advertisement</p>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <p className="link link-hover">About us</p>
                    <p className="link link-hover">Contact</p>
                    <p className="link link-hover">Jobs</p>
                    <p className="link link-hover">Press kit</p>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <p className="link link-hover">Terms of use</p>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Cookie policy</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;