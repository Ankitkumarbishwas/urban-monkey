function SearchBar() {
    return (
        <div className="w-[500px] bg-gray-100 h-10 rounded-md flex items-center p-1.5 hover:border-2 hover:border-blue-500">
            <i className="p-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" overflow="visible"><defs><mask id="search-outline-c1" maskUnits="userSpaceOnUse" x="-2" y="-2" width="28" height="28"><rect x="-2" y="-2" width="28" height="28" fill="#fff" /><polygon points="17.97,16.12 15.19,13.33 13.03,14.88 14.26,16.12" fill="#000" /><polygon points="18.53,20.38 21.31,23.17 23.47,21.62 22.24,20.38" fill="#000" /></mask></defs><g fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="butt" stroke-linejoin="miter"><path d="M17 10.5C17 14.09 14.09 17 10.5 17C6.91 17 4 14.09 4 10.5C4 6.91 6.91 4 10.5 4C14.09 4 17 6.91 17 10.5Z" /><path d="M15.5 15.5L21 21" mask="url(#search-outline-c1)" /></g></svg>
            </i>
            <input type="text" placeholder="Search Caps, Tees, Accessories" className=" w-full h-full bg-transparent outline-none " />
        </div>
    )
}

export default SearchBar;