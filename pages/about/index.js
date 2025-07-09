import Head from 'next/head';
import {PeopleCard} from '../../components/PeopleCard';
import {InfoCard} from '../../components/InfoCard';
import BackgroundImage from '../../public/FOVP_UPSCALE.png';

export default function About() {
	return (
		<div>
			<Head>
				<title>About - Friends of Victoria Park</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className="relative w-full bg-[url('/VP_BOARD_BACK.jpg')] bg-cover bg-center">
				<div className="py-8 text-center text-4xl text-white font-bold">
					About us
				</div>
				<div className="px-4 grid grid-cols-1 gap-4 content-center place-items-center py-6">
					<InfoCard subject="Formed in 1998" body="The Friends of Victoria Park (FOVP), are a concerned group of West End residents and community members who came together in May 1998 as a result of the closure of the swimming pool in Victoria Park. Through the summer of 1998, the Friends to worked closely with the city on a number of Park projects: overseeing a successful summer recreation programme and, the installation of new playground equipment (a donation from Saturn and Hickman Motors). Our goal is to ensure that Victoria Park regains and retains its historical place as a vibrant, safe, and enjoyable environment for all residents and visitors." />
					<InfoCard subject="People who love the Park" body="The FOVP are people who know and love Victoria Park. Some of us live close by and spend time in the park with friends and family. Other friends are involved because they are attached to the very special features of this park: its beauty; its marvelous history; the lively industrial past of the neighbourhood surrounding it; or, Victoria Park's strong sporting tradition. All of us are dedicated to making the future of this park bright, and you should count yourself amongst the Friends if you believe as we do, in the potential of Victoria Park." />
					<InfoCard subject="Support" body="What you see happening in Victoria Park recently and since the formation of the FOVP is only possible through the support of our partners and our Friends. The FOVP would like to thank some of our Friends, the Samuel and Saidye Bronfman Foundation's Urban Issues Program for its support of $90,000 over 3 years (July 1999 - August 2002), the City of St. John's for its annual grant, the Provincial and Federal Governments for their contributions, and many others including volunteers who are helping revitalize our park." />
					<InfoCard subject="Support" body="To take a lead role in ensuring that Victoria Park retains its historic place as a vibrant, safe and enjoyable environment for use by the neighbourhood and City residents." />
					<InfoCard subject="Board of Directors" 
						body={
							<ul className="font-normal text-gray-700"> 
								<PeopleCard name='Mike Evoy' position='Chair'/>
								<PeopleCard name='Jeremy Earle' position='Co-Chair'/>
							</ul>
						} 
					/>
				</div>
			</div>
		</div>
	);
}
