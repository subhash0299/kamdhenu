import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top for specific routes if needed
    // Removed automatic scroll to top behavior
  }, [pathname]);

  return null;
};

export default ScrollToTop;