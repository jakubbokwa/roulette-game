import { ReactComponent as RouletteWheel } from "./components/roulette/roulette.svg";

function App() {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-1/3 hover:rotate-[720deg] transition-all duration-[3000ms] ease-in-out">
        <RouletteWheel />
      </div>
    </div>
  );
}

export default App;
