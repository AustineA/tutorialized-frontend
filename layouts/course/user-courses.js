import React, { useEffect, useState } from "react";

import Heading from "../../components/heading";
import CoursesCard from "../../components/courseCard";

const Courses = () => {
  const node = document.querySelector(".user-courses");
  const courses = JSON.parse(node.dataset.courses);

  return (
    <div className="course">
      <Heading
        title="My Courses"
        subtitle="Watch | Learn | Practice | Repeat"
      />
      <CoursesCard courses={courses} />
    </div>
  );
};

export default Courses;
