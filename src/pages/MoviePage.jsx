import { useLocation } from "react-router-dom";

// movie by id
// https://api.themoviedb.org/3/movie/734253?api_key=0e475de5e9056c4d6dfc09841688b85e

const MoviePage = () => {
	const location = useLocation();
	const imbd_id = location.state.id;
	console.log(location);
	return <main className="font-poppins">Movie{imbd_id}</main>;
};

export default MoviePage;
