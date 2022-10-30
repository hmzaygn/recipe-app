import React from "react";
import AboutPhoto from "../../assets/coding.svg";
import Navbar from "../../components/navbar/Navbar";
import AboutContainer, { AboutImg, DescContainer } from "./About.styled";
const About = () => {
  return (
    <>
      <Navbar />
      <AboutContainer>
        <AboutImg src={AboutPhoto} alt="" />
        <DescContainer>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            nulla quam ad tenetur, excepturi culpa neque hic at voluptatem ex
            facilis, rerum voluptas, eos ratione molestiae soluta nisi?
            Doloremque, enim.
          </p>
        </DescContainer>
      </AboutContainer>
    </>
  );
};

export default About;
