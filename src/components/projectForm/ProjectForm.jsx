import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { postProjectData } from '../../services/fetches/fetches';
import { useSession } from '../../state/AuthUserProvider';
import UpLoader from '../cloudinary/UpLoader';
import styles from '../../styles/form.css';
import FormInput from '../formInput/FormInput';

const ProjectForm = () => { 

  const history = useHistory();
  const [projectTitle, setProjectTitle] = useState('');
  const [projectSubtitle,  setProjectSubtitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectGenre, setProjectGenre] = useState('');
  const [projectLocState, setProjectLocState] = useState('');
  const [projectLocCity, setProjectLocCity] = useState('');
  const [projectMainImage, setProjectMainImage] = useState('');
  const [projectFundingGoal, setProjectFundingGoal] = useState('');
  const [projectFundingExDate, setProjectFundingExDate] = useState('');
  const [projectRiskChallenge, setProjectRiskChallenge] = useState('');
  const [projectDiversity, setProjectDiversity] = useState('');
  const { session }  = useSession() || {};
  const userId = session.userId;

  const handleSubmitProject = event => {
    event.preventDefault();

    postProjectData({       
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
        history.push('/');
      }); 
  };
      


  return (
    <div className={styles.displayPage}>
      <form className={styles.formContainer} onSubmit={handleSubmitProject}>
        <h2 className={styles.formHeader}>Create a New Film</h2>
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
          id={'projectLocState'}
          type={'text'}
          maxLength={'40'}
          value={projectLocState}
          placeholder={'State'}
          onChangeFn={setProjectLocState}
        />
        <FormInput 
          id={'projectLocCity'}
          type={'text'}
          maxLength={'40'}
          value={projectLocCity}
          placeholder={'City'}
          onChangeFn={setProjectLocCity}
        />
        <UpLoader setProfileImageUrl={setProjectMainImage} />
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
        <button>Post Your Project</button>
      </form>
    </div> 
  );
};
  
export default ProjectForm;
