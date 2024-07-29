import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "./pages/loader/loader";
import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/portfolio/Portfolio";
import ProjectDetails from "./pages/portfolio/[project]/ProjectDetails";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import AboutMe from "./components/AboutMe";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const personalDetails = {
    name: "Alex Thomas",
    location: "Melbourne",
    email: "alexpeterthomas@gmail.com",
    brand:
      "My unique blend of Analytical thinking, innovation and consulting experience leads me to create the most effective recipes for leveraging data to drive actionable insights and impactful decisions.",
  };

  const location = useLocation();

  const [showLoader, setShowLoader] = useState(true);
  const [originalTitle, setOriginalTitle] = useState();

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowLoader(false);
    }

    if (!originalTitle) {
      setOriginalTitle(document.title);
    }

    const handleTabChange = () => {
      if (document.hidden) {
        document.title = "Alex Thomas";
      } else {
        document.title = originalTitle;
      }
    };

    window.addEventListener("visibilitychange", handleTabChange);
    return () => window.removeEventListener("visibilitychange", handleTabChange);
  }, [location, originalTitle]);

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Alex Thomas Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Alex Thomas, a data-driven consultant." />
        <meta property="og:image" content="https://alexpeterthomas.xyz/projectImages/screenshot2.png" />
        <meta property="og:url" content="https://alexpeterthomas.xyz" />
        <meta property="og:type" content="website" />
        <title>Alex Thomas Portfolio</title>
      </Helmet>
      {showLoader ? (
        <Loader setShowLoader={setShowLoader} />
      ) : (
        <>
          <Header />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume brand={personalDetails.brand} />} />
            <Route path="/AboutMe" element={<AboutMe brand={personalDetails.brand} />} />
            <Route
              path="/contact"
              element={<Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />}
            />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="/portfolio/:projectTitle" element={<ProjectDetails />} />
            <Route path="*" element={<Navigate to="/page-not-found" />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
