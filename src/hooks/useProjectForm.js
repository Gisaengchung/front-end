import React, { useState } from 'react';
import { useDispatch } from '../../state/ProjectProvider';
import { createProject } from '../../actions/projectActions';


export default function useProjectForm() {
  const dispatch = useDispatch();

  const [projectTitle, setProjectTitle] = useState('');
  const [projectSubtitle, setProjectSubtitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');  
  const [projectGenre, setProjectGenre] = useState('');
  const [projectLocState, setProjectLocState] = useState('');
  const [projectLocCity, setProjectLocCity] = useState('');
  const [projectMainImage, setProjectMainImage] = useState('');
  const [projectFundingGoal, setProjectFundingGoal] = useState('');
  const [projectFundingExDate, setProjectFundingExDate] = useState('');
  const [projectRiskChallenge, setProjectRiskChallenge] = useState('');
  const [projectDiversity, setProjectDiversity] = useState('');

  const handleSubmitProject = event => {
    event.preventDefault();
    dispatch(createProject({ 
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
    }));  
  };

  return {
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
  };
}
