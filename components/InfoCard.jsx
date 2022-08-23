import { motion } from 'framer-motion';

export function InfoCard(props) {
	return (
		<>
				<motion.div className="block p-6 max-w-4xl w-full bg-white rounded-lg border border-gray-200 shadow-md" initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{props.subject}</h5>
					<div className="font-normal text-gray-700 drop-shadow-lg">
						{props.body}
					</div>
					{/* <div className="font-normal pt-3 text-gray-400 drop-shadow-lg">
						2020/08/17
					</div> */}
				</motion.div>
		</>
	);
};
