import './App.css';
import Categorydropdown from './components/Categorydropdown';
import SubcategoryDropdown from './components/SubcategoryDropdown';
import CatSubcatDropdown from './components/CatSubcatDropdown';

function App() {
  return (
    <div className="App">
      <Categorydropdown/>
      <SubcategoryDropdown/>
      <CatSubcatDropdown/>
    </div>
  );
}

export default App;
