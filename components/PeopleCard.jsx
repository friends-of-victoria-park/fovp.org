import Image from 'next/image';

export function PeopleCard(props) {
    return (
        <>
            <div class="px-1 py-1">
                <div class="block p-6 2xl:w-[45rem] xl:w-[40rem] lg:w-[30rem] md:w-[20rem] w-[14rem] min-h-[11rem] bg-white rounded-lg border border-gray-200 shadow-md">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.name}</h5>
                    <div class="font-normal text-gray-700 drop-shadow-lg"> 
                        {props.position}
                    </div>
                    <a href={`emailto:${props.email}`}>
                        <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                    </a>
                </div>
            </div>
        </>
    );
};