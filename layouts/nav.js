import React, { useState, useEffect } from "react";
import Modal from "./auth/modal";
// import { useSelector, useDispatch } from "react-redux";
import { useSnapshot } from "valtio";
import Link from "next/link";
import API from "../services/api";
import store, { actions } from "../store/store";

const Nav = () => {
  const isUser = false;
  const state = useSnapshot(store);

  const [isAuth, setAuth] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [firsName, setName] = useState("Austine");
  const [isAuthor, setAuthor] = useState(false);

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

    // await API.get("/logout");
    console.log("logout");
    // window.location.href = `/`;
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
                <li>
                  Account <span>Manage your account</span>
                </li>
                {isAuthor && (
                  <li className="new-course">
                    <Link href="/courses/new">
                      <a>
                        New Course <span>Add a new course</span>
                      </a>
                    </Link>
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
