import Head from 'next/head';
import {InfoCard} from '../../components/InfoCard';
import BackgroundImage from '../../public/FOVP_UPSCALE.png';

export default function Daycamp() {
	return (
		<div>
			<Head>
				<title>Day Camp - Friends of Victoria Park</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className="relative w-full h-[50rem]">
				<div className="w-full h-full bg-[url('/VP_DAYCAMP_BACK.jpg')] bg-cover bg-center " />
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
					<h1 className="mt-5 text-center text-4xl text-white font-semibold drop-shadow-lg">
						Friends of Victoria Park
					</h1>
					<h1 className="mt-2 text-center text-4xl text-white font-semibold drop-shadow-lg">
						Summer Day Camp Program
					</h1>
					<div className="mt-5 pb-4 text-center text-1xl text-white drop-shadow-lg block p-6 max-w-4xl rounded-lg border shadow-md bg-gray-800 border-gray-700"> 
						<p align="justify">The FOVP Summer Day Camp is an 8 week program based in Victoria Park, providing children ages 5-12 an opportunity to participate in fun summer activities, including: swimming, field trips, arts and crafts, games, and a number of other recreational and learning experiences.</p>
						<li>‎</li>
						<p align="justify">Registration for the FOVP Summer Day Camp occurs in one-week blocks; participants can register for the entire summer (8 weeks), or any number or combination of weeks, depending on availability. If you only want to register for one, two or four weeks, just let us know!</p>
						<li>‎</li>
						<p align="justify">The FOVP Summer Day Camp is fully supervised, with an excellent ratio of camp staff to participants!</p>
					</div>
				</div>
			</div>
			<div className="relative w-full min-h-[40rem] bg-blue-100 grid grid-cols-1 gap-4 content-center place-items-center">
				<div className="px-4 grid grid-cols-1 gap-4 content-center place-items-center py-6">
					<InfoCard subject="The Program" 
						body={
							<ul className="font-normal text-gray-700"> 
								<li><b>When:</b> July 3rd, 2023 to August 25th, 2023 (8 weeks)</li>
								<li><b>Time:</b> 9:00am to 4:30pm, Monday to Friday</li>
								<li><b>Registration Fees:</b> $75 per child, per week</li>
								<li><b>Ages:</b> 5-12 (participants must be turning 5 prior to December 31) </li>
							</ul>
						} 
					/>
					<InfoCard subject="How to Register" 
						body={
							<ul className="font-normal text-gray-700"> 
								<li><a href="https://fovp.org/camp_registration.pdf"><b><u>DOWNLOAD</u></b></a> the FOVP Summer Program Registration Form</li>
								<li>‎</li>
								<li><b>Fill out the form:</b> The form is a fillable pdf, so you can fill it out electronically and then print it out. Alternatively, print it out and fill it out by hand.</li>
								<li>‎</li>
								<li><b>Bring your completed registration form to Victoria Park on the scheduled Day of Registration (see below). <b>PLEASE NOTE</b> that payment for camp registration is required IN FULL on the day of registration. The Friends of Victoria Park accepts payment in CASH, CHEQUE (post-dated cheques also permitted), DEBIT and CREDIT CARD.</b></li>
								<li>‎</li>
								<li>Registration for the 2023 FOVP Summer Day Camp is open to both returning participants and new participants. PLEASE NOTE that returning participants are given registration priority; new participants are able to register for remaining available weekly spots on a first-come, first-served basis.</li>
								<li>‎</li>
								<li><b><u>Registration Day:</u></b> Registration for the 2023 FOVP Summer Day Camp will occur on Sunday, May 7 from 4 pm until 9 pm. For returning participants, parents/guardians can register between 4 pm and 6 pm. For new participants, parents/guardians can register for remaining available weekly spots between 6 pm and 9 pm. 
								<li>‎</li>
								<b>PLEASE NOTE</b> that remaining spots will be filled on a first-come, first-served basis. For new particpants, please ensure that you have a second or third choice for interested weekly spots, as these do fill up quickly!
								<li>‎</li>
								<b>ALSO NOTE</b> that the FOVP Day Camp accepts new applicants on a zone-based priority system (see below). Where space is limited, the Friends of Victoria Park reserves the right to accept new applicants based on zones/primary residence. Parents/guardians will be notified by May 14 as to the status of their application. If you have any questions, please email us at fovpdaycamp@gmail.com.</li>
								<li>‎</li>
								<li><b><u>Program Capacity:</u></b> Please be advised that the maximum program capacity for 2023 is 60 children per week. However the FOVP reserves the right to lower the number of registrations based on staffing numbers.</li>
								<li>‎</li>
								</ul>
						} 
					/>
					<InfoCard subject="Zones" 
						body={
							<ul className="font-normal text-gray-700"> 
								<li><b>Zone 1</b> is the immediate area of Victoria Park determined by a 2 kilometer radius of Angel Place Victoria Park</li>
								<li><b>Zone 2</b> is the immediate area of Victoria Park determined by a 2.0001 to 4 kilometer radius of Angel Place Victoria Park</li>
								<li><b>Zone 3</b> is the immediate area of Victoria Park determined by a 4.0001 to 8 kilometer radius of Angel Place Victoria Park</li>
								<li><b>Zone 4</b> is the immediate area of Victoria Park determined by a 8.0001 to 12 kilometers radius from Angel Place Victoria Park</li>
								<li><b>Zone 5</b> is any area larger than 12.0001 kilometers from Angel Place Victoria Park</li>
								<li><b>Zone 6</b> is any area outside of St. John's.</li>
							</ul>
						} 
					/>
				</div>
			</div>
		</div>
	);
}
