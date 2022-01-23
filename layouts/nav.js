import React, { useState, useEffect } from "react";
import Modal from "./auth/modal";
// import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import API from "../data/api";

const Nav = () => {
  const isUser = false;

  const [isAuth, setAuth] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [firsName, setName] = useState("Austine");
  const [isAuthor, setAuthor] = useState(false);

  const isActive = false;
  const dispatch = false;

  const openMenu = () => {
    setOpen(!isOpen);
  };

  const logOut = async () => {
    setAuth(false);
    setOpen(!isOpen);

    await API.get("/logout");
    // window.location.href = `/`;
  };

  const newCourse = () => {
    // window.location.href = `/courses/new`;
  };

  const signin = () => {
    dispatch({
      type: "OPEN",
      payload: "SIGNIN",
    });
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

  useEffect(() => {
    setAuth(isUser);
    if (isUser) {
      setName(isUser.fName);
      setAuthor(isUser.author);
    }
  }, []);

  const activeLink = (path) => {
    let currentPath = "/";
    return path === currentPath ? "active-link" : "";
  };

  return (
    <>
      <Link href="/">
        <a className="logo">
          <img src={"/images/Logo.svg"} />
        </a>
      </Link>

      <ul>
        {Links.map((link, index) => (
          <li key={index} className={activeLink(link.link)}>
            <Link href={link.link}>
              <a> {link.name}</a>
            </Link>
          </li>
        ))}
        {!isAuth && (
          <a
            href="#"
            className={`get-started ${activeLink} nav-get-started`}
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
                <li>
                  Account <span>Manage your account</span>
                </li>
                {isAuthor && (
                  <li onClick={newCourse} className="new-course">
                    New Course <span>Add a new course</span>
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
    link: "/guides",
  },
  {
    name: "Community",
    link: "#",
  },
];
