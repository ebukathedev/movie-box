import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

// movie by id
// https://api.themoviedb.org/3/movie/734253?api_key=0e475de5e9056c4d6dfc09841688b85e
// const API_URL = "https://api.themoviedb.org/3";

const MoviePage = () => {
	const location = useLocation();
	const { movie } = location.state;

	return <main className="font-poppins">Movie{movie.title}</main>;
};

export default MoviePage;
