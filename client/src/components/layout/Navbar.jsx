import { NavLink } from "react-router-dom";

function Navbar() {
    const linkClass = ({ isActive }) =>
        `transition-colors ${
            isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
        }`;

    return (
        <header className="border-b bg-white shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-2xl font-bold text-blue-600"
                >
                    MERN Starter
                </NavLink>

                {/* Navigation */}
                <nav className="flex items-center gap-6">
                    <NavLink to="/" className={linkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/about" className={linkClass}>
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;