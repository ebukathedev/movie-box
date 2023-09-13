import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex justify-between items-center rounded-lg border-2 border-lightestGray text-white p-1 pl-3 pr-1 md:pl-4 md:pr-2 col-span-2 lg:flex-1 lg:max-w-[525px] "
		>
			<input
				type="text"
				placeholder="What do you want to watch?"
				className="w-10/12 bg-transparent placeholder:text-white focus:outline-none"
			/>
			<button type="submit" className="p-2 focus:outline-none">
				<FaSearch size={16} />
			</button>
		</form>
	);
};

export default SearchBar;
