import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProjectListPagePresentational.css';


const ProjectListPagePresentational = ({ projects }) => {
  const projectElements = projects.map(project => (
    <li key={project.projectId}>
      <Link to={`/project-detail/${project.projectId}`}>
        <div className={`${styles.userListContainer}`} >
          <img className = {styles.listImage} src = {project.projectMainImage} />
          <div className={styles.column}>
            <div>{project.projectTitle}</div> 
            <div>{project.subtitle}</div> 
            <div>{project.projectGenre}</div> 
          </div>
          <div>
            <div>{project.projectFundingExDate}</div>
            <div>{project.projectFundingGoal}</div>
          </div>
        </div>
      </Link>
    </li>
  ));

  return (
    <ul className={styles.ulList} >
      {projectElements}
    </ul>
  );
};

ProjectListPagePresentational.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }))
};

export default ProjectListPagePresentational;

