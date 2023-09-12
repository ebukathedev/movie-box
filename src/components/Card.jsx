import imbd from "../images/imbd.svg";
import tomato from "../images/tomato.svg";
import poster from "../images/movie_poster.png";

const Card = () => {
	return (
		<div className="font-bold">
			<div>
				<img src={poster} alt="movie" />
			</div>
			<div className="text-xs text-darkerLightGray">
				USA, 2016 - Current
			</div>
			<h3 className="text-lg text-darkestGray">Stranger Things</h3>
			<div className="flex font-normal space-x-9">
				<div className="flex items-center space-x-3 text-sm ">
					<div>
						<img src={imbd} alt="IMBD logo" />
					</div>
					<span>860/100</span>
				</div>
				<div className="flex items-center space-x-3 text-sm ">
					<div>
						<img src={tomato} alt="rotten tomatoes" />
					</div>
					<span>97%</span>
				</div>
			</div>
			<div className="text-xs text-darkerLightGray">
				Action, Adventure, Horror
			</div>
		</div>
	);
};

export default Card;
