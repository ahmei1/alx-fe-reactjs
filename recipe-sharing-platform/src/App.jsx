import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Recipe Share
      </Link>
      <nav className="space-x-4">
        <Link 
          to="/" 
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link 
          to="/add" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition-colors"
        >
          + Add Recipe
        </Link>
      </nav>
    </div>
  </header>
);


function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4 md:p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;