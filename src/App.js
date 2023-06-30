import './App.css';
import CategoryDropdown from './components/CategoryDropdown';
import SubcategoryDropdown from './components/SubCategoryDropdown';
import CatSubcatDropdown from './components/CatSubcatDropdown';


function App() {
  return (
    <div className="App">
      <CategoryDropdown/>
      <SubcategoryDropdown/>
      <CatSubcatDropdown/>
    </div>
  );
}

export default App;
