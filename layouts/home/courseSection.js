import React from "react";
import Heading from "../../components/heading";
import Courses from "../../components/courseCard";

const CourseSection = () => {
  const courses = [];

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

// const courses = [
//   {
//     title: "UX/UI Design with Adobe XD",
//     lesson: "15 Lessons",
//     image: require("../../images/Course-1.jpg"),
//     paid: true
//   },
//   {
//     title: "Introduction to HTML & CSS",
//     lesson: "12 Lessons",
//     image: require("../../images/Course-2.jpg"),
//     paid: false
//   },
//   {
//     title: "Design & Build Instagram with React Native",
//     lesson: "10 Lessons",
//     image: require("../../images/Course-3.jpg"),
//     paid: true
//   },
//   {
//     title: "Build an E-commerce Store with Vue.js",
//     lesson: "20 Lessons",
//     image: require("../../images/Course-4.jpg"),
//     paid: true
//   },
//   {
//     title: "Design & Build a Fintech App With React Native",
//     lesson: "16 Lessons",
//     image: require("../../images/Course-5.jpg"),
//     paid: true
//   },
//   {
//     title: "Build a Bank Web App with Angular",
//     lesson: "12 Lessons",
//     image: require("../../images/Course-6.jpg"),
//     paid: true
//   }
// ];
