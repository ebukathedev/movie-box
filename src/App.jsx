import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import MovieDetails from "./components/MovieDetails";
import SignIn from "./components/SignIn";
import poster from "./images/poster.png";
import Footer from "./components/Footer";
import Featured from "./components/Featured";

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
	return (
		<main className="font-dmSans">
			{/* hero */}
			<section
				className="flex flex-col h-screen bg-center bg-no-repeat bg-cover bg-slate-500"
				style={{ backgroundImage: `url(${poster})` }}
			>
				<header className="px-4 pt-4 md:px-8 md:pt-5 lg:pt-6 xl:px-12">
					<div className="container grid grid-cols-2 grid-rows-2 gap-4 mx-auto lg:flex lg:justify-between lg:gap-0 lg:items-center md:gap-5">
						<Logo />
						<SignIn />
						<SearchBar />
					</div>
					{apiKey}
				</header>
				<MovieDetails />
			</section>
			<Featured />
			<Footer />
		</main>
	);
};

export default App;
