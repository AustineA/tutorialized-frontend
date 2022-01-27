import React, { useState, useEffect } from "react";
import Modal from "./auth/modal";
import { useRouter } from "next/router";
import { useSnapshot } from "valtio";
import Link from "next/link";
import store, { actions } from "../store/store";

const Nav = () => {
  const state = useSnapshot(store);

  const [isAuth, setAuth] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [firsName, setName] = useState("Austine");
  const [isAuthor, setAuthor] = useState(false);

  const router = useRouter();

  const isActive = state.isActive;
  const dispatch = (action) => {
    actions(action);
  };

  const openMenu = () => {
    setOpen(!isOpen);
  };

  const logOut = async () => {
    setAuth(false);
    setOpen(!isOpen);
    localStorage.clear();
    router.push("/");
  };

  const signin = () => {
    dispatch({
      type: "OPEN",
      payload: "SIGNIN",
    });
    // store.isActive = true;
    console.log(state.isActive);
  };

  const signUp = () => {
    dispatch({
      type: "OPEN",
      payload: "SIGNUP",
    });
  };

  const gotoCourse = () => {
    // window.location.href = `/${firsName}/courses`;
  };

  const newCourse = () => {
    openMenu();
    router.push("/courses/new");
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      const user = JSON.parse(userInfo);
      store.userInfo = user;
    }
  }, []);

  useEffect(() => {
    setAuth(state.userInfo);
    setName(state.userInfo?.firstName);
    setAuthor(state.userInfo?.author);
  }, [state.userInfo]);

  return (
    <>
      <Link href="/">
        <a className="logo">
          <img src={"/images/Logo.svg"} />
        </a>
      </Link>

      <ul>
        {Links.map((link, index) => (
          <li key={index}>
            <Link href={link.link}>
              <a> {link.name}</a>
            </Link>
          </li>
        ))}
        {!isAuth && (
          <a
            href="#"
            className={`get-started nav-get-started`}
            onClick={signUp}
          >
            <li>Get Started</li>
          </a>
        )}
      </ul>
      <div className="right-menu">
        {isAuth ? (
          <span className="logged-in" onClick={openMenu}>
            {!isOpen ? firsName[0].toUpperCase() : "X"}
          </span>
        ) : (
          <a href="#" onClick={signin}>
            <img src={"/images/user_icon.svg"} /> Sign in
          </a>
        )}

        {isOpen && (
          <div className="drop-down">
            <div className="drop-down-inner">
              <ul>
                <li>
                  Hi, {firsName} <span>Welcome back!</span>
                </li>
                <li onClick={gotoCourse}>
                  My courses <span>All courses you paid for</span>
                </li>
                {isAuthor && (
                  <li className="new-course" onClick={newCourse}>
                    New Course
                    <span>Add a new course</span>
                  </li>
                )}
                <li onClick={logOut}>Logout</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {isActive && <Modal />}
    </>
  );
};

export default Nav;

const Links = [
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: "Guides",
    link: "#",
  },
  {
    name: "Community",
    link: "#",
  },
];
