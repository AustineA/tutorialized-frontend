import React from "react";
import styled from "styled-components";

const Testimonies = () => (
  <Cards>
    {courses.map(({ text, name, image, jobTitle }, index) => (
      <Card key={index}>
        <Body>
          <Avatar src={image} />
          <div>
            <Text>{text}</Text>
            <div className="footer">
              <Name>{name}</Name>
              <Job>{jobTitle}</Job>
            </div>
          </div>
        </Body>
      </Card>
    ))}
  </Cards>
);
export default Testimonies;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-right: 20px;
`;
const Card = styled.div`
  width: 400px;
  height: 270px;
  border-radius: 20px;
  background-image: linear-gradient(115deg, #cb00dd 55%, #53ffd7 120%);
  padding: 20px;
  margin-right: 80px;
  margin-bottom: 80px;
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: scaleY(1.03) translateY(-10px);
    cursor: pointer;
  }

  &:nth-child(2) {
    background-image: linear-gradient(135deg, #ffd200 0%, #e5696f 100%);
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 80px;
  margin-bottom: 140px;
`;

const Body = styled.div`
  display: flex;
  height: 100%;

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Text = styled.h3`
  width: 240px;
  color: white;
  font-family: "SF Pro Text";
  font-size: 18px;
  font-weight: 400;
`;

const Name = styled.p`
  font-family: "SF Pro Display";
  font-weight: 500;
  font-size: 30px;
  color: rgba(225, 225, 225, 0.8);
  margin-bottom: 10px;

  @media (max-width: 740px) {
    font-size: 20px;
  }
`;

const Job = styled.span`
  font-family: "SF Pro Text";
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: rgba(225, 225, 225, 0.8);

  @media (max-width: 740px) {
    font-size: 15px;
  }
`;

const courses = [
  {
    text: "Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    name: "Jonthan Atiene",
    image: "/images/Course-1.jpg",
    jobTitle: "Frontend Developer at AMANi Art Studio",
  },
  {
    text: "Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo.",
    name: "David Uno",
    image: "/images/Course-2.jpg",
    jobTitle: "Developer at LUNA BASE",
  },
  {
    text: "Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    name: "Austine Amani",
    image: "/images/Course-3.jpg",
    jobTitle: "Designer at PaperCloud",
  },
];
