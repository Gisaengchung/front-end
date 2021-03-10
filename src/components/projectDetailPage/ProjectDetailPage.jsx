import React from 'react';
import ProjectDetailPagePresentational from './ProjectDetailPagePresentational';
import LoadingSpinner from '../../loading/LoadingSpinner';
import { useProjectHook } from '../../hooks/useProjectHook';
import { useParams } from 'react-router';
import { useSession } from '../../state/AuthUserProvider';
import styles from './Project.css';
import { useUserDetail } from '../../hooks/userHook';


export default function ProjectDetail({ history }) {
  const { id } = useParams();
  const { session } = useSession() || {};
  const { loading, project } = useProjectHook(id);
  const { user } = useUserDetail(project.userId);
  const projUserId = project.userId;

  const handleClick = () => {
    history.push(`/project-edit/${project.projectId}`);
  };

  let projectButton = '';

  try {
    projectButton = 
    (session.userId === projUserId) ? 
      <button 
        className={`${styles.editProjectButton} ${styles.width}`} 
        onClick={handleClick}>Edit Project
      </button> 
      : 
      <div></div>;
  }
  catch{
    projectButton = '';
  }
  if(loading) return <LoadingSpinner />;
  return (
    <>
      <ProjectDetailPagePresentational 
        project={project} 
        projectButton = {projectButton} 
        user = {user}  
      />
      
    </>
  
  );
}
