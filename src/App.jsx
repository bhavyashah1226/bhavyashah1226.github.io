import { BrowserRouter } from "react-router-dom";

import {
  About,
  Parallax,
  Contact,
  Experience,
  Education,
  Hero,
  Navbar,
  Tech,
  Portfolio,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className={`relative w-full h-screen mx-auto bg-primary`}>
          <Parallax type="portfolio" />
        </div>
        <About />
        <Tech />
        <Experience />
        <Portfolio />
        <Education />
        <div className="relative z-0 w-full h-full mx-auto bg-primary">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
