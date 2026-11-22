import SearchBar from "./Searchbar";

function Header() {
    const opt = ["Headwere", "Clothing", "Eyewere", "Accessories", "Collab"]
    return (
        <div className="bg-white flex h-16 items-center px-4 py-2 top-0 sticky justify-between shadow-lg">
            <div className="flex items-center">
                <a href="">
                    <img src="Logo.svg" alt="" />
                </a>
                <div className="px-7 flex gap-5 text-[17px]">
                    {opt.map((option) => (
                        <a href="" key={option} className="hover:text-blue-500">{option}</a>
                    ))}
                </div>
            </div>
            <div className="flex gap-5">
                <SearchBar />
                <div className="flex items-center justify-center gap-2">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" overflow="visible"><g fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="butt" stroke-linejoin="miter"><path d="M16 8C16 10.209 14.209 12 12 12C9.791 12 8 10.209 8 8C8 5.791 9.791 4 12 4C14.209 4 16 5.791 16 8Z" /><path d="M4.181 19.514C4.959 16.362 8.164 14 12 14C15.836 14 19.041 16.362 19.819 19.514L18.5 21L5.5 21L4.181 19.514Z" /></g></svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" overflow="visible"><g fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="butt" stroke-linejoin="miter"><path d="M10.939 19.439L3.8 12.3C1.95 10.477 1.927 7.5 3.75 5.65C5.573 3.8 8.55 3.777 10.4 5.6L11.2 6.4L12.8 6.4L13.6 5.6C15.45 3.777 18.427 3.8 20.25 5.65C22.073 7.5 22.05 10.477 20.2 12.3L13.061 19.439L10.939 19.439Z" /></g></svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" overflow="visible"><defs><mask id="shopping-cart-outline-c1" maskUnits="userSpaceOnUse" x="-2" y="-2" width="28" height="28"><rect x="-2" y="-2" width="28" height="28" fill="#fff" /><polygon points="4.19,2.19 0.25,2.19 -0.19,4.81 1.56,4.81" fill="#000" /><polygon points="17.31,18.81 21.25,18.81 21.69,16.19 19.94,16.19" fill="#000" /></mask></defs><g fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="butt" stroke-linejoin="miter"><path d="M6.981 7.5L20.019 7.5L21.093 8.924L19.811 13.412L18.369 14.5L8.631 14.5L7.189 13.412L5.907 8.924L6.981 7.5Z" /><path d="M2 3.5L3.354 3.5L4.801 4.605L7.447 14.306L7.5 14.701L7.5 16L9 17.5L19.5 17.5" mask="url(#shopping-cart-outline-c1)" /><path d="M11 20.5C11 21.328 10.328 22 9.5 22C8.672 22 8 21.328 8 20.5C8 19.672 8.672 19 9.5 19C10.328 19 11 19.672 11 20.5Z" /><path d="M19 20.5C19 21.328 18.328 22 17.5 22C16.672 22 16 21.328 16 20.5C16 19.672 16.672 19 17.5 19C18.328 19 19 19.672 19 20.5Z" /></g></svg>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default Header;