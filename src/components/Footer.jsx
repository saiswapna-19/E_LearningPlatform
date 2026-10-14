import { Link } from "react-router-dom";
import { BookOpen, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-8 text-gray-300 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
          <BookOpen className="text-blue-400" size={24} />
          Learn<span className="text-blue-400">Hub</span>
        </Link>

        <div className="flex flex-wrap gap-5 text-sm">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/courses" className="hover:text-blue-400">Courses</Link>
          <Link to="/my-learning" className="hover:text-blue-400">My Learning</Link>
          <Link to="/contact" className="flex items-center gap-1 hover:text-blue-400">
            <Mail size={16} /> Contact
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
        © 2026 LearnHub. All rights reserved.
        <p className="mt-1">Learn new skills. Build your future.</p>
      </div>
    </footer>
  );
}