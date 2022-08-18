/* ./pages/index.js               */
import Head from 'next/head';
import Image from 'next/image';
import {PeopleCard} from '../../components/PeopleCard';
import BackgroundImage from '../../public/FOVP_UPSCALE.png';

export default function About() {
  return (
    <div>
        <Head>
            <title>About - Friends of Victoria Park</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <div class="relative w-full h-screen min-h-[40rem] bg-[url('/VP_BOARD_BACK.jpg')] bg-cover bg-center">
            <div class="py-8 text-center text-4xl text-white font-bold">
                About Us 
            </div>
            <div class="grid grid-cols-1 gap-4 content-center place-items-center pt-6">
                <div class="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Formed in 1998</h5>
                    <div class="font-normal text-gray-700 drop-shadow-lg"> 
                        The Friends of Victoria Park (FOVP), are a concerned group of West End residents and community members who came together in May 1998 as a result of the closure of the swimming pool in Victoria Park. Through the summer of 1998, the Friends to worked closely with the city on a number of Park projects: overseeing a successful summer recreation programme and, the installation of new playground equipment (a donation from Saturn and Hickman Motors). Our goal is to ensure that Victoria Park regains and retains its historical place as a vibrant, safe, and enjoyable environment for all residents and visitors.
                    </div>
                </div>
                <div class="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">People who love the Park</h5>
                    <div class="font-normal text-gray-700 drop-shadow-lg"> 
                        The FOVP are people who know and love Victoria Park. Some of us live close by and spend time in the park with friends and family. Other friends are involved because they are attached to the very special features of this park: its beauty; its marvelous history; the lively industrial past of the neighbourhood surrounding it; or, Victoria Park's strong sporting tradition. All of us are dedicated to making the future of this park bright, and you should count yourself amongst the Friends if you believe as we do, in the potential of Victoria Park.
                    </div>
                </div>
                <div class="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Support</h5>
                    <div class="font-normal text-gray-700 drop-shadow-lg"> 
                        What you see happening in Victoria Park recently and since the formation of the FOVP is only possible through the support of our partners and our Friends. The FOVP would like to thank some of our Friends, the Samuel and Saidye Bronfman Foundation's Urban Issues Program for its support of $90,000 over 3 years (July 1999 - August 2002), the City of St. John's for its annual grant, the Provincial and Federal Governments for their contributions, and many others including volunteers who are helping revitalize our park.
                    </div>
                </div>
                <div class="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Our Mission</h5>
                    <div class="font-normal text-gray-700 drop-shadow-lg"> 
                    To take a lead role in ensuring that Victoria Park retains its historic place as a vibrant, safe and enjoyable environment for use by the neighbourhood and City residents.
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}