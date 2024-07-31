import PageHeader from "../../components/PageHeader";
import Button from '../../components/Button';
import Footer from "../../components/Footer";

const Resume = ({ brand }) => {
  // const resumeLink = ''; // Replace with the actual link
  const Downloadlink = process.env.PUBLIC_URL + "/pdf/Resume.pdf";
  
  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise" />
      <p className="brand">{brand}</p>

      {/* Display buttons in a row with gap */}
      <div className="button-row">
        <a href={Downloadlink} className="view-cv-link" target="_blank" rel="noopener noreferrer">
          <Button name="View CV" color="#3498db" />
        </a>
        <div className="button-gap" />
        <a href={Downloadlink} className="Download-cv-link" download="Resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button name="Download CV" color="#2ecc71" />
        </a>
        <br />
      </div>
      <div style={{ height: '100px' }}></div> {/* Adjust the height as needed for spacing */}
      
      <Footer />
    </section>
  );
};

export default Resume;
