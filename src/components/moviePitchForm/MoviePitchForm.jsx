<<<<<<< Updated upstream
import React, { useState } from 'react';
import { useDispatch } from '../../state/ProjectProvider';
import { createProject } from '../../actions/projectActions';

const MoviePitchForm = ({ index }) => { 
  const dispatch = useDispatch();
=======
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createProject } from '';

// const ProjectForm = ({ index }) => { 
//   const dispatch = useDispatch();
>>>>>>> Stashed changes

//   const [projectTitle, setProjectTitle] = useState('');
//   const [projectSubtitle, setProjectSubtitle] = useState('');
//   const [projectDescription, setProjectDescription] = useState('');  
//   const [projectGenre, setProjectGenre] = useState('');
//   const [projectLocState, setProjectLocState] = useState('');
//   const [projectLocCity, setProjectLocCity] = useState('');
//   const [projectMainImage, setProjectMainImage] = useState('');
//   const [projectFundingGoal, setProjectFundingGoal] = useState('');
//   const [projectFundingExDate, setProjectFundingExDate] = useState('');
//   const [projectRiskChallenge, setProjectRiskChallenge] = useState('');
//   const [projectDiversity, setProjectDiversity] = useState('');

//   const handleSubmitProject = event => {
//     event.preventDefault();
//     dispatch(createProject({ 
//       projectTitle, 
//       projectSubtitle, 
//       projectDescription,
//       projectGenre,
//       projectLocState,
//       projectLocCity,
//       projectMainImage,
//       projectFundingGoal,
//       projectFundingExDate,
//       projectRiskChallenge,
//       projectDiversity, 
//       index }));  
//   };

//   return (
//     <form onSubmit={handleSubmitProject}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={projectTitle}
//         onChange={({ target }) => setProjectTitle(target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Subtitle"
//         value={projectSubtitle}
//         onChange={({ target }) => setProjectSubtitle(target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Project Description"
//         value={projectDescription}
//         onChange={({ target }) => setProjectDescription(target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Genre"
//         value={projectGenre}
//         onChange={({ target }) => setProjectGenre(target.value)}
//       />        
//       <input
//         type="text"
//         placeholder="State"
//         value={projectLocState}
//         onChange={({ target }) => setProjectLocState(target.value)}
//       />
//       <input
//         type="text"
//         placeholder="City"
//         value={projectLocCity}
//         onChange={({ target }) => setProjectLocCity(target.value)}
//       />
//       <input
//         type="image"
//         placeholder="https://bit.ly/389vFsT"
//         value={projectMainImage}
//         onChange={({ target }) => setProjectMainImage(target.value)}
//       />
//       <input
//         type="number"
//         placeholder="5"
//         value={projectFundingGoal}
//         onChange={({ target }) => setProjectFundingGoal(target.value)}
//       />
//       <input
//         type="date"
//         placeholder="2030-01-01"
//         value={projectFundingExDate}
//         onChange={({ target }) => setProjectFundingExDate(target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Risks and Challenges"
//         value={projectRiskChallenge}
//         onChange={({ target }) => setProjectRiskChallenge(target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Risks and Challenges"
//         value={projectDiversity}
//         onChange={({ target }) => setProjectDiversity(target.value)}
//       />    
//       <button>Create Project</button>
//     </form>  
//   );
// };
  
<<<<<<< Updated upstream
export default MoviePitchForm;
=======
// export default ProjectForm;
>>>>>>> Stashed changes
