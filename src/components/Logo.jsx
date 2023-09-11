import logo from "../images/tv.svg";

const Logo = () => {
	return (
		<div className="flex items-center space-x-2 sm:space-x-3 md:space-x-5">
			<div className="w-9 md:w-auto">
				<img src={logo} alt="logo" />
			</div>
			<span className="text-lg font-bold text-white md:text-2xl sm:text-xl">
				Movie Box
			</span>
		</div>
	);
};

export default Logo;
