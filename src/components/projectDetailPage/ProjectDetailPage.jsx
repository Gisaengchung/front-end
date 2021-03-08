import React from 'react';
import ProjectDetailPagePresentational from './ProjectDetailPagePresentational';
import LoadingSpinner from '../../loading/LoadingSpinner';
import { useProjectHook } from '../../hooks/useProjectHook';
import { useParams } from 'react-router';
import { useSession } from '../../state/AuthUserProvider';

export default function ProjectDetail({ history }) {
  const { id } = useParams();
  const { session } = useSession() || {};
  const { loading, project } = useProjectHook(id);

  const handleClick = () => {
    history.push('/project-form');

  };

  let projectButton = '';

  try {
    projectButton = 
    (id === session.userId) ? 
      <button onClick={handleClick}>Edit Project</button> : <div></div>;
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