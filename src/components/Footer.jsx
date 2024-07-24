import { useState, useEffect } from "react";
import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  // State to hold GitHub information
//  const [gitHubInfo, setGitHubInfo] = useState({
//    stars: null,
//    forks: null,
//  });

  useEffect(() => {
    // Fetch GitHub repository information
    fetch("https://api.github.com/repos/mdyeates/my-portfolio")
      .then((res) => res.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  // Variants for button animation
//  const buttonVariants = {
//    hover: {
//      scale: 1.05,
//    },
//    tap: {
//      scale: 1,
//    },
//  };

  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      {/* GitHub repository link */}
      <a className="footer-link" href="https://github.com/mdyeates/my-portfolio">
        <p>
          <span>▷</span> Template by Michael Yeates &copy; {currentYear}
        </p>
      </a>
    </footer>
  );
};

export default Footer;
