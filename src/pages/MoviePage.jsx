import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import formatNumber from "../util/formatNumber";
// import movie from "../util/placeholder.json";
import MovieHeader from "../components/MovieHeader";
import { IoIosArrowDown, IoIosList } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import moreMovies from "../images/more-movies.png";

// title - [data-testid: movie-title]
// release date (in UTC) - [data-testid: movie-release-date]
// runtime (in minutes) - [data-testid: movie-runtime]
// overview - [data-testid: movie-overview]
//  Show a loading indicator while fetching search results.

const MoviePage = () => {
	const location = useLocation();
	const [voteCount, setVoteCount] = useState(0);
	const { movie } = location.state;
	const releaseDate = new Date(movie.release_date).getTime();
	const IMAGE_PATH = "https://image.tmdb.org/t/p/w780";

	const formatter = () => {
		if (movie.vote_count < 1000) {
			setVoteCount(movie.vote_count);
		} else {
			const formattedNumber = formatNumber(movie.vote_count);
			setVoteCount(formattedNumber);
		}
	};

	useEffect(() => {
		formatter();
	}, []);

	return (
		<main className="font-poppins">
			<section className="px-4 pt-4 md:px-8 md:pt-5 lg:pt-6 xl:px-12">
				<div className="container mx-auto space-y-8 mb-16">
					<div
						className="aspect-video md:aspect-[1198_/_449] bg-red-600 rounded-2xl"
						style={{
							backgroundImage: `url(${IMAGE_PATH}${movie.backdrop_path})`,
						}}
					></div>

					<MovieHeader
						{...movie}
						vote_count={voteCount}
						release_date={releaseDate}
					/>

					<div className="content text-[#666] space-y-16">
						<div>
							<p data-testid="movie-overview">{movie.overview}</p>
							<ul className="mt-5 space-y-2">
								<li>
									<span>Director: </span>
									<span className="text-rose">
										Joseph Kosinski
									</span>
								</li>
								<li>
									<span>Writers: </span>
									<span className="text-rose">
										Jim Cash, Jack Epps Jr, Peter Craig
									</span>
								</li>
								<li>
									<span>Stars: </span>
									<span className="text-rose">
										Tom Cruise, Jennifer Connelly, Miles
										Teller
									</span>
								</li>
							</ul>
							<div className="flex flex-col mt-7 space-y-4">
								<button className="btn bg-rose text-white justify-center">
									Top rated movie #{movie.id}
								</button>
								<div className="flex items-center justify-between px-4 py-2 border border-lightGray rounded-lg hover:text-black transition-normal">
									<span>Awards & Nominations</span>
									<IoIosArrowDown size={20} />
								</div>
							</div>
						</div>
						<div className="space-y-6">
							<div className="space-y-4">
								<button className="btn btn-solid w-full justify-center">
									<IoTicket size={20} />
									<span>See Showtimes</span>
								</button>
								<button className="btn btn-inverse w-full justify-center">
									<IoIosList size={20} />
									<span>More watch options</span>
								</button>
							</div>
							<div className="relative max-w-max mx-auto">
								<img src={moreMovies} alt="more movies" />
								<div className="absolute text-[#E8E8E8] bg-[#12121280] left-0 right-0 py-2 text-xs bottom-0 flex items-center justify-center space-x-2 font-medium rounded-b-lg">
									<IoIosList size={20} />
									<span>
										The Best Movies and Shows in September
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default MoviePage;
