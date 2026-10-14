import { useState } from "react";
import { Search, SlidersHorizontal, BookOpen } from "lucide-react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(courses.map(c => c.category))];

  const filtered = courses.filter(c =>
    `${c.title} ${c.instructor} ${c.category}`.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || c.category === category)
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-12 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-blue-600">LEARN SOMETHING NEW</p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">Explore Our Courses</h1>
          <p className="mt-4 text-gray-600">Discover courses and build valuable skills for your future.</p>

          <div className="mt-8 flex max-w-2xl items-center gap-3 rounded-xl border bg-white p-3 shadow-sm">
            <Search className="text-gray-400" size={21} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses..." className="min-w-0 flex-1 outline-none" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Find Your Course</h2>
            <p className="mt-1 text-sm text-gray-500">{filtered.length} courses available</p>
          </div>

          <label className="flex items-center gap-2">
            <SlidersHorizontal size={19} className="text-gray-500" />
            <select value={category} onChange={e => setCategory(e.target.value)} className="rounded-lg border bg-white px-3 py-3 text-sm outline-none focus:border-blue-500">
              {categories.map(c => <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>)}
            </select>
          </label>
        </div>

        {filtered.length ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(course => <CourseCard key={course.id} course={course} />)}
          </div>
        ) : (
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <BookOpen className="mx-auto text-gray-400" size={36} />
            <h3 className="mt-3 font-bold text-gray-800">No courses found</h3>
            <button onClick={() => { setSearch(""); setCategory("All"); }} className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Reset Filters</button>
          </div>
        )}
      </section>
    </main>
  );
}