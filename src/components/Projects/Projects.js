import React from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { FiArrowUpRight } from "react-icons/fi";
import { projectList } from '../../constants/constants';


const ProjectContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 0 20px 0 20px;
  scroll-behavior: smooth;
  margin-bottom: 

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  background: white;
  width: 300px; /* Initial width for rectangular shape */
  height: 400px; /* Initial height for rectangular shape */
  border-radius: 10px;
  overflow: hidden; /* Ensure content stays inside the card */
  flex-shrink: 0; /* Prevent shrinking */
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    width: 400px; /* Expand to square shape on hover */
    height: 400px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute; /* Absolute positioning to fill the card */
  top: 0;
  left: 0;
`;

const ProjectInfo = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  width: 90%; /* Adjust width as needed */
  padding: 10px; /* Padding inside the div */
  background: white; /* Solid white background */
  border-radius: 10px; /* Match the card's rounded corners */
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
  text-align: center; /* Center the text inside */

  /* Default height for title only */
  height: 50px; /* Adjust as needed */
  
  /* Show full height on hover */
  ${ProjectCard}:hover & {
    height: auto; /* Adjust for title + description */
  }
`;

const ProjectTitle = styled.h3`
  font-size: 20px; /* Adjusted font size for better fit */
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.background1};
`;

const ProjectDescription = styled.p`
  font-size: 14px; /* Adjusted font size for better fit */
  color: #555; /* Changed text color for better readability */
  opacity: 0; /* Hide description by default */
  transition: opacity 0.3s ease; /* Smooth transition for opacity */
  
  /* Show the description on hover */
  ${ProjectCard}:hover & {
    opacity: 1; /* Show the description when card is hovered */
  }
`;

const ViewButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border-radius: 50%;
  border: none; /* No border */
  cursor: pointer;
  color: grey; /* Button color */
  font-size: 32px; /* Increased icon size */
  width: 40px; /* Set width for button */
  height: 40px; /* Set height for button */
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  transition: color 0.3s;

  &:hover {
    color: white; /* Darker shade on hover */
    background-color: ${(props) => props.theme.colors.background1};
  }
`;

const Projects = () => {

  return (
    <Section nopadding id="projects">
      <SectionTitle main>Featured Work</SectionTitle>
      <ProjectContainer>
        {projectList.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ViewButton onClick={() => window.open(project.link, "_blank")}>
              <FiArrowUpRight />
            </ViewButton>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectContainer>
    </Section>
  );
};

export default Projects;
