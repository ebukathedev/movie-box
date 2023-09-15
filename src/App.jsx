import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Loader from "./components/Loader";

let router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/movie/:id",
		element: <MoviePage />,
	},
]);

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const load = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearInterval(load);
		console.log("effect ran");
	}, [isLoading]);

	return (
		<>
			{isLoading && <Loader />}
			<RouterProvider router={router} />;
		</>
	);
};

export default App;
