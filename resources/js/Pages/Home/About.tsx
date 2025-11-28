import { Head } from '@inertiajs/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../css/app.css';
import Header from '@/Components/Home/Header';
import MainImage from '@/Components/Home/MainImage';
import Footer from '@/Components/Home/Footer';

export default function About() {
    return (
        <>
            <Head title="About" />
            <div className="bg-gray-50 text-black/50">
                <div className="relative flex flex-col items-center justify-start min-h-screen bg-white">
                    <div className="relative w-full" >
                        <Header currentPage="about" language="en"></Header>
                        <main className="flex flex-col items-center justify-center">
                            <MainImage />
                            <div className="flex-row px-5 py-20 lg:max-w-6xl lg-px-none">
                                <h1 className="text-3xl font-bold">Who are we, and why this site?</h1>
                                <div className="py-4 leading-7">
                                  <p className="pt-4">Since a few years I received messages via WhatsApp from a dear brother from Sweden, brother Ingemar.
                                    Indirectly I have known him for a long time, but since a year our friendship really was established and we had regular contact.
                                    As I have been indirectly part of his ministry in the past and we share the same mission field (Suriname), it was as if we knew each other for a long time and that in itself was a blessing.
                                  </p>

                                  <p className="py-4">After some time I noticed it was hard to find his messages again and sometimes they were even inaccessible.
                                    So due to this inconvenience the desire was growing to listen to these messages seamlessly and with less effort.
                                    Then I realized that a website with all the messages collected would make it not only more convenient but would also enlarge the availability of these messages to literally everyone on this planet that has access to the internet.
                                  </p>

                                  <p>These messages were freely given under the anointing and by inspiration of the Holy Spirit and thus we feel blessed to obey Gods Word
                                    saying that it is freely given to us and so we should share and give freely.
                                    Still we would like to be accountable and also hear from you if you have questions, concerns, prayer requests or a message of edification.
                                  </p>

                                  <p className="py-4">
                                    We hope that these messages will exhort, edify, encourage and build up you in the knowledge and love
                                    and power of Yeshua HaMashiach (Jesus the Christ or Anointed One)
                                  </p>

                                    <p> Ruurd Sieffers </p>

                                    <p>
                                        <a href="mailto:info@spiritualmaturity.nl" target="_blank" rel="noreferrer noopener"
                                        className="underline underline-offset-4 text-primary-500 hover:text-primary-400">info@spiritualmaturity.nl</a></p>
                                </div>

                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
