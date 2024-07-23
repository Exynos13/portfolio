import PageHeader from "../../components/PageHeader";
import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";

/**
 *
 * @component
 * @param {string} name - The name of the contact person.
 */

const AboutMeinfo = ({ name }) => {
  return (
    <>
      {/* Main AboutMe Page */}
      <main className="AboutMe container">
        {/* Display the page header */}
        <PageHeader title="About Me" description="My Journey" />
        <div className="about-me-content container">
          <AboutMe name={name} />
        </div>
        
        
      </main>
      <Footer />
    </>
  );
};

export default AboutMeinfo;
