import {
	FaFacebookSquare,
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
const Footer = () => {
	const year = new Date().getFullYear();
	const iconSize = 24;
	return (
		<footer className="text-darkestGray flex flex-col items-center space-y-5 py-8 font-bold lg:space-y-6 px-4 md:py-12">
			<ul className="flex space-x-6 md:space-x-8 lg:space-x-10">
				<li className="transition-normal hover:text-rose">
					<FaFacebookSquare size={iconSize} />
				</li>
				<li className="transition-normal hover:text-rose">
					<FaInstagram size={iconSize} />
				</li>
				<li className="transition-normal hover:text-rose">
					<FaTwitter size={iconSize} />
				</li>
				<li className="transition-normal hover:text-rose">
					<FaYoutube size={iconSize} />
				</li>
			</ul>
			<ul className="flex flex-wrap gap-4 gap-y-2 text-sm justify-center lg:text-[1rem]">
				<li>Conditions of Use</li>
				<li>Privacy & Policy</li>
				<li>Press Room</li>
			</ul>
			<p className="text-darkerGray text-sm lg:text-[1rem]">
				© {year} MovieBox by Ebuka Ejiofor.
			</p>
		</footer>
	);
};

export default Footer;
