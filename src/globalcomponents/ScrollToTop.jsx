import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the route changes
  }, [pathname]);

  return null; // No UI component is returned
};

export default ScrollToTop;
