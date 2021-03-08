import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useHistory, useParams } from 'react-router';
import { patchProjectData } from '../../services/fetches/fetches';
import { useSession } from '../../state/AuthUserProvider';

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
    <form onSubmit={handleSubmitProject}>
      <input
        type="text"
        placeholder="Title"
        value={projectTitle}
        onChange={({ target }) => setProjectTitle(target.value)}
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
      />        
      <input
        type="text"
        placeholder="State"
        value={projectLocState}
        onChange={({ target }) => setProjectLocState(target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={projectLocCity}
        onChange={({ target }) => setProjectLocCity(target.value)}
      />
      <input
        type="image"
        placeholder="https://bit.ly/389vFsT"
        value={projectMainImage}
        onChange={({ target }) => setProjectMainImage(target.value)}
      />
      <input
        type="number"
        placeholder="5"
        value={projectFundingGoal}
        onChange={({ target }) => setProjectFundingGoal(target.value)}
      />
      <input
        type="date"
        placeholder="2030-01-01"
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
        placeholder="Diversity Baby"
        value={projectDiversity}
        onChange={({ target }) => setProjectDiversity(target.value)}
      />    
      <button>Update Project</button>
    </form>  
  );
};

ProjectEditFormPresentational.propTypes = {
  project: PropTypes.object.isRequired
};
export default ProjectEditFormPresentational;
