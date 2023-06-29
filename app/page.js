"use client";
import { useEffect, useState } from "react";
import CourseSearch from "./components/CourseSearch";
import LoadingPage from "./loading";
import Courses from "./components/Courses";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("http://localhost:3000/api/courses");
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const getSearchResults = (courses) => {
    setCourses(courses);
  };

  return (
    <>
      <h1>Traversy Media</h1>
      <CourseSearch getSearchResults={getSearchResults} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
