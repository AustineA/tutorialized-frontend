import "../styles/globals.scss";
import Nav from "../layouts/nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="nav">
        <Nav />
      </nav>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
