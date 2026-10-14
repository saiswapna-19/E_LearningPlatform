import { Link, NavLink } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `transition hover:text-blue-600 ${
      isActive ? "font-semibold text-blue-600" : "text-gray-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 px-5 py-4 backdrop-blur-md md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="rounded-lg bg-blue-600 p-2 text-white">
            <BookOpen size={24} />
          </span>
          <span className="text-2xl font-bold text-gray-900">
            Learn<span className="text-blue-600">Hub</span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          <NavLink to="/" className={linkStyle} end>
            Home
          </NavLink>

          <NavLink to="/courses" className={linkStyle}>
            Courses
          </NavLink>

          <NavLink to="/my-learning" className={linkStyle}>
            My Learning
          </NavLink>

          <NavLink
            to="/login"
            className="rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </nav>
  );
}