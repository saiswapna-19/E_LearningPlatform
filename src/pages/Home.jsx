import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Clock, ArrowRight } from "lucide-react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Learn something new today
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Build Your Future
              <span className="block text-blue-600">
                With Online Learning
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
              Discover expert-led courses, learn valuable skills, and take
              the next step toward your goals at your own pace.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Courses <ArrowRight size={18} />
              </Link>

              <Link
                to="/my-learning"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-blue-500 hover:text-blue-600"
              >
                My Learning
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Award size={18} className="text-blue-600" />
                Expert instructors
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-blue-600" />
                Learn at your pace
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-blue-200/50 blur-2xl" />
            <img
              src="/assets/courses/web-development.jpg"
              alt="Learn web development online"
              className="relative h-64 w-full rounded-3xl object-cover shadow-2xl sm:h-80 md:h-[420px]"
            />

            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 shadow-xl sm:left-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Learn Every Day</p>
                  <p className="text-sm text-gray-500">
                    One skill at a time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-6 py-10 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: BookOpen, value: `${courses.length}+`, label: "Courses Available" },
            { icon: Users, value: "Expert", label: "Course Instructors" },
            { icon: Award, value: "Flexible", label: "Learning Experience" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Icon size={26} />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-500">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-gray-50 px-6 py-14 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-semibold text-blue-600">START LEARNING</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Popular Courses
              </h2>
              <p className="mt-2 text-gray-600">
                Explore courses designed to help you grow your skills.
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
            >
              View All Courses <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-blue-600 px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold">
            Ready to Start Learning?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100">
            Find a course that matches your interests and take the next step
            toward your goals.
          </p>
          <Link
            to="/courses"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Browse Courses <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}