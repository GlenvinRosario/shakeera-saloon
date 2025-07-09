import "./App.css";
import AboutSection from "./components/AboutSection";
import ExpertSection from "./components/ExpertSection";
import LeftSection from "./components/LeftSection";
import Navbar from "./components/Navbar";
import RightSection from "./components/RightSection";
import TeamSection from "./components/TeamSection";

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
    </>
  );
}

export default App;
