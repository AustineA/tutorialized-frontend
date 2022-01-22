import React, { useEffect, useState } from "react";
import Lesson from "../../components/lessionList";
import { useSelector } from "react-redux";

const Playlist = ({ title }) => {
  const course = useSelector(state => state.course);
  const [lessons, setLessons] = useState();

  useEffect(() => {
    const { lessons } = course;
    setLessons(lessons);
  }, [course]);

  return (
    <div className="course-playlist">
      <div className="playlist-inner">
        <div>
          <p className="course-title">{title}</p>
          <span className="course-subtitle">
            {lessons ? lessons.length : ""} LESSONS
          </span>
        </div>
        <Lesson />
      </div>
    </div>
  );
};

export default Playlist;
