/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router';
import { patchProjectData } from '../../services/fetches/fetches';
import { useSession } from '../../state/AuthUserProvider';
import styles from './ProjectForm.css';
import UpLoader from '../cloudinary/UpLoader';

const ProjectEditFormPresentational = ({ project }) => { 

  const history = useHistory();
  const [projectTitle, setProjectTitle] = useState(project.projectTitle);
  const [projectSubtitle,  setProjectSubtitle] = useState(project.projectSubtitle);
  const [projectDescription, setProjectDescription] = useState(project.projectDescription);
  const [projectGenre, setProjectGenre] = useState(project.projectGenre);
  const [projectLocState, setProjectLocState] = useState(project.projectLocState);
  const [projectLocCity, setProjectLocCity] = useState(project.projectLocCity);
  const [projectMainImage, setProjectMainImage] = useState(project.projectMainImage);
  const [projectFundingGoal, setProjectFundingGoal] = useState(project.projectFundingGoal);
  const [projectFundingExDate, setProjectFundingExDate] = useState(project.projectFundingExDate);
  const [projectRiskChallenge, setProjectRiskChallenge] = useState(project.projectRiskChallenge);
  const [projectDiversity, setProjectDiversity] = useState(project.projectDiversity);
  const { session }  = useSession() || {};
  const userId = session.userId;
  const { id } = useParams();
  const projectId = id;

  const handleSubmitProject = event => {
    event.preventDefault();

    patchProjectData({       
      projectId,
      projectTitle, 
      projectSubtitle, 
      projectDescription,
      projectGenre,
      projectLocState,
      projectLocCity,
      projectMainImage,
      projectFundingGoal,
      projectFundingExDate,
      projectRiskChallenge,
      projectDiversity,
      userId
    })
      .then(() => { 
        history.push(`/project-detail/${projectId}`);
      }); 
  };
      
  return (
    <div className={styles.projectPage}>
      <form onSubmit={handleSubmitProject}>
        <input
          type="text"
          placeholder="Title"
          value={projectTitle}
          onChange={({ target }) => setProjectTitle(target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subtitle"
          value={projectSubtitle}
          onChange={({ target }) => setProjectSubtitle(target.value)}
        />
        <input
          type="text"
          placeholder="Project Description"
          value={projectDescription}
          onChange={({ target }) => setProjectDescription(target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={projectGenre}
          onChange={({ target }) => setProjectGenre(target.value)}
          required
        />        
        <input
          type="text"
          placeholder="State"
          value={projectLocState}
          onChange={({ target }) => setProjectLocState(target.value)}
          required
        />
        <input
          type="text"
          placeholder="City"
          value={projectLocCity}
          onChange={({ target }) => setProjectLocCity(target.value)}
          required
        />
        <div>
          <UpLoader setProfileImageUrl={setProjectMainImage} />
        </div>
        <input
          type="number"
          placeholder="0"
          value={projectFundingGoal}
          onChange={({ target }) => setProjectFundingGoal(target.value)}
          required
        />
        <input
          type="date"
          value={projectFundingExDate}
          onChange={({ target }) => setProjectFundingExDate(target.value)}
        />
        <input
          type="text"
          placeholder="Risks and Challenges"
          value={projectRiskChallenge}
          onChange={({ target }) => setProjectRiskChallenge(target.value)}
        />
        <input
          type="text"
          placeholder="Diversity"
          value={projectDiversity}
          onChange={({ target }) => setProjectDiversity(target.value)}
        /> 
        <button>Update Project</button>
      </form>
    </div>
  );
};

ProjectEditFormPresentational.propTypes = {
  project: PropTypes.object.isRequired
};
export default ProjectEditFormPresentational;
