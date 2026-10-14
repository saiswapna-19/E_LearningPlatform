import { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import { getEnrolledCourses, getProgress, saveProgress } from "../utils/localStorage";

export default function MyLearning() {
  const [enrolled] = useState(getEnrolledCourses());
  const [progress, setProgress] = useState(getProgress());
  const myCourses = courses.filter((c) => enrolled.includes(c.id));

  const toggleLesson = (id, index) => {
    const completed = progress[id] || [];
    const updated = completed.includes(index)
      ? completed.filter((i) => i !== index)
      : [...completed, index];

    saveProgress(id, updated);
    setProgress({ ...progress, [id]: updated });
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900">My Learning</h1>
        <p className="mb-8 mt-2 text-gray-600">Track your courses and learning progress.</p>

        {!myCourses.length ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold">No courses yet</h2>
            <p className="my-3 text-gray-500">Enroll in a course to start learning.</p>
            <Link to="/courses" className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">Explore Courses</Link>
          </div>
        ) : (
          <div className="space-y-6">
            {myCourses.map((course) => {
              const completed = progress[course.id] || [];
              const percent = Math.round(completed.length / course.lessons.length * 100);

              return (
                <article key={course.id} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <img src={course.image} alt={course.title} className="h-44 w-full rounded-xl object-cover sm:w-56" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-600">{course.category}</p>
                      <h2 className="mt-1 text-xl font-bold text-gray-900">{course.title}</h2>
                      <p className="mt-2 text-sm text-gray-500">Instructor: {course.instructor}</p>
                      <div className="mt-5 flex justify-between text-sm font-medium">
                        <span>Course Progress</span><span>{percent}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200">
                        <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${percent}%` }} />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">{completed.length} of {course.lessons.length} lessons completed</p>
                    </div>
                  </div>

                  <div className="mt-6 border-t pt-5">
                    <h3 className="mb-3 font-semibold text-gray-900">Course Lessons</h3>
                    <div className="space-y-2">
                      {course.lessons.map((lesson, i) => (
                        <label key={i} className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-100 p-3 hover:bg-blue-50">
                          <input type="checkbox" checked={completed.includes(i)} onChange={() => toggleLesson(course.id, i)} className="h-4 w-4 accent-blue-600" />
                          <span className={completed.includes(i) ? "text-gray-400 line-through" : "text-gray-700"}>{lesson}</span>
                        </label>
                      ))}
                    </div>
                    <Link to={`/courses/${course.id}`} className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline">View Course Details →</Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}