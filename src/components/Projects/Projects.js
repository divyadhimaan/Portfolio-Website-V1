import React from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { FiArrowUpRight } from "react-icons/fi";
import { projectList } from '../../constants/constants';


const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px 0 20px;
  margin-bottom: 40px;
`;

const ProjectCard = styled.div`
  position: relative;
  background: white;
  width: 100%; 
  height: 400px; 
  border-radius: 10px;
  overflow: hidden; 
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);


  @media (max-width: 1200px) {
    height: 360px;
  }

  @media (max-width: 768px) {
    height: 320px;
  }

  @media (max-width: 480px) {
    height: 280px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProjectInfo = styled.div`
  position: absolute;
  bottom: 0; 
  left: 50%;
  transform: translateX(-50%); 
  width: 100%; 
  padding: 10px;
  background: ${(props) => `rgba(${parseInt(props.theme.colors.background1.slice(1, 3), 16)}, 
  ${parseInt(props.theme.colors.background1.slice(3, 5), 16)}, 
  ${parseInt(props.theme.colors.background1.slice(5, 7), 16)}, 0.8)`}; 

  border-radius: 0 0 10px 10px; 
  text-align: center; 
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);

  
  height: 50px; 
  
  
  /* Show full height on hover */
  ${ProjectCard}:hover & {
    height: auto;
    background: ${(props) => `rgba(${parseInt(props.theme.colors.background1.slice(1, 3), 16)}, 
                                  ${parseInt(props.theme.colors.background1.slice(3, 5), 16)}, 
                                  ${parseInt(props.theme.colors.background1.slice(5, 7), 16)}, 1)`}; 
   
  }

  @media (max-width: 480px) {
    ${ProjectCard}:hover & {
      opacity: 1;
      height: 280px;
      transition: opacity 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
  color: white;
`;

const ProjectDescription = styled.p`
  font-size: 14px; 
  color: white; 
  opacity: 0; 
  transition: opacity 0.3s ease; 
  text-align: center;
  
  ${ProjectCard}:hover & {
    opacity: 1; 
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
    <Section id="projects">
      <SectionTitle >Featured Work</SectionTitle>
      <ProjectContainer>
        {/* {projectList.map((project, index) => (
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
        ))} */}
      </ProjectContainer>
    </Section>
  );
};

export default Projects;
