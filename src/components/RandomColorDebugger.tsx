import { useEffect } from 'react';
import { randomColor } from '../utils/randomColors';
import { useLocation } from 'react-router-dom';

const applyRandomColors = () => {
  const allElements = document.querySelectorAll('*');
  allElements.forEach((element) => {
    (element as HTMLElement).style.border = `1px solid ${randomColor()}`;
  });
};

export const RandomColorDebugger: React.FC = () => {
  const location = useLocation();

  useEffect(() => { applyRandomColors(); }, [location]);

  return null;
};
