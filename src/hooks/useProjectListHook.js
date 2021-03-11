import { useState, useEffect } from 'react';
import { getAllProjects } from '../services/fetches/fetches';

export const useProjectListHook = () => {
  const [projects, setProjects]  = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getAllProjects()
      .then((projects) => {
        setProjects(projects);
        setLoading(false);
      });
  }, []);
  
  return {
    projects, 
    loading
  };
};
