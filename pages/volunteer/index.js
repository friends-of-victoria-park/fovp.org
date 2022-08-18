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
			<div className="relative w-full h-screen min-h-[90rem] bg-[url('/VP_BOARD_BACK.jpg')] bg-cover bg-center">
				<div className="py-8 text-center text-4xl text-white font-bold">
					Meet our Board of Directors    
				</div>
				<div className="grid grid-cols-1 gap-4 content-center place-items-center">
					<PeopleCard name='Mike Evoy' position='Chair'/>
					<PeopleCard name='Jeremy Earle' position='Lantern Festival Lead'/>
					<PeopleCard name='Ramona Cole' position='Director'/>
					<PeopleCard name='Lori Lynn Earle' position='Director'/>
				</div>
				<div className="grid grid-cols-1 gap-4 content-center place-items-center pt-6 px-4">
					<div className="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Get Involved</h5>
						<div className="font-normal text-gray-700 drop-shadow-lg"> 
							If you are interested in becoming apart of our wonderful organization send us an email @------------
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
