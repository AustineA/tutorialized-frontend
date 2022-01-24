import React, { useEffect, useState } from "react";
import store from "../../store/store";
import { useSnapshot } from "valtio";
import API from "../../services/api";
import Heading from "../../components/heading";
import CoursesCard from "../../components/courseCard";
import Footer from "../../layouts/footer";

const Courses = () => {
  const state = useSnapshot(store);
  const [courses, setCourses] = useState(state.courses);

  useEffect(async () => {
    if (courses.length > 0) return;

    const { data } = await API.get("/courses");
    store.courses = data;
    setCourses(data);
  }, []);

  return (
    <div className="course">
      <Heading
        title="Learn by doing"
        subtitle="Fast | Efficient | Project-based | Video Course."
      />
      <CoursesCard courses={courses} />
      <Footer />
    </div>
  );
};

export default Courses;
