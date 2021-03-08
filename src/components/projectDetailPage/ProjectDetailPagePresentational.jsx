import React from 'react';
import PropTypes from 'prop-types';

const ProjectDetailPagePresentational = ({ project }) => {
  console.log(project);
  return (
    <>
      <div>{project.projectTitle }</div>
      <div>{ project.projectSubtitle }</div>
      <div>{ project.projectDescription }</div>
      <div>{ project.projectGenre }</div>
      <div>{ project.projectLocState }</div>
      <div>{ project.projectLocCity }</div>
      <div>{ project.projectMainImage }</div>
      <div>{ project.projectFundingGoal }</div>
      <div>{ project.projectFundingExDate }</div>
      <div>{ project.projectRiskChallenge }</div>
      <div>{ project.projectDiversity }</div>
    </>
  );
};

ProjectDetailPagePresentational.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectDetailPagePresentational;

