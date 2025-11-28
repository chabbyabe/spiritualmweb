
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../css/app.css';

export default function Header({
    currentPage = 'home',
    language = 'en'
}:  { currentPage?: string, language?: string }) {

    const [mobileOpen, setMobileOpen] = useState(false);
    const linkClass = `block px-3 rounded text-heading relative
            transition-all duration-300 ease-out
            hover:text-primary-500 hover:bg-primary-50
            after:absolute after:left-0 after:bottom-0
            after:h-[2px] after:w-full after:bg-primary-500
            after:scale-x-0 after:origin-center
            after:transition-transform after:duration-300 after:ease-out
            hover:after:scale-x-100
            md:hover:bg-transparent md:hover:text-primary-500 `;

    const navLinks = [
        { name: 'Home', href: route('home'), isActive : currentPage === 'home' },
        { name: 'Devotionals', href: route('home.devotional', { id: 'en' }), isActive : (currentPage === 'devotional' && language === 'en') },
        { name: 'Aatmeek Sandesh', href: route('home.devotional', { id: 'hi' }), isActive: currentPage === 'devotional' && language === 'hi' },
        { name: 'About', href:  route('home.about'), isActive : currentPage === 'about'},
    ];

    return (
        <header>
            <nav className="w-full bg-white bg-neutral-primary start-0 border-default">
                <div className="flex flex-wrap items-center justify-between p-5 mx-auto font-bold lg:max-w-6xl lg-px-none">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                        src="../assets/images/logo-with-name.png"
                        className="h-9"
                        alt="Logo"
                        />
                    </Link>

                    <button
                    type="button"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-expanded={mobileOpen}
                    className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                    >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M5 7h14M5 12h14M5 17h14"
                        />
                    </svg>
                    </button>

                    <div
                    className={`${mobileOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                    >
                    <ul className="flex flex-col p-4 mt-4 font-medium border md:p-0 border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
                        {navLinks.map((link) => (

                            <li key={link.href}>
                                <Link href={link.href} className={linkClass + (link.isActive ? 'text-primary-500' : 'text-gray-500')}>
                                {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}
