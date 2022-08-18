/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const Footer = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className='flex items-center flex-wrap bg-gray-800 p-3 '>
				<Link href='/'>
					<a className='inline-flex items-center p-2 mr-4 '>
						<span className='text-l text-white tracking-wide'>
							Copyright 2022 © Friends of Victoria Park
						</span>
					</a>
				</Link>
				<div
					className={`${
						active ? '' : 'hidden'
					}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
				>
					<div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
						<Link href='https://liamearle.ca'>
							<a className='inline-flex items-center p-2 mr-4 '>
								<span className='text-l text-white tracking-wide'>
									Powered by liamearle.ca
								</span>
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};