import React from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { FiArrowUpRight } from "react-icons/fi";
import { projectList } from "../../constants/constants";

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 20px;
  text-align: left;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  color: ${(props) => props.theme.colors.background1};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  // line-height: 1.5;
`;

const ViewButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${(props) => props.theme.colors.background1};
  border-radius: 50%;
  border: none; 
  cursor: pointer;
  color: white;
  font-size: 32px;
  width: 40px; 
  height: 40px; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  transition: color 0.3s;

  &:hover {
    color: ${(props) =>
      props.theme.colors.background1}; 
    background-color: white;
  }
`;

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle>Featured Work</SectionTitle>
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
