import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import store, { actions } from "../../store/store";
import VideoHolder from "../../layouts/course/videoSection";
import Playlist from "../../layouts/course/playlist";
import Author from "../../layouts/course/author";
import Heading from "../../components/heading";
import Note from "../../layouts/course/lessonNote";
import Footer from "../../layouts/footer";
import API, { injectScript } from "../../services/api";
import cookies from "next-cookies";
import { useRouter } from "next/router";

const Course = () => {
  const { asPath, pathname } = useRouter();
  const router = useRouter();
  const state = useSnapshot(store);
  const [course, setCourse] = useState(state.course);

  const dispatch = (action) => {
    actions(action);
  };

  const nowPlaying = () => {
    dispatch({
      type: "NOW_PLAYING",
      payload: { video: course.intro, canPlay: false, cover: course.cover },
    });
  };

  useEffect(() => {
    nowPlaying();
  }, [course]);

  useEffect(async () => {
    if (loggedIn !== "user_is_logged_in") {
      dispatch({
        type: "OPEN",
        payload: "SIGNIN",
      });
      router.push("/");
      return;
    }

    const { data } = await API.get(pathname, {
      headers: { Authorization: `Bearer ${state.token}` },
    });
    setCourse(data);
    dispatch({
      type: "LOAD_COURSE",
      payload: data,
    });
  }, []);

  useEffect(() => {
    injectScript("https://js.stripe.com/v3/")
      .then(() => {
        console.log("Stripe loaded!");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="course-inner">
        <VideoHolder />
        <Playlist Lessons={course.lessons} title={course.title} />
      </div>
      <Author
        author={course.author}
        author_avatar={course.author_avatar}
        github={course.github}
        download_url={course.download_url}
        author_url={course.author_url}
        isAuthor={course.isAuthor}
        purchased={course.purchased}
        price={course.price}
        currency={course.currency}
      />
      <Heading title="Lesson Note" />
      <Note note={course.description} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps(ctx) {
  let { IS_USER_LOGGED_IN: loggedIn } = cookies(ctx);
  loggedIn ||= null;
  return {
    props: { loggedIn }, // will be passed to the page component as props
  };
}

export default Course;
