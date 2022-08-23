/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
	const router = useRouter();
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className='flex items-center sticky top-0 z-50 flex-wrap bg-blue-400 p-3 '>
				<Link href='/'>
					<a className='inline-flex items-center p-2 mr-4 '>
					<img src="/FOVP_UPSCALE.png" width='70' height='70' />
						<span className='md:text-xl text-sm text-white font-dancing-script font-bold tracking-wide'>
							Friends of Victoria Park
						</span>
					</a>
				</Link>
				<motion.div className="ml-auto" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
					<button
						className=' inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-white outline-none'
						onClick={handleClick}
					>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<NavbarHamburger isOpen={active}/>
						</svg>
					</button>
				</motion.div>
				{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
				<div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
					<div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
						<motion.div className="py-2"whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
							<Link href='/'>
								<a className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white ${router.pathname == "/" ? "text-blue-600" : "text-brand-darkblue"}`}>
									Home
								</a>
							</Link>
						</motion.div>
						<motion.div className="py-2"whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
							<Link href='/daycamp'>
								<a 
									className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white ${router.pathname == "/daycamp" ? "text-blue-600" : "text-brand-darkblue"}`}>
									Day Camp
								</a>
							</Link>
						</motion.div>
						<motion.div className="py-2"whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
							<Link href='https://lanternfest.ca/'>
								<a target='_blank' className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white ${router.pathname == "/lfest" ? "text-blue-600" : "text-brand-darkblue"}`}>
									Lantern Festival
								</a>
							</Link>
						</motion.div>
						<motion.div className="py-2"whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
							<Link href='/volunteer'>
								<a className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white ${router.pathname == "/volunteer" ? "text-blue-600" : "text-brand-darkblue"}`}>
									Volunteer
								</a>
							</Link>
						</motion.div>
						<motion.div className="py-2"whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
							<Link href='/about'>
								<a className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white ${router.pathname == "/about" ? "text-blue-600" : "text-brand-darkblue"}`}>
									About
								</a>
							</Link>
						</motion.div>
						<motion.div className="py-2"whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
							<Link href='/contact'>
								<a className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white ${router.pathname == "/contact" ? "text-blue-600" : "text-brand-darkblue"}`}>
									Contact us
								</a>
							</Link>
						</motion.div>
					</div>
				</div>
			</nav>
		</>
	);
};

export const NavbarHamburger = (props) => {
	if(props.isOpen) {
		return(
			<>
				<path
					stroke-linecap="round" 
					stroke-linejoin="round"
					strokeWidth={2} 
					d="M6 18L18 6M6 6l12 12" 
				/>
			</>
		);
	}
	return(
		<>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M4 6h16M4 12h16M4 18h16'
			/>
		</>
	);
}
