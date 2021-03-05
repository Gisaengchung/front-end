import React, { useState } from 'react';
import useProjectForm from '../../hooks/useProjectForm';

const ProjectForm = () => { 
  const {
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
    setProjectTitle,
    setProjectSubtitle,
    setProjectDescription,
    setProjectGenre,
    setProjectLocState,
    setProjectLocCity,
    setProjectMainImage,
    setProjectFundingGoal,
    setProjectFundingExDate,
    setProjectRiskChallenge,
    setProjectDiversity,
    handleSubmitProject
  } = useProjectForm();

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
      <button>Create Project</button>
    </form>  
  );
};
  
export default ProjectForm;
