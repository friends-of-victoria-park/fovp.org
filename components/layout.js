import {Navbar} from './Navbar';
import {Footer} from './Footer';

export default function Layout({ children }) {
	return (
		<div className="bg-blue-400">
			<Navbar />
				<main>{children}</main>
			<Footer />
		</div>
	)
}
