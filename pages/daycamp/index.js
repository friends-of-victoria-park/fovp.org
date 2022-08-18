import Head from 'next/head';
import BackgroundImage from '../../public/FOVP_UPSCALE.png';

export default function Daycamp() {
	return (
		<div>
			<Head>
				<title>Day Camp - Friends of Victoria Park</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className="relative w-full h-[40rem]">
				<div className="w-full h-full bg-[url('/VP_DAYCAMP_BACK.jpg')] bg-cover bg-center " />
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
					<h1 className="mt-5 text-center text-4xl text-white font-semibold drop-shadow-lg">
						Friends of Victoria Park
					</h1>
					<h1 className="mt-2 text-center text-4xl text-white font-semibold drop-shadow-lg">
						Summer Day Camp Program
					</h1>
					<div className="mt-5 text-center text-1xl text-white drop-shadow-lg block p-6 max-w-4xl rounded-lg border shadow-md bg-gray-800 border-gray-700"> 
						The FOVP summer day camp is an 8 week program which provides children ages 5-12 with an opportunity to participate in many fun activities such as field trips, arts and crafts, recreation and many other fun activities.
					</div>
				</div>
			</div>
			<div className="relative w-full min-h-[40rem] bg-blue-100 grid grid-cols-1 gap-4 content-center place-items-center">
				<div className="px-6 py-6">
					<a className="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">The Program</h5>
						<ul className="font-normal text-gray-700 drop-shadow-lg"> 
							<li><b>When:</b> July 2021 to August 2021</li>
							<li><b>Time:</b> 9:00am to 4:00pm; Monday to Friday</li>
							<li><b>Registration Fees:</b> TBD for a single child. TBD for 2. Additional children from the same family please add an extra TBD per child. (please note fees are reviewed every two years, the next scheduled review is Summer 2020)</li>
							<li><b>Ages:</b> 5-12</li>
						</ul>
					</a>
					<div className="pt-5">
						<a className="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">How to Register</h5>
							<ul className="font-normal text-gray-700 drop-shadow-lg"> 
								<li><b>Download</b> the FOVP Summer Program Registration Form and the Participant Agreement Form</li>
								<li><b>Fill out the form:</b> The form is a fillable pdf, so you can fill it out electronically and then print it out. Alternatively, print it out and fill it out by hand.</li>
								<li><b>Come to the park on your applicable registration date:</b></li>
								<li>‎</li>
								<li>For parents of returning kids we thank you in advance for registrating your kids for another fun filled summer as we look forward to another rewarding year.</li>
								<li>‎</li>
								<li><b><u>New Registrants:</u></b> Please be advised that the FOVP Day Camp is accepting new applicants on a zone-based priority until TBD. Parents and Guardians of children are asked to email their registration forms no earlier than TBD and no later then TBD to fovpdaycamp@gmail.com Also be advised that there is a very limited number of spots available. Parents and Guardians will be notified on May 29 as to the status of their application.</li>
								<li>‎</li>
								<li><b><u>Program Capacity:</u></b> Please be advised that the maximum program capacity for 2019 is 75 children. However the FOVP reserves the right to lower the number of registrations based on staffing numbers.</li>
								<li>‎</li>
								<li>Also be advised that zonal priority will be in affect.</li>
								<li>‎</li>
								<li><b>ZONES are as follows:</b></li>
								<li><b>Zone 1</b> is the immediate area of Victoria Park determined by a 2 kilometer radius of Angel Place Victoria Park</li>
								<li><b>Zone 2</b> is the immediate area of Victoria Park determined by a 2.0001 to 4 kilometer radius of Angel Place Victoria Park</li>
								<li><b>Zone 3</b> is the immediate area of Victoria Park determined by a 4.0001 to 8 kilometer radius of Angel Place Victoria Park</li>
								<li><b>Zone 4</b> is the immediate area of Victoria Park determined by a 8.0001 to 12 kilometers radius from Angel Place Victoria Park</li>
								<li><b>Zone 5</b> is any area larger than 12.0001 kilometers from Angel Place Victoria Park</li>
								<li><b>Zone 6</b> is any area outside of St. John's.</li>
							</ul>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
