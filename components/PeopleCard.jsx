export function PeopleCard(props) {
	return (
		<>
			<div className="px-1 py-1">
				<div className="block p-6 2xl:w-[65rem] xl:w-[50rem] lg:w-[40rem] md:w-[30rem] w-[20rem] min-h-[11rem] bg-white rounded-lg border border-gray-200 shadow-md">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.name}</h5>
					<div className="font-normal text-gray-700 drop-shadow-lg"> 
						{props.position}
					</div>
					<a href={`emailto:${props.email}`}>
						<svg className="pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
					</a>
				</div>
			</div>
		</>
	);
};
