import star from "../images/star.svg";

const MovieHeader = ({
	title,
	release_date,
	runtime,
	genres,
	vote_average,
	vote_count,
}) => {
	return (
		<div className="flex flex-col space-y-3 text-[#404040]">
			<div className="flex flex-wrap gap-2">
				<h3 data-testid="movie-title">{title}</h3>
				<span>•</span>
				<p data-testid="movie-release-date">{release_date}</p>
				<span>•</span>
				<p>{runtime}m</p>
			</div>
			<div className="flex justify-between flex-wrap">
				<div className="flex space-x-2">
					{genres.map((genre) => (
						<div
							key={genre.id}
							className="text-rose text-sm border border-borderGray py-1 px-4 rounded-2xl"
						>
							{genre.name}
						</div>
					))}
				</div>
				<div className="flex space-x-2">
					<div className="w-5">
						<img src={star} alt="star" />
					</div>
					<div className="flex space-x-1 text-darkGray">
						<span className="text-lightestGray">
							{vote_average}
						</span>
						<span>|</span>
						<span>{vote_count}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieHeader;
