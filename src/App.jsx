import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

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
	return <RouterProvider router={router} />;
};

export default App;
