
import { About } from "./components/About";
import Skill from "./components/Skill";
import { TopBar } from "./components/TopBar";
import Work from "./components/Work";

function App() {
  return (
    <main className="max-h-full min-h-screen dark:bg-gray-800">
      <TopBar />
      <About />
      <Skill />
      <Work />
    </main>
  );
}

export default App;
