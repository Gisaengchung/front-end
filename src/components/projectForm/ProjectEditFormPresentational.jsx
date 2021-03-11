/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router';
import { patchProjectData } from '../../services/fetches/fetches';
import { useSession } from '../../state/AuthUserProvider';
import styles from '../../styles/form.css';
import UpLoaderProject from '../cloudinary/UpLoaderProject';
import FormInput from '../formInput/FormInput';

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
    <div className={styles.displayPage}>
      <form className={styles.formContainer} onSubmit={handleSubmitProject}>
        <h2 className={styles.formHeader}>Edit Your Film</h2>
        <FormInput 
          id={'projectTitle'}
          type={'text'}
          maxLength={'50'}
          value={projectTitle}
          placeholder={'Title'}
          onChangeFn={setProjectTitle}
        />
        <FormInput 
          id={'subtitle'}
          type={'text'}
          maxLength={'150'}
          value={projectSubtitle}
          placeholder={'Subtitle'}
          onChangeFn={setProjectSubtitle}
        />
        <FormInput 
          id={'projectDescription'}
          type={'text'}
          value={projectDescription}
          placeholder={'Description'}
          onChangeFn={setProjectDescription}
        />
        <FormInput 
          id={'projectGenre'}
          type={'text'}
          maxLength={'40'}
          value={projectGenre}
          placeholder={'Genre'}
          onChangeFn={setProjectGenre}
        />
        <FormInput 
          id={'projectLocCity'}
          type={'text'}
          maxLength={'40'}
          value={projectLocCity}
          placeholder={'City'}
          onChangeFn={setProjectLocCity}
        />
        <FormInput 
          id={'projectLocState'}
          type={'text'}
          maxLength={'40'}
          value={projectLocState}
          placeholder={'State'}
          onChangeFn={setProjectLocState}
        />
        <div>
          <UpLoaderProject setProjectMainImage={setProjectMainImage} projectMainImage={projectMainImage} />
        </div>
        <FormInput 
          id={'projectFundingGoal'}
          type={'number'}
          value={projectFundingGoal}
          placeholder={'Funding Goal'}
          onChangeFn={setProjectFundingGoal}
        />
        <FormInput 
          id={'projectFundingExDate'}
          type={'date'}
          value={projectFundingExDate}
          placeholder={'Funding Expiration Date'}
          onChangeFn={setProjectFundingExDate}
        />
        <FormInput 
          id={'projectRiskChallenge'}
          type={'text'}
          value={projectRiskChallenge}
          placeholder={'Risks and Challenges'}
          onChangeFn={setProjectRiskChallenge}
        />
        <FormInput 
          id={'projectDiversity'}
          type={'text'}
          value={projectDiversity}
          placeholder={'Diversity Commitments'}
          onChangeFn={setProjectDiversity}
        />
        <button>Update Your Project</button>
      </form>
    </div>
  );
};

ProjectEditFormPresentational.propTypes = {
  project: PropTypes.object.isRequired
};
export default ProjectEditFormPresentational;
