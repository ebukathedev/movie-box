import { IoIosArrowForward } from "react-icons/io";
import Card from "./Card";

const Featured = () => {
	const array = [...Array(10)];

	return (
		<section className="px-4 my-12 md:px-8 xl:px-12 lg:my-14">
			<div className="container mx-auto">
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
						Featured Movie
					</h2>
					<div className="flex items-center space-x-2 text-rose">
						<span className="font-normal sm:text-lg">See more</span>
						<IoIosArrowForward size={20} />
					</div>
				</div>
				{/* movie list */}
				<div className="grid justify-center gap-8">
					{array.map((arr, i) => (
						<Card key={i} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Featured;
