import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutSection from "./components/AboutSection";
import ExpertSection from "./components/ExpertSection";
import LeftSection from "./components/LeftSection";
import Navbar from "./components/Navbar";
import RightSection from "./components/RightSection";
import ServiceImageSection from "./components/ServiceImageSection";
import TeamSection from "./components/TeamSection";
import TwoImageSection from "./components/TwoImageSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <LeftSection />
        <RightSection />
      </div>
      <ExpertSection />
      <AboutSection />
      <TeamSection />
      <TwoImageSection/>
      <ServiceImageSection/>
    </>
  );
}

export default App;
