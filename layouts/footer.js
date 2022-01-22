import React from "react";
import styled from "styled-components";

const Footer = () => (
  <Container>
    <InnerBody>
      <Image src={"/images/Logo_footer.png"} />
      <Links>
        <p>Support</p>
        <span className="separator"></span>
        <ul>
          <a href="#">
            <li>Get Help</li>
          </a>
          <a href="#">
            <li>Forum</li>
          </a>
          <a href="#">
            <li>Contact us</li>
          </a>
          <a href="#">
            <li>Testimonials</li>
          </a>
        </ul>
      </Links>
    </InnerBody>
    <p className="copyright">
      Copyright © 2019 Luna Base Softwares All Rights Reserved.
    </p>
  </Container>
);

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 290px;
  flex-direction: column;
  align-items: center;

  & > p {
    /* text-align: center; */
    margin-top: 80px;
    font-size: 14px;
    color: rgba(225, 225, 225, 0.15);
  }
`;

const InnerBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const Image = styled.img`
  width: 62px;
  height: 50px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  & > .separator {
    margin: 0 20px;
  }

  & > ul {
    display: flex;
    list-style: none;
    font-size: 18px;
  }

  & a {
    color: rgba(225, 225, 225, 0.5);
    text-decoration: none;
    margin-right: 20px;
    transition: color 0.3s ease;
  }

  & a:hover {
    color: #d6fdf4;
  }

  & > p {
    color: #d6fdf4;
    font-size: 24px;
    font-weight: 400;
  }
`;
