import React from 'react';
import ProjectListPagePresentational from './ProjectListPagePresentational';
import { useProjectListHook } from '../../hooks/useProjectListHook';
import LoadingSpinner from '../../loading/LoadingSpinner';

export default function UserList() {
  const { loading, projects } = useProjectListHook();

  if(loading) return <LoadingSpinner />;
  return <ProjectListPagePresentational projects={projects} />;
}
