import React, { useEffect, useState } from "react";
import Heading from "../../components/heading";
import Courses from "../../components/courseCard";
import API from "../../services/api";
import store from "../../store/store";
import { useSnapshot } from "valtio";

const CourseSection = () => {
  const state = useSnapshot(store);
  const [courses, setCourses] = useState(state.courses);

  useEffect(async () => {
    if (courses.length > 0) return;

    const { data } = await API.get("/courses");
    store.courses = data;
    setCourses(data);
  }, []);

  return (
    <div className="course-section">
      <div className="inner-body">
        <p>
          Join 5,647 developers learning to build <br />
          features and apps for as low as ₦3,000. <br />
          Download | Watch Anytime | Priority Support
        </p>

        <Heading
          title="Learn by doing"
          subtitle="Fast | Efficient | Project-based | Video Course."
        />
        <Courses courses={courses} />
      </div>
    </div>
  );
};

export default CourseSection;
