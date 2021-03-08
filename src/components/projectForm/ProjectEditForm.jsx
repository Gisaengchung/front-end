/* eslint-disable max-len */
import React from 'react';
import { useSession } from '../../state/AuthUserProvider';
import LoadingSpinner from '../../loading/LoadingSpinner';
import ProjectEditFormPresentational from './ProjectEditFormPresentational';
import { useProjectHook } from '../../hooks/useProjectHook';
import { useParams } from 'react-router';


const ProjectEditForm = ({ history }) => {
  const { id } = useParams();
  const { session }  = useSession() || {};
  const userId = session.userId;
  const { project, loading } = useProjectHook(id);

  if(userId !== project.userId) return 'You do not have permission to edit this project';
  if(loading) return <LoadingSpinner />;
  return (
    <>
      <ProjectEditFormPresentational project = { project } />
    </>
  );
};

ProjectEditForm.propTypes = {
};

export default ProjectEditForm;
