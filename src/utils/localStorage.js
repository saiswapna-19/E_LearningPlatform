// Get enrolled courses
export const getEnrolledCourses = () => {
  return JSON.parse(localStorage.getItem("enrolledCourses") || "[]");
};

// Enroll in a course
export const enrollCourse = (id) => {
  const courses = getEnrolledCourses();

  if (!courses.includes(id)) {
    courses.push(id);
    localStorage.setItem("enrolledCourses", JSON.stringify(courses));
  }
};

// Get and save course progress
export const getProgress = () => {
  return JSON.parse(localStorage.getItem("courseProgress") || "{}");
};

export const saveProgress = (id, completedLessons) => {
  const progress = getProgress();
  progress[id] = completedLessons;

  localStorage.setItem("courseProgress", JSON.stringify(progress));
};

// Save and get demo user
export const saveUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("currentUser") || "null");
};

// Log out
export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};