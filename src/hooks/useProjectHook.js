import { useState, useEffect } from 'react';
import { getProjectById } from '../services/fetches/fetches';

export const useProjectHook = id => {
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getProjectById(id)
      .then((project) => {
        setProject(project);
        setLoading(false);
      });
  }, [id]);
  
  return {
    project,
    loading
  };
};
