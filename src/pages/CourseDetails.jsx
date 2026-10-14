import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Star, Clock, BookOpen } from "lucide-react";
import { courses } from "../data/courses";
import { enrollCourse, getEnrolledCourses } from "../utils/localStorage";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));
  const [enrolled, setEnrolled] = useState(() =>
    getEnrolledCourses().includes(Number(id))
  );

  if (!course) {
    return <div className="p-10 text-center">Course not found. <Link to="/courses" className="text-blue-600">Browse courses</Link></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-950 to-blue-700 px-6 py-12 text-white md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <div>
            <Link to="/courses" className="text-sm text-blue-200">← Back to Courses</Link>
            <p className="mt-5 text-blue-200">{course.category}</p>
            <h1 className="mt-2 text-3xl font-bold md:text-5xl">{course.title}</h1>
            <p className="mt-4 leading-7 text-blue-100">{course.description}</p>
            <div className="mt-5 flex flex-wrap gap-5 text-sm">
              <span><Star size={16} className="mr-1 inline text-yellow-400" />{course.rating}</span>
              <span><Clock size={16} className="mr-1 inline" />{course.duration}</span>
              <span><BookOpen size={16} className="mr-1 inline" />{course.lessons.length} lessons</span>
            </div>
            <p className="mt-4 text-sm text-blue-100">Instructor: {course.instructor}</p>
          </div>
          <img src={course.image} alt={course.title} className="h-64 w-full rounded-2xl object-cover shadow-xl md:h-80" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        <div className="space-y-6 md:col-span-2">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">What You'll Learn</h2>
            {course.lessons.map((lesson, i) => (
              <p key={i} className="border-b py-3 text-gray-700">✓ {lesson}</p>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-xl bg-white p-6 shadow-sm md:sticky md:top-24">
          <p className="text-sm text-gray-500">Course Price</p>
          <h2 className="my-2 text-3xl font-bold">₹{course.price}</h2>
          <button
            onClick={() => {
              enrollCourse(course.id);
              setEnrolled(true);
            }}
            disabled={enrolled}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:bg-green-600"
          >
            {enrolled ? "Already Enrolled" : "Enroll Now"}
          </button>
          {enrolled && <Link to="/my-learning" className="mt-4 block text-center text-blue-600">Go to My Learning →</Link>}
        </aside>
      </section>
    </div>
  );
}