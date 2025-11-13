import { DemoProvider } from './context/DemoContext';
import HomeScreen from './components/HomeScreen';
import BuddiButton from './components/BuddiButton';
import BuddiChat from './components/BuddiChat';
import PlanModal from './components/PlanModal';
import RewardsModal from './components/RewardsModal';

function App() {
  return (
    <DemoProvider>
      <div className="app-stage">
        <div className="mobile-shell">
          <div className="relative min-h-full bg-transparent">
            <HomeScreen />
            <BuddiButton />
            <BuddiChat />
            <PlanModal />
            <RewardsModal />
          </div>
        </div>
      </div>
    </DemoProvider>
  );
}

export default App;
