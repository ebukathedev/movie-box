import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import MovieDetails from "./components/MovieDetails";
import SignIn from "./components/SignIn";
import poster from "./images/poster.png";
import Footer from "./components/Footer";

const App = () => {
	return (
		<main className="font-dmSans">
			{/* hero */}
			<section
				className="h-screen bg-slate-500 bg-no-repeat bg-cover bg-center flex flex-col"
				style={{ backgroundImage: `url(${poster})` }}
			>
				<header className="px-4 pt-4 md:px-8 md:pt-5 lg:pt-6">
					<div className="container grid grid-rows-2 grid-cols-2 mx-auto gap-4 lg:flex lg:justify-between lg:gap-0 lg:items-center xl:px-12 md:gap-5">
						<Logo />
						<SignIn />
						<SearchBar />
					</div>
				</header>
				<MovieDetails />
			</section>
			<Footer />
		</main>
	);
};

export default App;
