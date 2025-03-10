import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./ScrollToTop.css";

interface ScrollToTopProps {} // No props needed

const ScrollToTop: React.FC<ScrollToTopProps> = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top">
        <ArrowUpwardIcon fontSize="large" />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
