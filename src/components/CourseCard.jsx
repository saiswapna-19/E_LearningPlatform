import { Link } from "react-router-dom";
import { Clock, Star, ArrowUpRight } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow">
          {course.category}
        </span>

        <span className="absolute bottom-4 right-4 rounded-lg bg-white px-3 py-1 font-bold text-gray-900 shadow">
          ₹{course.price}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="flex items-center gap-1 font-medium text-amber-500">
            <Star size={16} fill="currentColor" />
            {course.rating}
          </span>

          <span className="flex items-center gap-1 text-gray-500">
            <Clock size={16} />
            {course.duration}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-gray-900 transition group-hover:text-blue-600">
          {course.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Instructor: {course.instructor}
        </p>

        <div className="mt-5 border-t border-gray-100 pt-4">
          <Link
            to={`/courses/${course.id}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View Course <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}