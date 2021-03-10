import React from 'react';
import ProjectDetailPagePresentational from './ProjectDetailPagePresentational';
import LoadingSpinner from '../../loading/LoadingSpinner';
import { useProjectHook } from '../../hooks/useProjectHook';
import { useParams } from 'react-router';
import { useSession } from '../../state/AuthUserProvider';
import styles from './Project.css';

export default function ProjectDetail({ history }) {
  const { id } = useParams();
  const { session } = useSession() || {};
  const { loading, project } = useProjectHook(id);
  const projUserId = project.userId;

  const handleClick = () => {
    history.push(`/project-edit/${project.projectId}`);
  };

  let projectButton = '';

  try {
    projectButton = 
    (session.userId === projUserId) ? 
      <button 
        className={styles.editProjectButton} 
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
      <ProjectDetailPagePresentational project={project} />
      <div>{projectButton}</div>
    </>
  
  );
}
