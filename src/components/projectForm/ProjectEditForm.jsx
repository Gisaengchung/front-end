// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { postProjectData } from '../../services/fetches/fetches';
// import { useAuthError, useSession } from '../../state/AuthUserProvider';
// import { useHistory } from 'react-router-dom';


// const ProjectFormPresentational = ({ project }) => {
//   console.log(project, 'test');
//   const history = useHistory();

//   const error = useAuthError();
//   const { session, setSession }  = useSession() || {};

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
//     postProjectData({     
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
//     })
//       .then((project) => { 
//         setSession(project);
//         history.push(`/project/${project.id}`);}); 
//   };
  
//   // ---------------------------------------------------------------------

//   return (
//     <>
//       <h2>Edit Your Project</h2>
//       {error && <p>{error.message}</p>}
//       <form onSubmit={handleSubmitProject}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={projectTitle}
//           onChange={({ target }) => setProjectTitle(target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Subtitle"
//           value={projectSubtitle}
//           onChange={({ target }) => setProjectSubtitle(target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Project Description"
//           value={projectDescription}
//           onChange={({ target }) => setProjectDescription(target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Genre"
//           value={projectGenre}
//           onChange={({ target }) => setProjectGenre(target.value)}
//         />        
//         <input
//           type="text"
//           placeholder="State"
//           value={projectLocState}
//           onChange={({ target }) => setProjectLocState(target.value)}
//         />
//         <input
//           type="text"
//           placeholder="City"
//           value={projectLocCity}
//           onChange={({ target }) => setProjectLocCity(target.value)}
//         />
//         <input
//           type="image"
//           placeholder="https://bit.ly/389vFsT"
//           value={projectMainImage}
//           onChange={({ target }) => setProjectMainImage(target.value)}
//         />
//         <input
//           type="number"
//           placeholder="5"
//           value={projectFundingGoal}
//           onChange={({ target }) => setProjectFundingGoal(target.value)}
//         />
//         <input
//           type="date"
//           placeholder="2030-01-01"
//           value={projectFundingExDate}
//           onChange={({ target }) => setProjectFundingExDate(target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Risks and Challenges"
//           value={projectRiskChallenge}
//           onChange={({ target }) => setProjectRiskChallenge(target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Diversity Baby"
//           value={projectDiversity}
//           onChange={({ target }) => setProjectDiversity(target.value)}
//         />    
//         <button>Create Project</button>
//       </form>  

//     </>
//   );
// };

// ProjectFormPresentational.propTypes = {
//   project: PropTypes.object.isRequired
// };

// export default ProjectFormPresentational;

