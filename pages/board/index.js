/* ./pages/index.js               */
import Head from 'next/head';
import Image from 'next/image';
import {PeopleCard} from '../../components/PeopleCard';
import BackgroundImage from '../../public/FOVP_UPSCALE.png';

export default function Board() {
  return (
    <div>
        <Head>
            <title>Board of Directors - Friends of Victoria Park</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <div class="relative w-full h-screen min-h-[40rem] bg-[url('/VP_BOARD_BACK.jpg')] bg-cover bg-center">
            <div class="py-8 text-center text-4xl text-white font-bold">
                Meet our Board of Directors    
            </div>
            <div class="grid grid-cols-2 gap-4 content-center place-items-center">
                <PeopleCard name='Mike Evoy' position='Chair'/>
                <PeopleCard name='Jeremy Earle' position='Lantern Festival Lead'/>
                <PeopleCard name='Ramona Cole' position='Director'/>
                <PeopleCard name='Lori Lynn Earle' position='Director'/>
                <PeopleCard name='Craig Pollet' position='Director'/>
            </div>
            <div class="grid grid-cols-1 gap-4 content-center place-items-center pt-6">
                <div class="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Get Involved</h5>
                    <div class="font-normal text-gray-700 drop-shadow-lg"> 
                        If you are interested in becoming apart of our wonderful organization send us an email @------------
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}