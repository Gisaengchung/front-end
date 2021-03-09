import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project.css';

const ProjectDetailPagePresentational = ({ project }) => {
  console.log(project);
  return (
    <div className={styles.projectDetailMain}>
      <img className={styles.projectDetailIMG} src={ project.projectMainImage } />
      <div>{ project.projectTitle }</div>
      <div>{ project.projectSubtitle }</div>
      <div>{ project.projectDescription }</div>
      <div>{ project.projectGenre }</div>
      <div>{ project.projectLocState }</div>
      <div>{ project.projectLocCity }</div>
      <div>{ project.projectFundingGoal }</div>
      <div>{ project.projectFundingExDate }</div>
      <div>{ project.projectRiskChallenge }</div>
      <div>{ project.projectDiversity }</div>
    </div>
  );
};

ProjectDetailPagePresentational.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectDetailPagePresentational;

