import Head from 'next/head';
import {BlogPost} from '../components/BlogPost';
import BackgroundImage from '../public/FOVP_UPSCALE.png';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Friends of Victoria Park</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className="relative w-full h-[40rem]">
				<div className="w-full h-full bg-[url('/VP_BACK_1.jpg')] bg-cover bg-center " />
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
					<h1 className="mt-5 text-center text-5xl text-white font-dancing-script font-semibold drop-shadow-lg">
						Welcome to the 
					</h1>
					<h1 className="text-center text-5xl text-white font-dancing-script font-semibold drop-shadow-lg">
						Friends of Victoria Park
					</h1>
				</div>
			</div>
			<div className="relative w-full min-h-[40rem] bg-blue-100 grid grid-cols-1 gap-4 content-center place-items-center">
				<div className="px-6 py-6">
					<BlogPost subject="Welcome to the little park with the big hill" body="Victoria Park is located in the West End of St. John's, Newfoundland Labrador. The bottom edge of the park starts on Water Street and runs up the steep green shaded hill all the way to Hamilton Avenue. Sudbury Street flanks the park on its west side and the back gardens of the houses on Alexander Street line the parks eastern border."/>
					<BlogPost subject="Natural Amphitheatre" body="The upper portions of the park has a beautiful steep topography with mature large trees and a wide open slope that forms a natural amphitheatre above the baseball diamond in the summer and the perfect snowboarding and sledding hill in the winter. The lower portion of the park contains a few meandering paths around flower beds and small and large trees. It sets the perfect setting for a family picnic and leads up to the children's playground and the Pool House." />
					<BlogPost subject="The Pool House without a pool" body="The Pool House no longer services a pool, and now instead serves as the summer headquarters for the Friends of Victoria Park, the Lantern Festival organizing committee, the free summer day camp program, lantern-making workshops and other activities. The Friends of Victoria Park often shares the Pool House to support the activities of other community-oriented and art initiatives as a workshop space and practice area." />
					<BlogPost subject="Home of the Victoria Park Lantern Festival" body="Annually on the Saturday of the last full weekend in July, the Lantern Festival lights up the west end of the City of Legends with a full day of events, a lantern installation, a lantern procession and a fire show and performance." />
				</div>
			</div>
		</div>
	);
}
