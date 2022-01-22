import React from "react";
import styled from "styled-components";

const Guides = () => (
  <Cards>
    {courses.map(({ title, caption, image }, index) => (
      <Card
        key={index}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "bottom",
        }}
      >
        <Body>
          <Title>{title}</Title>
          <Footer className="card-footer">
            <Caption>{caption}</Caption>
          </Footer>
        </Body>
      </Card>
    ))}
  </Cards>
);
export default Guides;

const Card = styled.div`
  width: 550px;
  height: 350px;
  border-radius: 40px;
  padding: 40px;
  margin-right: 80px;
  margin-bottom: 80px;
  transform: scaleY(1);
  transition: transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: scaleY(1.03) translateY(-20px);
    /* box-shadow: 0 10px 20px rgba(83, 255, 215, 0.15); */
    cursor: pointer;
  }

  @media (max-width: 740px) {
    width: 270px;
    height: 300px;
    margin-right: 10px;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 30px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 80px;

  @media (max-width: 740px) {
    padding-left: 10px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.h3`
  /* width: 430px; */
  color: white;
  font-family: "SF Pro Display";
  font-size: 50px;
  font-weight: 700;
  @media (max-width: 740px) {
    font-size: 40px;
  }
`;

const Footer = styled.div`
  /* width: 430px; */
  height: 90px;
`;

const Caption = styled.p`
  font-family: "SF Pro Text";
  font-weight: 400;
  font-size: 25px;
  text-shadow: 0px 5px 15px rgba(0, 0, 0, 0.16);
  color: rgba(225, 225, 225, 0.9);

  @media (max-width: 740px) {
    font-size: 20px;
  }
`;

const courses = [
  {
    title: "How to use Git and Github",
    caption:
      "Beginners guide on why and how to setup and use git and GitHub to version your project.",
    image: "/images/Guide-1.jpg",
  },
  {
    title: "How to host your website on the web",
    caption: "Learn how to host your static website on cpanel.",
    image: "/images/Guide-2.jpg",
  },
];
