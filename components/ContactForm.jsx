export function ContactForm(props) {
	return (
		<>
			<form className="w-full max-w-lg" action="https://api.web3forms.com/submit" method="POST">
				<input type="hidden" name="access_key" value="be3c1749-cfda-438c-a8bb-fd177eec869a" />
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3 mb-6 md:mb-0">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
							Full Name
						</label>
						<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-full-name" type="text" name="name" required />
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
							E-mail
						</label>
						<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="email" required />
						<p className="text-gray-600 text-xs italic">We'll use this E-Mail Address to Reply</p>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
							Message
						</label>
						<textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message" required></textarea>
						<p className="text-gray-600 text-xs italic"></p>
					</div>
				</div>
				<input type="hidden" name="redirect" value="https://web3forms.com/success" />
				<div className="md:flex md:items-center">
					<div className="md:w-1/3">
						<button className="shadow bg-blue-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" id="btn" type="submit">
							Send
						</button>
					</div>
					<div className="md:w-2/3"></div>
				</div>
			</form>
		</>
	);
};
