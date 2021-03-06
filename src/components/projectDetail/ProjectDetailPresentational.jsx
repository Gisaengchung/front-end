import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project.css';
import FundingForm from '../fundingForm/FundingForm';
import { Link } from 'react-router-dom';
import ProjectDetailUser from './ProjectDetailUser';

const ProjectDetailPresentational = (
  { project, projectButton, user }
) => {
  return (
    <div className={styles.displayPage}>
      <div className={styles.projectDetailContainer} >
        <div className={styles.projectColumn}>
          <h2 className={styles.projectTitle}>{project.projectTitle}</h2>
          <h3>{project.projectSubtitle}</h3>
          <img 
            className={styles.projectDetailIMG}
            src={project.projectMainImage} 
            alt="Project Image"
          />
          <h5>{`${project.projectLocCity}, ${project.projectLocState}`}</h5>
          <div className={styles.leftAlign}>
            <h4>Description</h4>
            <div>{project.projectDescription}</div>
            <h4>Risks & Challenges</h4>
            <div>{project.projectRiskChallenge}</div>
            <h4>Diversity Commitments</h4>
            <div>{project.projectDiversity}</div>
          </div>
        </div>
        <div className={styles.fundingColumn}>
          <FundingForm />
          <div className={styles.userContainer}>
            <Link 
              to={`/user-detail/${user.userId}`}  
              className={styles.userDetailPresentational}>
              <ProjectDetailUser user={user} />
            </Link>
          </div>
          <div>{projectButton}</div>
        </div>
      </div>
    </div>
  );
};

ProjectDetailPresentational.propTypes = {
  project: PropTypes.object.isRequired,
  projectButton: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default ProjectDetailPresentational;
