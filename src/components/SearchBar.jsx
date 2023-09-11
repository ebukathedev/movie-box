import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
	return (
		<div className="flex justify-between items-center rounded-lg border-2 border-lightestGray text-white p-2 px-3 col-span-2 lg:flex-1 lg:max-w-[525px] md:px-4">
			<input
				type="text"
				placeholder="What do you want to watch?"
				className="bg-transparent placeholder:text-white w-10/12 focus:outline-none"
			/>
			<FaSearch size={16} />
		</div>
	);
};

export default SearchBar;
