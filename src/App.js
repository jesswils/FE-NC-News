import './App.css';
import { ArticleCard } from './components/articles/ArticleCard';
import { SortBy } from './components/articles/SortBy';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <header className="app-header">
        <Header />
      </header>
      <SortBy />
      <ArticleCard />
    </div>
  );
}

export default App;
