import { Mobile } from "@/config/MediaQuery";
// import Image from 'next/image';
import SidNav from "./SideNav";
import AboutSection from "./Section/AboutSection";
import ExperienceSection from "./Section/ExperienceSection";
import ProjectSection from "./Section/ProjectSection";

const Homepage = () => {
  const isMobile = Mobile();

  return (
    <div className={`w-full flex flex-row gap-10 justify-between `}>
      <SidNav isMobile={isMobile} />
      <div className=" w-[38%] mt-20 py-1 min-h-screen mr-36">
        <AboutSection isMobile={isMobile}/>
        <ExperienceSection isMobile={isMobile}/>
        <ProjectSection isMobile={isMobile}/>
      </div>
    </div>
  );
};

export default Homepage;
