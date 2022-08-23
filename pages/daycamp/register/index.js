import Head from 'next/head';
import {InfoCard} from '../../../components/InfoCard';
import BackgroundImage from '../../../public/FOVP_UPSCALE.png';

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
						Summer Day Camp Program Online Registration
					</h1>
					<div className="mt-5 text-center text-1xl text-white drop-shadow-lg block p-6 max-w-4xl rounded-lg border shadow-md bg-gray-800 border-gray-700"> 
						The FOVP summer day camp is an 8 week program which provides children ages 5-12 with an opportunity to participate in many fun activities such as field trips, arts and crafts, recreation and many other fun activities.
					</div>
				</div>
			</div>
			<div className="relative w-full min-h-[40rem] bg-blue-100 grid grid-cols-1 gap-4 content-center place-items-center">
				<div className="px-4 w-full grid grid-cols-1 gap-4 content-center place-items-center py-6">
					<InfoCard 
						body={
							<form>
								<div className="pb-3 mb-2 text-2xl font-bold tracking-tight text-gray-900">Child Information</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-1/3 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											First Name
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
									<div className="w-1/3 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Middle Name
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
									<div className="w-1/3 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Last Name
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Phone #
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-1/4 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Birth Date
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
									<div className="w-1/4 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Age
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
									<div className="w-1/4 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Gender
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
									<div className="w-1/4 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											MCP #
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Address
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Postal Code
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
								</div>
								<div className="pb-3 mb-2 text-2xl font-bold tracking-tight text-gray-900">Parent / Guardian</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Adult #1 Name
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Adult #2 Name
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											E-Mail
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											E-Mail
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Phone #
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Phone #
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
								</div>
								<div className="pb-3 mb-2 text-2xl font-bold tracking-tight text-gray-900">Emergency Contact</div>
								<div class="flex items-center mb-4">
									<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
									<label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-700">Same as Parent / Guardian Information?</label>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full px-3">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
											Emergency Contact Name
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="email" required />
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Phone #
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
											Relationship to Child
										</label>
										<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
									</div>
								</div>
								<div className="pb-3 mb-2 text-2xl font-bold tracking-tight text-gray-900">Swimming</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<div class="flex items-center mb-4">
											<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
											<label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-700">Can your child swim?</label>
										</div>
									</div>
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<div class="flex items-center mb-4">
											<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
											<label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-700">Does your child require a Personal Floatation Device?</label>
										</div>
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-1/2 px-3 mb-6 md:mb-0">
										<div class="flex items-center mb-4">
											<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
											<label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-700">Can your child swim in the Deep End?</label>
										</div>
									</div>
								</div>
								<div className="pb-3 mb-2 text-2xl font-bold tracking-tight text-gray-900">Media / Video Release</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full px-3 mb-6 md:mb-0">
										<div class="flex items-center mb-4">
											<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
											<label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-700">By checking this box I hereby give permission for images of my child(ren), captured during camp to be used for public relation purpose only </label>
										</div>
									</div>
								</div>
								<div className="pb-3 mb-2 text-2xl font-bold tracking-tight text-gray-900">Allergies / Medical Conditions</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full px-3">
										<textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message" required></textarea>
										<p className="text-gray-600 text-xs italic"></p>
									</div>
								</div>
								<div className="pb-3 mb-2 text-2xl font-bold tracking-tight text-gray-900">Other Comments / Concerns</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full px-3">
										<textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message" required></textarea>
										<p className="text-gray-600 text-xs italic"></p>
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full px-3 mb-6 md:mb-0">
										<div class="flex items-center mb-4">
											<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
											<label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-700">By checking this box I acknowledge that the above information is truthful for the purpose of my childs safety and wellbeing as part of the Friends of Victoria Park Summer Day Camp Program. </label>
										</div>
									</div>
								</div>
								<div className="md:flex md:items-center">
									<div className="md:w-1/3">
										<button className="shadow bg-blue-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" id="btn" type="submit">
											Proceed to Payment
										</button>
									</div>
									<div className="md:w-2/3"></div>
								</div>
							</form>
						}
					/>
				</div>
			</div>
		</div>
	);
}
