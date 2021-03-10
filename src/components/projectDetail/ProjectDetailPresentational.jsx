import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project.css';
import FundingForm from '../fundingForm/fundingForm';
import UserListPresentation from '../userDetail/UserDetailPresentational';

const ProjectDetailPresentational = ({ project, projectButton, user }) => {
  return (
    <div className = {styles.row} >
      <div className={`${styles.projectDetailMain} ${styles.row}`}>
        <div className = {styles.leftColumn} >
          <h1>{ project.projectTitle }</h1>
          <h2>{ project.projectSubtitle }</h2>
          <img className={styles.projectDetailIMG} src={ project.projectMainImage } />
          <h4>{ `${project.projectLocCity}, ${project.projectLocState}` }</h4>
          <div>{ `Genre: ${project.projectGenre}` }</div>
          <div className = {styles.leftAlign}>
            <h2>Description</h2>
            <div>{ project.projectDescription }</div>
            <h2>Risk & Challenges</h2>
            <div>{ project.projectRiskChallenge }</div>
            <h2> Diversity Initiatives</h2>
            <div>{ project.projectDiversity }</div>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div>
          <FundingForm />
        </div>
        <div className = {styles.userContainer}>
          <UserListPresentation  user = { user } />
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
