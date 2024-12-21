// import { DarkThemeToggle } from "flowbite-react";

import { About } from "./components/About";
import Skill from "./components/Skill";
import { TopBar } from "./components/TopBar";
import Work from "./components/Work";

function App() {
  return (
    <main className="max-h-full min-h-screen dark:bg-gray-800">
      {/* <div className=""> */}
      <TopBar />
      <About />
      <Skill />
      <Work />
      {/* </div> */}
    </main>
  );
}

export default App;
