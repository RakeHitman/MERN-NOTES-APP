import { Link } from "react-router-dom";

export const Navbar = () => {
    const tabs = ["Home", "Notes", "Favourites"];
    return (
        <nav className="w-full h-[105px] flex justify-around items-center border-b-2 border-black bg-[#0C043D]">
            <div className="h-max w-[450px] flex justify-between items-center">
                <label
                    htmlFor="number"
                    className="relative inline-block font-bold text-xl text-[#9B97AF]"
                >
                    FIND HERE!
                    <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#9B97AF]"></span>
                </label>

                <input className="max-w-80 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-4 focus:ring-pink-900 hover:ring-4 hover:ring-red-600 hover:ring-offset-2 transition-all duration-300" id="username" type="text" placeholder="GET YOUR NOTES" />

            </div>
            <ul className="flex justify-between space-x-10 m-[20px] ml-[5px]">
                {tabs.map((tab, tabIndex) => {
                    return (
                        <Link to={tab} className="relative inline-block text-[#9B97AF] transition duration-300 font-bold font-mono text-xl hover:text-blue-400 hover:underline hover:cursor-pointer" key={tabIndex}>
                            {tab}
                        </Link>
                    );
                })}
            </ul>
            <div className="flex justify-around items-center space-x-4 h-16 w-64">
                <Link to="/register" className="hover:cursor-pointer h-12 w-32 rounded-[8px] border-2 flex justify-around items-center text-xl list-none font-mono text-white font-bold bg-[#7d2c86] 
                transition duration-200 transform hover:scale-105 hover:bg-[#a03ca5] hover:border-[#d68fd2]">
                    Register
                </Link>
                <Link to="/login" className="hover:cursor-pointer h-12 w-32 rounded-[8px] text-xl border-2 bg-[#2c6e86] border-white list-none font-mono flex justify-around items-center text-white font-bold 
                transition duration-200 transform hover:scale-105 hover:bg-[#358ea5] hover:border-[#8ed3e2]">
                    Sign-up
                </Link>
            </div>

        </nav>
    );
};
