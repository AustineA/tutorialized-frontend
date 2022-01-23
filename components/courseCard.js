import React from "react";
import styled from "styled-components";

const Courses = ({ courses }) => {
  const goToCourse = (url) => {
    console.log(url);
  };

  return (
    <Cards>
      {courses.map(({ title, lesson, image, paid, url }, index) => (
        <Card
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {
            goToCourse(url);
          }}
        >
          <Body>
            <Title>{title}</Title>
            <Footer className="card-footer">
              <Lesson>{lesson}</Lesson>
              <Paid>{paid ? "PAID" : "FREE"}</Paid>
            </Footer>
          </Body>
        </Card>
      ))}
    </Cards>
  );
};
export default Courses;

const Card = styled.div`
  width: 300px;
  height: 225px;
  border-radius: 20px;
  padding: 20px;
  margin-right: 80px;
  margin-bottom: 80px;
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.2, 0.8, 0.2, 1),
    background-position 0.6s ease-in;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(83, 255, 215, 0.15);
    background-position: top;
    cursor: pointer;
  }

  & p,
  span {
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 740px) {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 80px;
  margin-bottom: 140px;

  @media (max-width: 740px) {
    padding-left: 20px;
    margin-bottom: 50px;
  }

  @media (min-width: 768px) {
    padding-left: 60px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.h3`
  width: 240px;
  color: white;
  font-family: "SF Pro Display";
  font-size: 30px;
  font-weight: 700;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Lesson = styled.p`
  font-family: "SF Pro Display";
  text-transform: uppercase;
  font-weight: 500;
`;

const Paid = styled.span`
  font-family: "SF Pro Text";
  font-size: 12px;
  font-weight: 500;
  border-radius: 5px;
  border: 2px solid rgba(225, 225, 225, 0.5);
  padding: 2px 5px;
`;
