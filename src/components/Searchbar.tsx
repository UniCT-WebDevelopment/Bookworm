import { IconContext } from "react-icons";
import { BiSearchAlt } from 'react-icons/bi';
const Searchbar = () => {
  const search = () => {
    console.log("searching...");
  };

  return(
    <div className="searchbar md:basis-2/5">
      <input
        className="w-full outline-none rounded-sm border-none text-neutral-800 h-8 px-2"
        type="text"
        placeholder="Search books..."
        id="searchbar"
      />

      <button
        className="flex place-items-center justify-center bg-neutral-200 bg-opacity-30 hover:bg-opacity-50 w-14 h-8 rounded-sm mx-2"
        onClick={search}
      >
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <BiSearchAlt />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default Searchbar;