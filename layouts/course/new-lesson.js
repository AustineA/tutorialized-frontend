import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import API from "../../data/api";

const NewLesson = () => {
  const [f, setF] = useState({});
  const [fileNames, setNames] = useState({});
  const video = useRef(null);
  const coverImage = useRef(null);

  const dispatch = useDispatch();

  const lessonData = new FormData();

  const handleSubmit = async e => {
    e.preventDefault();
    Object.entries(f).map(([key, value]) => {
      lessonData.append(`lesson[${key}]`, value);
    });

    let currentUrl = window.location.pathname;

    const { data } = await API.post(`${currentUrl}/lessons`, lessonData);
    console.log(data);

    for (var pair of lessonData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    newLesson(data);
  };

  const handleChange = e => {
    setF({ ...f, [e.target.name]: e.target.value.trim() });
  };

  const handleSelected = e => {
    setF({ ...f, [e.target.name]: e.target.files[0] });
    setNames({
      ...fileNames,
      [e.target.name + "_name"]: e.target.files[0].name
    });
  };

  const close = () => {
    dispatch({
      type: "CLOSE"
    });
  };

  const newLesson = lesson => {
    dispatch({
      type: "NEW_LESSON",
      payload: lesson
    });
  };

  return (
    <div className="modal-container">
      <div className="modal-body">
        <span className="modal-close" onClick={close}>
          X
        </span>
        <div>
          <div className="modal-header">
            <h3 className="modal-title">Add New Lesson</h3>
            <span>Sign up to continue</span>
          </div>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Cover Image</label>

                <input
                  type="file"
                  accept="image/*"
                  name="cover"
                  required
                  onChange={handleSelected}
                  ref={coverImage}
                  style={{ display: "none" }}
                />
                <span
                  className="fileHolder"
                  onClick={() => {
                    coverImage.current.click();
                  }}
                >
                  {fileNames.cover_name}
                </span>
              </div>

              <div>
                <label>Video</label>

                <input
                  type="file"
                  name="video"
                  accept="video/*"
                  required
                  onChange={handleSelected}
                  ref={video}
                  style={{ display: "none" }}
                />
                <span
                  className="fileHolder"
                  onClick={() => {
                    video.current.click();
                  }}
                >
                  {fileNames.video_name}
                </span>
              </div>
              <button type="submit" className="btn-gradient submit-form">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLesson;