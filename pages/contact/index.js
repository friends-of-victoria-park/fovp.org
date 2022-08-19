import Head from 'next/head';
import {ContactForm} from '../../components/ContactForm';
import BackgroundImage from '../../public/FOVP_UPSCALE.png';

export default function Contact() {
	return (
		<div>
			<Head>
				<title>Contact - Friends of Victoria Park</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className="relative w-full min-h-screen  bg-[url('/VP_BOARD_BACK.jpg')] bg-cover bg-center">
				<div className="py-8 text-center text-4xl text-white font-bold">
					Contact Us
				</div>
				<div className="grid grid-cols-1 gap-4 content-center place-items-center py-6 px-4">
					<div className="block p-6 max-w-4xl md:w-[30rem] bg-white rounded-lg border border-gray-200 shadow-md">
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}
