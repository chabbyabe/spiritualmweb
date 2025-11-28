import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../css/app.css';
import PrimaryButton from '@/Components/PrimaryButton';
import SwiperComponent from '@/Components/SwiperContainer';
import Header from '@/Components/Home/Header';
import MainImage from '@/Components/Home/MainImage';
import Footer from '@/Components/Home/Footer';

export default function Devotional({
    language,
}: PageProps<{ language: string }>) {

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
            title: 'Slide One',
            description: 'This is the first slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
        {
            id: 5,
            title: 'Slide Two',
            description: 'This is the second slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
        {
            id: 6,
            title: 'Slide Three',
            description: 'This is the third slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
                {
            id: 7,
            title: 'Slide One',
            description: 'This is the first slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
        {
            id: 8,
            title: 'Slide Two',
            description: 'This is the second slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
        {
            id: 9,
            title: 'Slide Three',
            description: 'This is the third slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
                {
            id: 10,
            title: 'Slide One',
            description: 'This is the first slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
        {
            id: 11,
            title: 'Slide Two',
            description: 'This is the second slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
        {
            id: 12,
            title: 'Slide Three',
            description: 'This is the third slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
        {
            id: 13,
            title: 'Slide Three',
            description: 'This is the third slide',
            imageUrl: '../assets/images/sunset-scaled.jpg',
        },
    ];

    const translations = language == 'en' ?
        {
            "title" : "Devotionals",
            "verse" : "Colossians 3:16",
            "content" : "Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord."
        } :
        {
            "title" : "Aatmeek sandesh",
            "verse" : "स्वागत संदेश",
            "content" : `“जब तक कि हम सब के सब विश्वास, और परमेश्वर के पुत्र की पहिचान में एक न हो जाएं, और एक सिद्ध मनुष्य न बन जाएं और मसीह के पूरे डील डौल तक न बढ़ जाएं।” (इफ.4:13)

                        मानव इतिहास में पहले कभी भी परिपक्व मसीही पुरुषों और महिलाओं की इतनी अधिक आवश्यकता नहीं हुई है जितनी हमारे दिनों में है, अर्थात मसीह से भरे और मसीह-जैसे जन, जो “सत्य को जानते हैं” और एक सच्चे मसीही जीवन जीते हैं (यूह.8:31-32) और परिणामस्वरूप “टेढ़े और हठीले लोगों के बीच जगत में जलते दीपकों की नाईं दिखाई देते हैं” (फिल.2:15)।

                        हमारे दिनों की तुलना में कभी भी धोखे और विकृति अधिक उग्र नहीं हुई है और यह तब तक बढ़ती रहेगी, जब तक कि सबसे विकृत व्यक्ति कभी भी दृश्य पर दिखाई नहीं देगा और पूरी दुनिया को धोखा देगा (2 थिस्स.2:3-12; प्रक.12: 9)। इसलिए, हमें “सत्य के प्रेम को ग्रहण” करना चाहिए, ताकि हम वास्तव में परमेश्वर को गहराई से, व्यक्तिगत रूप से जान सकें, और “हियाव बान्धकर बड़े काम करेंगे” अंतिम दिनों में (दान.11:32)।

                        इन आध्यात्मिक संदेशों का उद्देश्य सत्य की आत्मा के लिए एक उपकरण होना चाहिए “आपको सभी सत्य में मार्गदर्शन करने के लिए”(यूह.16:13-14): एक सैद्धांतिक “सिर-ज्ञान” में नहीं, बल्कि यीशु मसीह के साथ एक अंतरंग, व्यक्तिगत संबंध में।

                        मसीह के साथ इस संबंध में, पवित्र आत्मा आपके लिए व्यक्तिगत रूप से उसके शानदार व्यक्ति की सुंदरता को उजागर करना जारी रखेगा ताकि आप “उसी तेजस्वी रूप में अंश अंश कर के बदलते” जाओगे (2 कुर.3:18)।`
        };

    return (
        <>
            <Head title="Devotionals" />
            <div className="bg-gray-50 text-black/50">
                <div className="relative flex flex-col items-center justify-start min-h-screen bg-white">
                    <div className="relative w-full" >
                        <Header currentPage="devotional" language={language}></Header>
                        <main className="flex flex-col items-center justify-center">
                            <MainImage />
                            <div className="flex-row px-5 py-20 lg:max-w-6xl lg-px-none">
                                <h1 className="text-3xl font-bold">{translations['title']}</h1>
                                <div className="py-4 leading-7">
                                  <h3 className="pt-4 text-xl font-bold">{translations['verse']} </h3>
                                  <p className="pt-4">{translations['content']} </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center w-full px-5 pb-20 lg:max-w-6xl lg-px-none">
                                <SwiperComponent slides={slideItems} isGrid={true} />
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
