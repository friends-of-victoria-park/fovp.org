/* ./pages/index.js               */
import Head from 'next/head';
import Image from 'next/image';
import {ContactForm} from '../../components/ContactForm';
import BackgroundImage from '../../public/FOVP_UPSCALE.png';

export default function Contact() {
  return (
    <div>
        <Head>
            <title>Contact - Friends of Victoria Park</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <div class="relative w-full h-screen min-h-[40rem] bg-[url('/VP_BOARD_BACK.jpg')] bg-cover bg-center">
            <div class="py-8 text-center text-4xl text-white font-bold">
                Contact Us
            </div>
            <div class="grid grid-cols-1 gap-4 content-center place-items-center pt-6">
                <div class="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md">
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
  );
}