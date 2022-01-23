import React, { useState, useRef, useEffect } from "react";
import API from "../../data/api";

const NewForm = () => {
  const [f, setF] = useState({});
  const [fileNames, setNames] = useState({});
  const introVideo = useRef(null);
  const featuredImage = useRef(null);
  const posterImage = useRef(null);

  const courseData = new URLSearchParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    Object.entries(f).map(([key, value]) => {
      courseData.append(`course[${key}]`, value);
    });

    const {
      data: { slug },
    } = await API.post("courses", courseData);

    window.location.href = `/courses/${slug}`;
  };

  const handleChange = (e) => {
    setF({ ...f, [e.target.name]: e.target.value.trim() });
  };

  const handleSelected = (e) => {
    setF({ ...f, [e.target.name]: e.target.files[0] });
    setNames({
      ...fileNames,
      [e.target.name + "_name"]: e.target.files[0].name,
    });
  };

  return (
    <div>
      <div className="modal-header">
        <h3 className="modal-title">Add New Course</h3>
        <span>Sign up to continue</span>
      </div>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="21 reasons why rails is awesome"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Repo</label>

            <input
              type="text"
              name="repo"
              placeholder="http://github.com/AustineA"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Price</label>

            <input
              type="number"
              name="price"
              placeholder="$250"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Featured Image</label>

            <input
              type="file"
              accept="image/*"
              name="cover"
              placeholder="Email"
              onChange={handleSelected}
              ref={featuredImage}
              style={{ display: "none" }}
            />
            <span
              className="fileHolder"
              onClick={() => {
                featuredImage.current.click();
              }}
            >
              {fileNames.cover_name}
            </span>
          </div>

          <div>
            <label>Video Poster</label>

            <input
              type="file"
              accept="image/*"
              name="poster"
              placeholder="Poster"
              onChange={handleSelected}
              ref={posterImage}
              style={{ display: "none" }}
            />
            <span
              className="fileHolder"
              onClick={() => {
                posterImage.current.click();
              }}
            >
              {fileNames.poster_name}
            </span>
          </div>

          <div>
            <label>Intro Video</label>

            <input
              type="file"
              name="intro"
              accept="video/*"
              placeholder="Intro Video"
              onChange={handleSelected}
              ref={introVideo}
              style={{ display: "none" }}
            />
            <span
              className="fileHolder"
              onClick={() => {
                introVideo.current.click();
              }}
            >
              {fileNames.intro_name}
            </span>
          </div>
          <button type="submit" className="btn-gradient submit-form">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewForm;
