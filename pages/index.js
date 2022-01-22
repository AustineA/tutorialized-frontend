import Banner from "../layouts/home/banner";
import CourseSection from "../layouts/home/courseSection";
// import "../style/app.scss";
// import "../style/homepage.scss";
import Cta from "../layouts/home/slackCta";
import GuideSection from "../layouts/home/guideSection";
import Testimonial from "../layouts/home/testimonial";
import Footer from "../layouts/footer";

const Home = () => {
  return (
    <>
      <Banner />
      <CourseSection />
      <Cta />
      <GuideSection />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
