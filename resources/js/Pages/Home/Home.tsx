import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../css/app.css';
import PrimaryButton from '@/Components/PrimaryButton';
import SwiperComponent from '@/Components/SwiperContainer';
import Header from '@/Components/Home/Header';
import MainImage from '@/Components/Home/MainImage';
import Footer from '@/Components/Home/Footer';

export default function Home() {

    const slideItems = [
        {
            id: 1,
            title: 'Slide One',
            description: 'This is the first slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
        {
            id: 2,
            title: 'Slide Two',
            description: 'This is the second slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
        {
            id: 3,
            title: 'Slide Three',
            description: 'This is the third slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
        {
            id: 4,
            title: 'Slide Four',
            description: 'This is the third slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
    ];

    return (
        <>
            <Head title="Home" />
            <div className="bg-gray-50 text-black/50">
                <div className="relative flex flex-col items-center justify-start min-h-screen bg-white">
                    <div className="relative w-full" >
                        <Header currentPage="home" language="en"></Header>
                        <main className="flex flex-col items-center justify-center">
                            <MainImage />
                            <div className="flex-row px-5 py-20 lg:max-w-6xl lg-px-none">
                                <h1 className="text-3xl font-bold">Welcome Message</h1>
                                <div className="py-4 leading-7">
                                  <p className="pt-4">”Until we all attain to the unity of the faith, and of the knowledge of the Son of God, to a mature man,
                                        to the measure of the stature which belongs to the fullness of Christ.”
                                        <em>
                                            <mark>
                                                <a href="https://www.biblegateway.com/passage/?search=Ephesians%204%3A13&amp;version=NASB" target="_blank" rel="noreferrer noopener" className="underline hover:text-primary-400">(Eph.4:13)
                                                </a>
                                            </mark>
                                        </em>
                                        &nbsp; Never in human history has there been a greater need than now of mature Christian men and women: Christ-filled and Christ-like, who “know the truth” and live a true Christian life  &nbsp;
                                        <em>
                                            <mark>
                                                <a href="https://www.biblegateway.com/passage/?search=Jn.8%3A31-32&amp;version=NASB" target="_blank" rel="noreferrer noopener" className="underline hover:text-primary-400">(Jn.8:31-32)
                                                </a>
                                            </mark>
                                        </em>
                                        &nbsp; and consequently shine “as lights in the midst of a crooked and perverse generation”
                                        <mark>
                                            <em>
                                                <a href="https://www.biblegateway.com/passage/?search=Phil.2%3A15&amp;version=NASB" target="_blank" rel="noreferrer noopener" className="underline hover:text-primary-400">(Phil.2:15)
                                                </a>
                                            </em>
                                        </mark>.
                                    </p>

                                    <p className="py-3">
                                        Never have deception and perversion been more rampant than in our days and will continue to increase, until the most perverse man ever will appear on the scene and deceive the whole world  &nbsp;
                                        <em>
                                            <mark>
                                                <a href="https://www.biblegateway.com/passage/?search=2+Thess.2%3A3-12&amp;version=NASB" target="_blank" rel="noreferrer noopener" className="underline hover:text-primary-400">(2 Thess.2:3-12</a>;
                                                <a href="https://www.biblegateway.com/passage/?search=Rev.12%3A9&amp;version=NASB" target="_blank" rel="noreferrer noopener" className="underline hover:text-primary-400">Rev.12:9</a>)
                                            </mark>
                                        </em>
                                        . Therefore, we must “receive the love of the truth”, so that we will truly “know God” in a deep, personal way, display strength and take action” in the last days  &nbsp;
                                         <mark>
                                            <em>
                                                <a href="https://www.biblegateway.com/passage/?search=Rev.12%3A9&amp;version=NASB" target="_blank" rel="noreferrer noopener" className="underline hover:text-primary-400">(Dan.11:32)</a>
                                            </em>
                                        </mark>.
                                        </p>
                                    <p>
                                        The purpose of these devotional messages is to be a tool for the Spirit of Truth to “guide you into all the truth”: not into an abstract, theoretical knowledge, but into an intimate, personal relationship with Jesus Christ, where the Holy Spirit can reveal Him to you personally  &nbsp;
                                        <mark>
                                            <em>
                                                <a href="https://www.biblegateway.com/passage/?search=Jn.16%3A13-14&amp;version=NASB" target="_blank" rel="noreferrer noopener" className="underline hover:text-primary-400 ">(Jn.16:13-14</a>)
                                            </em>
                                        </mark>
                                        . That´s why we call them “devotional messages” because the goal is for you to be devoted to the Person of Jesus Christ, not to any doctrine or teaching about Him. In a personal love-relationship with Christ the Holy Spirit will continue to reveal the beauty of His glorious Person so that you will be “transformed into His image from glory to glory”  &nbsp;
                                        <mark>
                                            <em>
                                                <a href="https://www.biblegateway.com/passage/?search=2+Cor.3%3A18&amp;version=NASB" target="_blank" rel="noreferrer noopener" className="underline hover:text-primary-400 ">(2 Cor.3:18)</a>
                                            </em>
                                        </mark> &nbsp;.
                                    </p>
                                </div>

                            </div>

                            <div className="flex flex-col items-center w-full px-5 py-20 bg-gray-100 lg:max-w-6xl lg-px-none">
                                <h1 className="text-3xl font-bold pb-7">Latest devotionals English</h1>

                                <SwiperComponent slides={slideItems} isGrid={false} />
                                <PrimaryButton className="mt-8">Show All English devotionals</PrimaryButton>
                            </div>

                            <div className="flex flex-col items-center w-full px-5 py-20 lg:max-w-6xl lg-px-none">
                                <h1 className="text-3xl font-bold pb-7">Latest devotionals Hindi</h1>

                                <SwiperComponent slides={slideItems} isGrid={false} />
                                <PrimaryButton className="mt-8">Show All Hindi devotionals</PrimaryButton>

                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
