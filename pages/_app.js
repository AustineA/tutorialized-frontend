import "../styles/globals.scss";
import Nav from "../layouts/nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="nav">
        <Nav />
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
