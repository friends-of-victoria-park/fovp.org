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
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdzfrQZY418QtGVI-c0w7XdKOyZleY0DHbsxcINgS19L2TviA/viewform?embedded=true" width="85%" height="3592" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
			</div>
		</div>
	);
}
