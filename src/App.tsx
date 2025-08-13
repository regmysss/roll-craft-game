import Header from "./components/layouts/Header";
import MainSection from "./components/sections/MainSection";
import StarBackground from "./components/ui/StarBackground";

function App() {
  return (
    <div className="relative flex flex-col h-full bg-[#181A20] text-white overflow-hidden">
      <StarBackground />
      <div className="flex flex-col flex-1 z-20 overflow-y-auto overflow-x-hidden px-10 py-5">
        <Header />
        <MainSection />
      </div>
    </div>
  );
}

export default App;