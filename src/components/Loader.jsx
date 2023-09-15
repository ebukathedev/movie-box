import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
	return (
		<div className="w-screen h-screen bg-white flex items-center justify-center">
			<ScaleLoader color="#BE123C" />
		</div>
	);
};

export default Loader;
