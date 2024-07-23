
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpeg";

/**
 * Represents the About Me section.
 * Displays information about the user.
 * Not currently in use.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about"  >
      <div className="aboutContainer container" style={{ maxWidth: '3000px', padding: '10px' }}>
        <div className="row">
          <motion.div
            className="personalImage col-1 col-lg-6"
            ref={ref} 
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }} 
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>An enthusiastic Data Science Professional</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  I’m a Data Scientist with a degree with distinction in <span style={{ color: "var(--hl-color)" }}> Master's of Data Science</span> from <span style={{ color: "var(--hl-color)" }}> RMIT University</span>. My journey into Data Science was driven by a strong passion for generating insights and storytelling through data. 
                </motion.p>
                <br />

                <motion.p variants={paragraphVariants}>
                Through this course, I can say am a <span style={{ color: "var(--hl-color)" }}>proud data enthusiast</span> with a strong foundation in coding, data visualization, statistical analysis, and machine learning. I improved my abilities through various tools and techniques(Power BI, Tableau) for extracting meaningful insights from data and making <span style={{ color: "var(--hl-color)" }}>data-driven decisions</span>.
                </motion.p>
                <br />  

                <motion.p variants={paragraphVariants}>
                During my undergraduate years, my enthusiasm for coding led me to learn multiple programming languages, ultimately earning a <span style={{ color: "var(--hl-color)" }}>Bachelor's degree in Computer Engineering</span>. This experience deepened my coding skills and introduced me to Python. My curiosity drove me to explore online courses in machine learning, culminating in a final year project where I developed a plant detection model and integrated it with an automated car.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                My first professional experience with data was as an SAP consultant at Larsen & Toubro Infotech, focusing on system monitoring. There, I realized how data could be transformed into actionable insights for monthly <span style={{ color: "var(--hl-color)" }}>analytical reports</span>, enhancing system landscape tracking and meeting SLA contracts.
                </motion.p>
                <br /> 

                
                <motion.p variants={paragraphVariants}>
                As a graduate data scientist with AMW Tech, I gained <span style={{ color: "var(--hl-color)" }}>hands-on experience with data</span> by developing an ethical audience generator for various social media platforms. I learned to navigate APIs from different social media sites, understanding the complexities and restrictions of data collection. Preprocessing this live data was essential before using transformers to harness the power of <span style={{ color: "var(--hl-color)" }}>NLP</span> for analyzing social media sentiment.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                My education and practical experience have equipped me with the essential skills to transform data into actionable insights.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                My goal is to leverage the power of data to enhance actionable decisions.
                </motion.p>
                <br />


              </motion.div>
               

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
