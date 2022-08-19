import Head from 'next/head';
import {PeopleCard} from '../../components/PeopleCard';
import BackgroundImage from '../../public/FOVP_UPSCALE.png';

export default function Volunteer() {
	return (
		<div>
			<Head>
				<title>Board of Directors - Friends of Victoria Park</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className="relative w-full h-[40rem]">
				<div className="w-full h-full bg-[url('/VP_BOARD_BACK.jpg')] bg-cover bg-center " />
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
					<h1 className="mt-5 text-center text-4xl text-white font-semibold drop-shadow-lg">
						Come volunteer with us!
					</h1>
					<div className="mt-5 text-center text-1xl text-white drop-shadow-lg block p-6 max-w-4xl rounded-lg border shadow-md bg-gray-800 border-gray-700"> 
						The Friends of Victoria Park is an organization built on the hard work of our dedicated volunteers! Our volunteers do everything from help out during the day of the Lantern Festival to helping make sure the organization runs smoothly as one of our Board of Directors.
					</div>
				</div>
			</div>
			<div className="relative w-full bg-blue-100 grid grid-cols-1 gap-4 content-center place-items-center">
				<div className="py-8 text-center text-4xl text-black font-bold">
					Meet our Board of Directors    
				</div>
				<div className="grid grid-cols-1 gap-4 content-center place-items-center">
					<PeopleCard name='Mike Evoy' position='Chair'/>
					<PeopleCard name='Jeremy Earle' position='Lantern Festival Lead'/>
					<PeopleCard name='Ramona Cole' position='Director'/>
					<PeopleCard name='Lori Lynn Earle' position='Director'/>
				</div>
				<div className="grid grid-cols-1 gap-4 content-center place-items-center py-6 px-4">
					<div className="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Get Involved</h5>
						<div className="font-normal text-gray-700 drop-shadow-lg"> 
							If you are interested in becoming apart of our wonderful organization send an email to contact@fovp.org
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
