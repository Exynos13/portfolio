import { useEffect } from "react";

/**
 * Represents the Loader component.
 * Displays nothing during the loading process.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, [setShowLoader]);

  // Return null to render nothing
  return null;
};

export default Loader;