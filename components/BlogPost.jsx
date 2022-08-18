export function BlogPost(props) {
	return (
		<>
			<div className="pt-4">
				<div className="block p-6 2xl:w-[70rem] xl:w-[60rem] lg:w-[50rem] md:w-[40rem] w-[20rem] bg-white rounded-lg border border-gray-200 shadow-md">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{props.subject}</h5>
					<div className="font-normal text-gray-700 drop-shadow-lg">
						{props.body}
					</div>
					{/* <div className="font-normal pt-3 text-gray-400 drop-shadow-lg">
						2020/08/17
					</div> */}
				</div>
			</div>
		</>
	);
};
