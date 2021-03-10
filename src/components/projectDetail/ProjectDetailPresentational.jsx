import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project.css';
import FundingForm from '../fundingForm/FundingForm';
import UserListPresentation from '../userDetail/UserDetailPresentational';

const ProjectDetailPresentational = (
  { project, projectButton, user }
) => {
  return (
    <div className={styles.projectDetailContainer} >
      <div className={styles.projectColumn}>
        <h2>{project.projectTitle}</h2>
        <h3>{project.projectSubtitle}</h3>
        <img 
          className={styles.projectDetailIMG}
          src={project.projectMainImage} 
          alt="Project Image"
        />
        <h5>{`${project.projectLocCity}, ${project.projectLocState}`}</h5>
        <div className={styles.leftAlign}>
          <div>Genre: {project.projectGenre}</div>
          <h4>Description</h4>
          <div>{project.projectDescription}</div>
          <h4>Risk & Challenges</h4>
          <div>{project.projectRiskChallenge}</div>
          <h4>Diversity Commitments</h4>
          <div>{project.projectDiversity}</div>
        </div>
      </div>
      <div className={styles.fundingColumn}>
        <FundingForm />
        <div className={styles.userContainer}>
          <UserListPresentation user={user} />
        </div>
        <div>{projectButton}</div>
      </div>
    </div>
  );
};

ProjectDetailPresentational.propTypes = {
  project: PropTypes.object.isRequired,
  projectButton: PropTypes.object.isRequired
};

export default ProjectDetailPresentational;
