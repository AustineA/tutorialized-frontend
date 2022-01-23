import React, { useEffect, useState } from "react";

import Heading from "../../components/heading";
import CoursesCard from "../../components/courseCard";
import Footer from "../../layouts/footer";

const Courses = () => {
  const courses = [];

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
