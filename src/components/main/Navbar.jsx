import Countdown from "../common/Waktu";

export default function Navbar() {
    return (
        <>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a><Countdown /></a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Dopa</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a><Countdown /></a></li>
                {/* <li><a>Pengeluaran</a></li>
                <li><a>Tabungan</a></li> */}
                </ul>
            </div>
            <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-2">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="img/dapa.png" />;
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#242933] mr-2">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
        </>
    );
}
