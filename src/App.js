import './App.css';
import { ArticleCard } from './components/articles/ArticleCard';
import { SortBy } from './components/articles/SortBy';
import { Header } from './components/Header';
import { useState } from 'react'

function App() {
  const [articles, setArticles] = useState([])
  return (
    <div>
      <header className="app-header">
        <Header />
      </header>
      <SortBy articles={articles} setArticles={setArticles} />
      <ArticleCard articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default App;
