import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '';

const ProjectForm = ({ index }) => { 
  const dispatch = useDispatch();

  const [projectTitle, setProjectTitle] = useState('');
  const [projectSubtitle, setProjectSubtitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');  
  const [projectGenre, setProjectGenre] = useState('');
  const [projectState, setProjectState] = useState('');
  const [projectCity, setProjectCity] = useState('');
  const [projectMainImage, setProjectMainImage] = useState('');
  const [projectFundingGoal, setProjectFundingGoal] = useState('');
  const [projectFundingExDate, setProjectFundingExDate] = useState('');
  const [projectRiskChallenge, setProjectRiskChallenge] = useState('');
  const [projectDiversityCommit, setProjectDiversityCommit] = useState('');

  const handleSubmitProject = event => {
    event.preventDefault();
    dispatch(createProject({ 
      projectTitle, 
      projectSubtitle, 
      projectDescription,
      projectGenre,
      projectState,
      projectCity,
      projectMainImage,
      projectFundingGoal,
      projectFundingExDate,
      projectRiskChallenge,
      projectDiversityCommit, 
      index }));  
  };

  return (
    <form onSubmit={handleSubmitProject}>
      <input
        type="text"
        placeholder="Project Title"
        value={projectTitle}
        onChange={({ target }) => setProjectTitle(target.value)}
      />

      <button>Create Project</button>
    </form>  
  );
};
  
export default ProjectForm;
